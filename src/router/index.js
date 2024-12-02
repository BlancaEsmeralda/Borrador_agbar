import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//Import de las paginas de los componentes
import DatosGenerales from "../components/DatosGenerales.vue";
import DatosTecnicos from "../components/DatosTecnicos.vue";
import ServiceOfferings from "../components/ServiceOfferings.vue";
import MantenimientoInstancias from "../components/MantenimientoInstancias.vue";
import MantenimientoComunica from "../components/MantenimientoComunica.vue";
import MantenimientoSeguridad from "../components/MantenimientoSeguridad.vue";
import MantenimietoMicro from "../components/MantenimientoMicro.vue";
import MantenimientoSoftware from "../components/MantenimientoSoftware.vue";

const routes = [
  //ruta de casa
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  //ruta de datos generales
  {
    path: "/datosgenerales",
    name: "datosgenerales",
    component: DatosGenerales,
  },
  //ruta de datos tecnicos
  {
    path: "/datostecnicos",
    name: "datostecnicos",
    component: DatosTecnicos,
  },
  //ruta de serviceoffering
  {
    path: "/serviceoffering",
    name: "serviceoffering",
    component: ServiceOfferings,
  },
  {
    path: "/instancias",
    name: "instancias",
    component: MantenimientoInstancias,
  },
  //ruta de seguridad
  {
    path: "/comunicaciones",
    name: "comunicaciones",
    component: MantenimientoComunica,
  },
  //ruta de seguridad
  {
    path: "/seguridad",
    name: "seguridad",
    component: MantenimientoSeguridad,
  },
  //ruta de micro
  {
    path: "/micro",
    name: "micro",
    component: MantenimietoMicro,
  },
  //ruta de software
  {
    path: "/software",
    name: "software",
    component: MantenimientoSoftware,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
