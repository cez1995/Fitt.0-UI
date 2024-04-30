import {createRouter, createWebHistory} from 'vue-router';

// Import your components
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';

// Define your routes
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;