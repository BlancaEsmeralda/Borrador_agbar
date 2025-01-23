<template>
  <header role="banner" class="maintenance-header">
    <h1 class="maintenance-title" aria-level="1">
      {{ title }}
    </h1>
  </header>
</template>

<script>
export default {
  name: "MaintenanceTitle",
  data() {
    return {
      title: "Matenimiento Activos Informáticos de Agües de Barcelona",
    };
  },
};
</script>

<style scoped>
.maintenance-header {
  background-color: #ffffff;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

.maintenance-title {
  padding: 12px 70px 27px;
  color: rgba(0, 47, 108, 1);
  text-align: center;
  letter-spacing: -0.01em;
  font: 700 40px/1.2 Raleway, sans-serif;
}

@media (max-width: 991px) {
  .maintenance-title {
    font-size: 32px;
    padding: 12px 40px 24px;
  }
}

@media (max-width: 640px) {
  .maintenance-title {
    font-size: 24px;
    padding: 12px 20px 20px;
    text-align: center;
  }
}
</style>
