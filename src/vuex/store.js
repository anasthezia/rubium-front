import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({

    state: {
        vacancies: [],
        projects: [],
        selectedProject: [], 
        isDrawerOpen11: false
    },
    mutations: {
        SET_VACANSIES_TO_STATE: (state, vacancies) => {
            state.vacancies = vacancies.data;
        },
        SET_PROJECTS_TO_STATE: (state, projects) => {
            state.projects = projects.data;
        },
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
        },
        GET_PROJECTS_FROM_API({ commit }) {
            return axios('http://localhost:3000/projects', {
                metod: "GET"
            })
                .then((projects) => {
                    commit("SET_PROJECTS_TO_STATE", projects);
                    return projects;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        }, 
        TOGGLEDRAWER({state}) {
            state.isDrawerOpen11 = !state.isDrawerOpen11;
        },
        CLOSEDRAWER({state}) {
            state.isDrawerOpen11 = false;
        }
    },
    getters: {
        VACANCIES(state) {
            return state.vacancies
        },
        PROJECTS(state) {
            return state.projects
        },
        DRAVEROPEN(state) {
            return state.isDrawerOpen11
        }
    }
}
);

export default store;