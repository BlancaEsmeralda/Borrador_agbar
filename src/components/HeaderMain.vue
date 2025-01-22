<template>
  <header class="main-header">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/69bb028aa17a6a0bccca69ca0982fdd3b5bf18d4d10e6412766bbcdf02db6477?placeholderIfAbsent=true&apiKey=b652270817834812b1544511c6442c69"
      alt="Company Logo"
      class="logo-image"
    />
  </header>
</template>

<style scoped>
.main-header {
  background-color: rgba(0, 47, 108, 1);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 24px 75px;
}

@media (max-width: 991px) {
  .main-header {
    padding: 0 20px;
  }
}

.logo-image {
  aspect-ratio: 3.48;
  object-fit: contain;
  object-position: center;
  width: 108px;
  max-width: 100%;
}
</style>
