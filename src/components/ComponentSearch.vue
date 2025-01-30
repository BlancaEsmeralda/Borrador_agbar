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
import { IconSearch } from "@tabler/icons-vue";

export default {
  name: "ComponentSearch",
  components: {
    IconSearch,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    handleSearch() {
      alert("Has buscado correctamente");
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
  max-width: 400px;
}

.search-label {
  font-size: 1.2rem;
  color: #0066b2;
  font-weight: 500;
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
