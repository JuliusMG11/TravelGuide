<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
         <section class="courses-section">
          <div class="title">
            <h2>All locations</h2>
          </div>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';


export default defineComponent({
  name: 'CoursePage',
  components: { 
      IonContent, 
      IonPage
    },
  setup() {
     
      return {
       
      }
    }
})
</script>

<style scoped>
.container {
  padding: 0px 16px;
}


.title h2 {
  margin-top: 0px;
  color: #ffffff;
}


.edit-popup .icon svg{
   width: 22px;
    height: 22px;
}



.courses-section .title {
  text-align: center;
}
</style>