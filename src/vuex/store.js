import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({

    state: {
        vacancies: [],
        projects: [],
        selectedProject: null,
        isDrawerOpen: false
    },
    mutations: {
        SET_VACANSIES_TO_STATE: (state, vacancies) => {
            state.vacancies = vacancies.data;
        },
        SET_PROJECTS_TO_STATE: (state, projects) => {
            state.projects = projects.data;
        },
        CHANGE_DRAWER: (state) => {
            state.isDrawerOpen = !state.isDrawerOpen;
        },
        CLOSE_DRAWER: (state) => {
            state.isDrawerOpen = false;
        },
        OPEN_PROJECT: (state, index) =>{
            state.selectedProject = index;
            console.log('1111111', state.selectedProject)
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

        TOGGLE_DRAWER({ commit }) {
            commit('CHANGE_DRAWER')
        },
        CLOSE_DRAWER({ commit }) {
            commit('CLOSE_DRAWER')

        },
        SELECT_PROJECT({commit}, index){
            commit ('OPEN_PROJECT', index)
        }
    },
    getters: {
        VACANCIES(state) {
            return state.vacancies
        },
        PROJECTS(state) {
            return state.projects
        },
        DRAWER_OPEN(state) {
            return state.isDrawerOpen
        },
        SELECTED_PROJECT(state) {
        return state.selectedProject
        }
    }
}
);

export default store;