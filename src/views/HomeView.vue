<template>
  <div>
    <HeaderMain class="header" />
  </div>
  <div class="home">
    <router-link to="/datosgenerales">
      <img alt="ejemplo" src="../assets/logo.png" />
    </router-link>
    <div class="contenedor_global">
      <HelloWorld
        msg="Mantenimiento Activos Informáticos de Aigües de Barcelona"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
/* Fondo */
.contenedor_global {
  background-color: #ffffff;
  background-position: bottom right;
  background-size: 100% auto;
}
</style>
