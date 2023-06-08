import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../pages/HomePage.vue'
import ArtistsPage from '../pages/ArtistsPage.vue'

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: HomePage
    },
    {
        name: "ArtistsPage",
        path: "/artists",
        component: ArtistsPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

