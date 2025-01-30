<template>
  <div>
    <HeaderMain class="header" />
  </div>
  <div class="home">
    <component-titulo-principal class="titulo"></component-titulo-principal>
    <container-form class="home-container"></container-form>
  </div>
</template>

<script>
// @ is an alias to /src
import ComponentTituloPrincipal from "@/components/ComponentTituloPrincipal.vue";
import ContainerForm from "@/components/ContainerForm.vue";
export default {
  name: "HomeView",
  components: {
    ComponentTituloPrincipal,
    ContainerForm,
  },
};
</script>
<style scoped>
.home-container {
  margin-bottom: 10px; /* Ajusta este valor según necesites */
  margin-left: 10px;
  margin-right: 100px;
}
</style>
