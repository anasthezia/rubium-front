import Vue from 'vue'
import Router from 'vue-router'
import Homepage from "../components/homepage"
import Services from "../components/services/services"
import Vacancies from "../components/vacancies/vacancies"
import Portfolio from "../components/portfolio/portfolio"


Vue.use(Router);
let router = new Router ({
    routes: [{
            path: '/',
            name: 'main',
            component: Homepage,
            meta: { hideLogo: true }
        },
        {
            path: '/services',
            name: 'services',
            component: Services
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/vacancies',
            name: 'vacancies',
            component: Vacancies
        }
    ]
});

export default router;