<!-- components/CheckboxField.vue -->
<template>
  <div
    class="checkbox-container"
    role="checkbox"
    tabindex="0"
    :aria-checked="modelValue"
    @keydown.space.prevent="toggleCheckbox"
    @click="toggleCheckbox"
  >
    <div
      class="checkbox-input"
      :class="{ 'checkbox-checked': modelValue }"
      aria-hidden="true"
    ></div>
    <label class="checkbox-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "CheckboxField",
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Boolean,
      required: true,
      default: false,
    },
    id: {
      type: String,
      default: null,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    toggleCheckbox() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style scoped>
.checkbox-container {
  background: #fff;
  display: flex;
  padding: 15px 38px;
  gap: 10px;
  align-items: center;
  cursor: pointer;
}

.checkbox-input {
  border-radius: 4px;
  background: #fff;
  border: 1px solid rgba(153, 153, 153, 0.6);
  width: 18px;
  height: 18px;
  min-width: 18px;
  transition: all 0.2s ease-in-out;
  position: relative;
}

.checkbox-input.checkbox-checked {
  background: rgba(38, 116, 159, 1);
  border-color: rgba(38, 116, 159, 1);
}

/* Ajustamos la posición del check mark */
.checkbox-input.checkbox-checked::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 3px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-label {
  color: rgba(38, 116, 159, 1);
  font: 800 10px Raleway, sans-serif;
  flex-grow: 1;
  text-align: left;
  user-select: none;
}

.checkbox-container:focus {
  outline: 2px solid rgba(38, 116, 159, 0.5);
  outline-offset: 2px;
}

.checkbox-container:focus:not(:focus-visible) {
  outline: none;
}

@media (max-width: 991px) {
  .checkbox-container {
    padding: 40px 20px;
  }
}

@media (max-width: 640px) {
  .checkbox-container {
    padding: 30px 15px;
  }

  .checkbox-input {
    width: 16px;
    height: 16px;
    min-width: 16px;
  }

  .checkbox-label {
    font-size: 9px;
  }
}
</style>
