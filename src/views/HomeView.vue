<template>
  <div>
    <HeaderMain class="header" />
  </div>
  <div class="home">
    <component-titulo-principal class="titulo"></component-titulo-principal>
    <div class="search-grid">
      <ComponentSearch label="Numero de serie" />
      <ComponentSearch label="TAG(id.inventario)" />
      <ComponentSearch label="Login Usuario" />
      <ComponentSearch label="NETBIOS" />
    </div>

    <container-form class="home-container"></container-form>
  </div>
</template>

<script>
// @ is an alias to /src
import ComponentTituloPrincipal from "@/components/ComponentTituloPrincipal.vue";
import ContainerForm from "@/components/ContainerForm.vue";
import ComponentSearch from "@/components/ComponentSearch.vue";

export default {
  name: "HomeView",
  components: {
    ComponentTituloPrincipal,
    ContainerForm,
    ComponentSearch,
  },
};
</script>

<style scoped>
.search-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
}

.home-container {
  margin-bottom: 40px;
}
</style>
