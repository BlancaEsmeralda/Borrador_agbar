<!-- components/TextField.vue -->
<template>
  <div class="field-container" :class="{ 'full-width': fullWidth }">
    <label :for="id" class="field-label">{{ label }}</label>
    <textarea
      v-if="multiline"
      :id="id"
      :name="name || id"
      class="field-textarea"
      :value="modelValue"
      :placeholder="placeholder"
      :aria-label="label"
      role="textbox"
      aria-multiline="true"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <input
      v-else
      :type="type"
      :id="id"
      :name="name || id"
      class="field-input"
      :value="modelValue"
      :placeholder="placeholder"
      :aria-label="label"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    multiline: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.field-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: Raleway, sans-serif;
  width: 100%;
  max-width: 300px;
}

.field-container.full-width {
  max-width: 802px;
}

.field-label {
  color: rgba(38, 116, 159, 1);
  font-size: 11px;
  font-weight: 800;
}

.field-input,
.field-textarea {
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid rgba(230, 230, 230, 1);
  padding: 8px 12px;
  font: 14px inherit;
  outline: none;
}

.field-input {
  height: 40px;
}

.field-textarea {
  height: 60px;
  resize: none;
  width: 100%;
}

.field-input:focus,
.field-textarea:focus {
  border-color: rgba(38, 116, 159, 1);
  box-shadow: 0 0 0 2px rgba(38, 116, 159, 0.2);
}

@media (max-width: 991px) {
  .field-container.full-width {
    max-width: 600px;
  }
}

@media (max-width: 640px) {
  .field-container {
    max-width: 100%;
  }

  .field-container.full-width {
    max-width: 100%;
  }
}
</style>
