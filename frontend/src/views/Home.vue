<template>
  <ion-page>
    <div class="bg-image">
        <img src="/assets/img/image-bg.jpg" alt="">
    </div>
    <section class="home-page container">
        <div class="header">
            <div class="title">
                <h1>
                    Your own
                    Pocket
                    Nomize
                </h1>
            </div>
        </div>
        <div class="footer">
                <div class="buttons-group">
                <router-link to="/dashboard">
                    <GlobalBtn size="big">
                        Get started
                    </GlobalBtn>
                </router-link>
                <router-link to="/dashboard">
                    <GlobalBtn size="big outline-theme">
                        Sign in
                    </GlobalBtn>
                </router-link>
            </div>

            <div class="link">
                <a>
                    Dont have account ?
                    <strong>Sign up</strong>
                </a>
            </div>
        </div>
    </section>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';

import GlobalBtn from '@/components/global/GlobalBtn.vue';


export default defineComponent({
  name: 'TabsPage',
  components: { 
    IonPage,
    GlobalBtn
  },
  setup() {
    return {
  
    }
  }
});
</script>

<style scoped>

h1 {
    margin-top: 0px;
}

.bg-image {
    position: absolute;
    width: 100%;
    height: 100%;
}

.bg-image::after {
    content: '';
    position: absolute;
    z-index: 1;
    background: linear-gradient(180deg, #8744FD 0%, rgba(135, 68, 253, 0) 100%);
    height: 50%;
    width: 100%;
    top: 0px;
    left: 0px;
}

.bg-image::before {
    content: '';
    position: absolute;
    z-index: 1;
    background: linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 50.48%);
    height: 50%;
    width: 100%;
    bottom: 0px;
    left: 0px;
}

.bg-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.home-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    z-index: 2;
    position: relative;
}

.header {
    padding-top: 92px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    text-align: left;
}

h1 {
    color: var(--ion-color-primary-contrast);
}

.footer {
    width: 100%;
    position: relative;
    z-index: 2;
    padding-bottom: 32px;
}

.link { 
    text-align: center;
    margin-top: 32px;
}

.link a {
    color: var(--ion-color-medium);
}
.link a strong {
    color: var(--ion-color-primary-contrast);
}


.buttons-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 8px;
    width: 100%;
}
</style>
