<script>
import { defineComponent, ref, reactive, onMounted, computed } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
// import strapi from "../../../modules/strapi";
import GlobalBtn from '@/components/global/GlobalBtn.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectCards } from 'swiper';
SwiperCore.use([EffectCards]);

import 'swiper/css';
import 'swiper/css/effect-cards';


import { useCitiesStore } from '../../stores/cities'
import { useContinentsStore } from '../../stores/continents'




export default defineComponent({
  name: 'CoursePage',
  components: { 
      IonContent, 
      IonPage,
      Swiper,
      SwiperSlide,
      GlobalBtn
    },
  setup() {
    // CITIES
    const citiesStore = useCitiesStore()
    
    // citiesStore.fetchCities() 
    citiesStore.newFetchCities()
    const citiesValue = computed(() => citiesStore.getCities)


    // CONTINENTS
    const continentsStore = useContinentsStore()
    continentsStore.fetchContinents() 
    const continentsValue = computed(() => continentsStore.getContinents)

    // const testFunction = () => {

    //     // fetch cities for each continent
    //     for (const continent of continents) {
    //       const citiesResponse = await axios.get(`/continents/${continent.id}/cities`)
    //       continent.cities = citiesResponse.data
    //     }
    // }

    // testFunction()

    const countries = reactive({
      Asia: [
        {
          location: 'Asia',
          name: 'Tokyo',
          image: ''
        },
        {
          location: 'Asia',
          name: 'Beijing',
          image: '',
        },
        {
          location: 'Asia',
          name: 'New Delhi',
          image: '',
        }
      ],
      Europe: [
        {
          location: 'Europe',
          name: 'Paris',
          image: ''
        },
        {
          location: 'Europe',
          name: 'London',
          image: '',
        },
        {
          location: 'Europe',
          name: 'Berlin',
          image: '',
        } 
      ],
      America: [
        {
          location: 'America',
          name: 'Washington D.C.',
          image: ''
        },
        {
          location: 'America',
          name: 'Ottawa',
          image: '',
        },
        {
          location: 'America',
          name: 'Mexico City',
          image: '',
        }
      ]
    });

    const activeTab = ref('Asia');

    const swiperRef = ref(null);

    onMounted(() => {
      new SwiperCore(swiperRef.value, {
        effect: 'cards',
        initialSlide: 1,
        grabCursor: true,
      })
      
    })
      
    return {
      countries,
      activeTab,
      swiperRef,
      modules: [EffectCards],
      // products
      citiesValue,
      continentsValue
    }
  },
})
</script>


<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
         <section class="locations-section">
           <div class="title">
              <h2>All locations</h2>
            </div>
             <!-- <ion-item v-for="city in continentsValue.data" :key="city.id">
              <p>{{ city }}</p>
            </ion-item> -->
             <ul>
              <li v-for="city in citiesValue.data" :key="city.id">
                <p>{{ city }}</p>
              </li>
             </ul>
            <div class="tabs-section">
              <div 
                class="tab"
                v-for="(cities, country) in countries"
                 :key="country"
                 :class="{ active: activeTab === country }" 
                @click="activeTab = country"
              >
                {{ country }}
              </div>
            </div>

            <div class="slider-section">
               <swiper
                v-for="(cities, country) in countries" 
                :key="country" 
                v-show="activeTab === country"
                ref="swiperContainer"
                :modules="modules"
                :effect="'cards'"
              >
                <swiper-slide
                   v-for="city in cities" 
                  :key="city"
                >
                 <div class="box">
                  <div class="bg-image">
                    <img src="/assets/img/image-bg.jpg" alt="">
                  </div>
                  <div class="content">
                    <div class="location">
                      <div class="icon">
                        <img src="/assets/svg/icons/location.svg" alt="">
                      </div>
                      <strong>{{ city.location }}</strong>
                   </div>
                  <h3>{{ city.name }}</h3>
                  <GlobalBtn>
                    Detail
                  </GlobalBtn>
                  </div>
                 </div>
                </swiper-slide>
              </swiper>
            </div>

        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>

p {
  color: white;
}
.container {
  padding: 0px 16px;
}


.title h2 {
  margin-top: 0px;
  color: #ffffff;
}

h2 {
  color: #ffffff;
}


.edit-popup .icon svg{
   width: 22px;
    height: 22px;
}

.locations-section  {
  padding-top: 62px;
}

.locations-section .title {
  text-align: center;
}

/* TABS SECTION */

.tabs-section {
   display: flex;
   gap: 16px;
   overflow: scroll;
   margin-top: 32px;
   padding-top: 8px;
   padding-bottom: 8px;
}

.tabs-section .tab {
  color: var(--ion-color-primary-contrast);
  font-size: 16px;
  font-family: 'Unbounded', sans-serif;
  min-width: max-content;
}

.tabs-section .tab.active {
  color: var(--ion-color-primary);
}


/* SLIDER SECTION */

.slider-section {
  margin-top: 32px;
}

.swiper {
  width: 240px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  border-radius: 18px;
  color: #fff;
  padding: 16px;
}

.slider-section .box .bg-image {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
}

.slider-section .box .bg-image::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 100%);
  left: 0px;
  top: 0px;
}

.slider-section .box .bg-image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.slider-section .box .content {
  position: relative;
  z-index: 2;
}

.slider-section .box .location {
  display: flex;
  gap: 8px;
  align-items: center;
}

.slider-section .box .location .icon {
  width: 32px;
  height: 32px;
}

.slider-section .box .location .icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-section .box h3 {
  color: var(--ion-color-primary-contrast);
  font-size: 22px;
  font-weight: 800;
  font-family: 'Unbounded', sans-serif;
  margin-bottom: 16px;
}

</style>