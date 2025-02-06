<template>
  <div class="home">
    <div class="search-filters">
      <ComponentSearch
        label="Buscar por Número de Serie"
        filter-key="numeroSerie"
        @search="handleSearch"
      />
      <ComponentSearch
        label="Buscar por NetBIOS"
        filter-key="nombreNetBIOS"
        @search="handleSearch"
      />
    </div>
    <!-- Resto del template -->
  </div>
</template>

<script>
import ComponentSearch from '@/components/ComponentSearch.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    ComponentSearch
  },
  data() {
    return {
      resultados: []
    };
  },
  methods: {
    async handleSearch({ key, value, endpoint }) {
      try {
        const response = await axios.get(`${endpoint}`, {
          params: {
            [key]: value
          }
        });
        this.resultados = response.data;
      } catch (error) {
        console.error('Error en la búsqueda:', error);
        // Manejar el error apropiadamente
      }
    }
  }
};
</script>

<style scoped>
.search-filters {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
</style> 