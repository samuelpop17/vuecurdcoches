import {createRouter, createWebHistory} from 'vue-router';
import CochesPrincipal from './components/CochesPrincipal.vue';
import CocheDetalles from './components/CocheDetalles.vue';
import CreateCoche from './components/CreateCoche.vue';
import DeleteCoche from './components/DeleteCoche.vue';
import ModificarCoche from './components/ModificarCoche.vue';

const myRoutes = [
    {
        path: "/", component: CochesPrincipal
    }, 
    {
        path: "/detalles/:id", component: CocheDetalles
    }, 
    {
        path: "/create", component: CreateCoche
    }, 
    {
        path: "/delete/:id", component: DeleteCoche
    }, 
    {
        path: "/modificar/:id", component: ModificarCoche
    }, 
  
  
  
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;