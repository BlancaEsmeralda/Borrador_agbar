<!-- components/SelectField.vue -->
<template>
  <div class="asset-type-container">
    <label :for="id" class="asset-type-label">{{ label }}</label>
    <div class="select-container">
      <select
        :id="id"
        :name="id"
        class="asset-type-select"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        aria-label="Select asset type"
        tabindex="0"
      >
        <option value="" selected disabled>Seleccione una opcion</option>
        <option
          v-for="option in options"
          :key="option[keyField]"
          :value="option[valueField]"
        >
          {{ option[displayField] }}
        </option>
      </select>
      <div class="select-indicator" aria-hidden="true"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectField",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    keyField: {
      type: String,
      default: "id",
    },
    valueField: {
      type: String,
      default: "id",
    },
    displayField: {
      type: String,
      default: "name",
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.asset-type-container {
  width: 100%;
  max-width: 300px;
}

.asset-type-label {
  color: rgba(38, 116, 159, 1);
  font-size: 12px;
  font-weight: 800;
  margin-bottom: 8px;
  display: block;
  font-family: "Raleway", sans-serif;
}

.select-container {
  position: relative;
  width: 100%;
}

.asset-type-select {
  width: 100%;
  height: 40px;
  padding: 8px 32px 8px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
  color: #4a5568;
  cursor: pointer;
  font: 14px "Raleway", sans-serif;
}

.asset-type-select:focus {
  outline: 2px solid rgba(38, 116, 159, 1);
  outline-offset: 1px;
}

.select-indicator {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top-color: #4a5568;
  pointer-events: none;
}

@media (max-width: 991px) {
  .asset-type-container {
    padding: 0;
  }
}

@media (max-width: 640px) {
  .asset-type-container {
    max-width: 100%;
  }
}
</style>
