<template>
  <ion-page>
    <ion-content>
        <button class="location" @click="getLocation">Get Location</button>
        <div class="map" ref="mapContainer" style="height: 100%; width: 100%;"></div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, onMounted, ref, reactive } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

import mapboxgl from 'mapbox-gl';

export default defineComponent({
  name: 'CoursePage',
  components: { 
      IonPage,
      IonContent
    },
  setup() {

    const mapContainer = ref(null);
    const map = ref(null);

    const data = reactive({
      location: null,
      marker: null
    });


    mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWFub21nIiwiYSI6ImNrbjRhbHVlMDBmaWQydnM5ZDJrdDlhcDIifQ.cqndNn4Xp_GxuCDFByoHEA';
  
    
    const setupMap = () => {
     map.value = new mapboxgl.Map({
        container: mapContainer.value,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [-74.5, 40],
        zoom: 9,
        preserveDrawingBuffer: true
      });
       // Set map size to full screen
      map.value.resize();
    };

   const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          data.location = [position.coords.longitude, position.coords.latitude];
         
            data.marker = new mapboxgl.Marker()
              .setLngLat(data.location)
              .addTo(map.value);

          

          map.value.flyTo({ 
              center: data.location,
              zoom: 12
          });
        }, error => {
          console.log(error);
        });
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    }


   
   onMounted(() => {

      setupMap();
  
      // data.marker = new mapboxgl.Marker().addTo(map.value);
        map.value.on('load', () => {
          map.value.resize();

          const containerLink = mapContainer.value.querySelector('.mapboxgl-control-container');
          containerLink.style.display = 'none';
        
          const canvas = mapContainer.value.querySelector('.mapboxgl-canvas');
          canvas.style.width = '100%';
          canvas.style.height = '100%';
      })
    })


      return {
        mapContainer,
        getLocation
      }
    }
})
</script>

<style scoped>

.noScroll {
  overflow: hidden;
}



.map {
  
  width: 100%;
  height: 100%;
}


.location {
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 2;
}

.mapboxgl-control-container {
  display: none;
}

</style>