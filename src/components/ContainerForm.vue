<!-- FormContainer.vue -->
<template>
  <main class="form-layout" role="main" aria-label="Form Section">
    <section class="form-container" tabindex="0">
      <slot></slot>
    </section>
  </main>
</template>

<style scoped>
.form-layout {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

.form-container {
  width: 100%;
  max-width: 1700px;
  min-height: 781px;
  margin: 10px auto 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 8px 12px 6px rgba(0, 0, 0, 0.15), 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-top: 6px solid #002f6c;
}
</style>
