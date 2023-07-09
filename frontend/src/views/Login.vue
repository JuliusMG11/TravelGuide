<template>
  <ion-page>
    <div class="bg-image">
        <img src="/assets/img/login-bg.jpg" alt="">
    </div>
      <div class="container ">
         <section class="login-section">
          <div class="title">
            <h2>Login</h2>
          </div>

            <div class="input-group">
                <GlobalInput
                    class="email" 
                    label="Email"
                    type="email"
                    placeholder="johndoe@gmail.com"
                />
                <GlobalInput 
                    label="Password"
                    type="text"
                />
            </div>

            <div class="forgot-password">
              <p>Forgot password ?</p>
            </div>

             <GlobalBtn>
                    Log in
             </GlobalBtn>

             <div class="not-account-section">
              <span>Dont have account ?</span>
              <div class="link">
                <a href="#">Sign up</a>
              </div>
             </div>
        </section>
      </div>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';

import GlobalInput from '@/components/global/GlobalInput.vue'
import GlobalBtn from '@/components/global/GlobalBtn.vue'


export default defineComponent({
  name: 'CoursePage',
  components: { 
      IonPage,
      GlobalInput,
      GlobalBtn
    },
  setup() {
     
      return {
       
      }
    }
})
</script>

<style scoped>

.ion-page {
    display: flex;
    justify-content: center;
}

.bg-image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.bg-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.bg-image::after {
    content: '';
    position: absolute;
    z-index: 2;
    background: #121212;
    opacity: .9;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
}

.container {
  padding: 0px 16px;
}

.login-section {
    height: 100%;
    position: relative;
    z-index: 3;
}

.title {
    margin-bottom: 64px;
    text-align: center;
}

.title h2 {
  margin-top: 0px;
  color: #ffffff;
}

.email {
    margin-bottom: 32px;
}


.forgot-password {
  padding-top :16px;
  padding-bottom: 16px;
  text-align: center;
}

.forgot-password p {
   color: var(	--ion-color-primary-contrast);
}

.not-account-section {
  padding-top: 32px;
  text-align: center;
}

.not-account-section span {
  color: var(----ion-color-medium);
  font-size: 14px;
}

.not-account-section .link {
  padding-top: 12px;
}

.not-account-section a {
  color: var(	--ion-color-primary-contrast);
  font-size: 16px;
  font-display: 800;
}
</style>