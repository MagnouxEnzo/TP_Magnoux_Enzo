import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue';
import Form from './components/Form.vue';
import FormEdit from './components/FormEdit.vue';

const routes = [//Permet d'avoir plusieurs pages
    { path: '/', component: Home },
    { path: '/ajouter', component: Form },
    { path: '/modifier/:id', name: 'FormEdit', component: FormEdit }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app')
