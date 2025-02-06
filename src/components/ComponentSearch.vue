<template>
  <div class="search-wrapper">
    <label class="search-label">{{ label }}</label>
    <div class="search-container">
      <input
        type="text"
        class="search-input"
        @keyup.enter="handleSearch"
        v-model="searchText"
      />
      <button class="search-button" @click="handleSearch">
        <IconSearch class="search-icon" />
      </button>
    </div>
  </div>
</template>

<script>
//importamos paquetes de iconos
import { IconSearch } from "@tabler/icons-vue";

export default {
  name: "ComponentSearch",
  components: {
    IconSearch, //importacion del icono de búsqueda
  },
  // Props que recibe el componente desde el padre
  props: {
    label: {
      type: String,
      required: true, // Etiqueta que se mostrará en el campo de búsqueda
    },
    filterKey: {
      type: String,
      required: true, // Identificador único para cada filtro (numeroSerie, tag, etc.)
    },
  },
  data() {
    return {
      searchText: "", // Almacena el texto ingresado en el campo de búsqueda
    };
  },
  methods: {
    handleSearch() {
      // Emite un evento 'search' al componente padre con la clave y valor del filtro
      this.$emit("search", {
        key: this.filterKey,
        value: this.searchText,
      });
    },
  },
};
</script>

<style scoped>
.search-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 350px;
}

.search-label {
  color: #007fb2;
  font-weight: 700;
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 10px;
  padding-right: 45px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-button {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background: #0066b2;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-icon {
  width: 20px;
  height: 20px;
  color: white;
}

.search-input:focus {
  outline: none;
  border-color: #0066b2;
  box-shadow: 0 2px 8px rgba(0, 102, 178, 0.2);
}
</style>
