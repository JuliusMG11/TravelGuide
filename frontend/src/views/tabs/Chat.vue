<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
         <section class="cakes-section">
          <div class="title">
            <h2>CHAT</h2>
          </div>
        <div class="chat-section">
             <form @submit.prevent="submitMessage">
                <div class="chat-input-section">
                  <input v-model="message" placeholder="Type a message...">
                </div>
                  <button type="submit">Send</button>
              </form>
        </div>

        <div class="response-section">
           <div v-for="response in responses" :key="response.id">
              <h3>{{response.text}}</h3>
            </div>
        </div>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

import axios from 'axios';
// import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai'

export default  defineComponent({
  name: 'CakesPage',
  components: { 
    IonContent, 
    IonPage
  },
  setup() {

    const message = ref('')
    const responses = ref([])


    //  const fetchAnswer = async() => {
    //    const configuration = new Configuration({
    //     apiKey: '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', // Nastavenie vášho API kľúča
    //   });

    //   const openai = new OpenAIApi(configuration);

    //  const requestPayload = {
    //     prompt: message.value,
    //     max_tokens: 100,
    //     top_p: 1,
    //     frequency_penalty:0.0,
    //     presence_penalty:0.0,
    //     stop: ["\n"]
    //   };

    //   const response = await openai.createCompletion(requestPayload);

    //   console.log(response)

    //   const answerText = response.choices[0]?.text || '';
    //   responses.value = answerText; // Nastavenie hodnoty odpovede do reactive premennej
    // };

    const submitMessage = async() => {
      try {
        // make the API call
        const response = await axios.post('https://api.openai.com/v1/completions', {
          prompt: `Otázka: ${message.value}`,
          temperature:1,
          top_p: 1,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
          max_tokens: 100,
          // stop: ["\n"],
          model: 'text-davinci-003',
        }, {
          headers: {
            'Authorization': `Bearer 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`
          },
        });

        // update the responses array with the API response
       
        responses.value.push({
          id: Date.now(),
          text: response.data.choices[0].text
        });

        console.log(response)

        // clear the message input
        // message.value = '';
        } catch (error) {
          console.error(error);
        }
      
    }

    

    
    return {
        message,
        responses,
        submitMessage
    }
  }
});
</script>

<style scoped>

.container {
  padding: 0px 16px;
}

.edit-popup{ 
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
}

.edit-popup .icon svg{
   width: 22px;
    height: 22px;
}

h3 {
  color: white;
}

.title h2 {
  margin-top: 0px;
}

.tabs-component-panel {
  color: var(--ion-item-background);
}


.cakes-section .title {
  text-align: center;
}



.tab-grid {
  display: flex;
  gap: 8px;
}


.tab-grid .tab.active {
  background: var(--ion-color-primary);
  color: var(--ion-color-primary-contrast);
  font-weight: 600;
}

.chat-input-section input {
  background: white;
  border: blue;
  color: black;
}

</style>
