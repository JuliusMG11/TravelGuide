import { defineStore } from 'pinia'
import Strapi from 'strapi-sdk-javascript';
const strapi = new Strapi('http://localhost:1337/api/');

import gql from "graphql-tag";
import { GraphQLClient } from "graphql-request";
const endpoint = "http://localhost:1337/graphql";
const graphQLClient = new GraphQLClient(endpoint);

export const useCitiesStore = defineStore('city', {
    state: () => ({
        cities: [ ] }),
        
        // GETTERS
        getters: {
            getCities(state) {
                return state.cities
            },

            // productsCheaperThan(state) {
            //     return (price) => ( state.products.filter(product => product.price < price )) 
            // }
        }, 
        
        // ACTIONS
        actions: {
            // APOLLO FETCH DATA
            async newFetchCities() {
                const query = gql`
                    query City {
                        cities {
                            data {
                                id
                                attributes {
                                    name
                                }
                            }
                        }
                    }
                `;

                try {
                    const data = await graphQLClient.request(query);
                    console.log('TOTO SU APOLLO DATA' + JSON.stringify(data.cities.data))
                    this.cities = data
                } catch (err) {
                    console.log(err)
                }

            },
            // async fetchCities() {
            //     try {
            //         const response = await strapi.getEntries('cities');
            //           this.cities = response;
            //           // console.log('TOTO SU MESTA' + this.cities)
            //         } catch (error) {
            //           console.error(error);
            //         }
            //     }
            }
        })