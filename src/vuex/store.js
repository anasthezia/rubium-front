import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({

    state: {
        vacancies: []
    },
    mutations: {
        SET_VACANSIES_TO_STATE: (state, vacancies) => {
            state.vacancies = vacancies.data;
        }
    },
    actions: {
        GET_VACANCIES_FROM_API({ commit }) {
            return axios('http://localhost:3000/vacancies', {
                metod: "GET"
            })
                .then((vacancies) => {
                    commit("SET_VACANSIES_TO_STATE", vacancies);
                    return vacancies;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        }
    },
    getters: {
        VACANCIES(state) {
            return state.vacancies
        }
    }
}
);

export default store;