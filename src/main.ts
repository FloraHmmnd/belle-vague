import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const queryClient = new QueryClient();

app.use(router);
app.use(VueQueryPlugin, { queryClient });
app.mount('#app');
