<template>
  <div class="home">
    <router-link to="/datosgenerales">
      <img alt="Vue logo" src="../assets/logo.png" />
    </router-link>
    <HelloWorld
      msg="Mantenimiento Activos Informáticos de Aigües de Barcelona"
    />
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
