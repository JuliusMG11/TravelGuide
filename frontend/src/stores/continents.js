import { defineStore } from 'pinia'
import Strapi from 'strapi-sdk-javascript';
const strapi = new Strapi('http://localhost:1337/api/');

export const useContinentsStore = defineStore('continents', {
    state: () => ({
        continents: [ ] }),
        
        // GETTERS
        getters: {
            getContinents(state) {
                return state.continents
            },

            // productsCheaperThan(state) {
            //     return (price) => ( state.products.filter(product => product.price < price )) 
            // }
        }, 
        
        // ACTIONS
        actions: {
            async fetchContinents() {
                try {
                    const response = await strapi.getEntries('continents');
                      this.continents = response;
                      // console.log('TOTO SU CONTINENTI' + JSON.stringify(this.continents))
                    } catch (error) {
                      console.error(error);
                    }
                }
            }
        })