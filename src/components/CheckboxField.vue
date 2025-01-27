<!-- components/CheckboxField.vue -->
<template>
    <div class="checkbox-item">
      <input
        type="checkbox"
        :id="id"
        :name="id"
        :checked="modelValue"
        @input="$emit('update:modelValue', $event.target.checked)"
      />
      <label :for="id">{{ label }}</label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CheckboxField',
    props: {
      id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      modelValue: {
        type: Boolean,
        required: true
      }
    },
    emits: ['update:modelValue']
  }
  </script>