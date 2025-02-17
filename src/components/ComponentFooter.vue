<template>
  <footer class="site-footer" role="contentinfo"></footer>
</template>

<script>
export default {
  name: "ComponentFooter",
};
</script>

<style scoped>
.site-footer {
  background-color: rgba(0, 47, 108, 1);
  min-height: 99px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
}

@media (max-width: 991px) {
  .site-footer {
    min-height: 80px;
  }
}

@media (max-width: 640px) {
  .site-footer {
    min-height: 60px;
  }
}
</style>
