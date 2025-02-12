<template>
  <button class="custom-button">
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  name: "ComponentButton",
  props: {
    label: {
      type: String,
      default: "Guardar Cambios",
    },
  },
};
</script>

<style scoped>
.custom-button {
  background-color: #002f6c;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #003d8a;
}
</style>
