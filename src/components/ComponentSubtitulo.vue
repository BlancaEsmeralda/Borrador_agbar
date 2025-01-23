<template>
  <section
    class="general-data-section"
    role="region"
    aria-labelledby="general-data-title"
  >
    <div class="general-data-container">
      <div class="header-title" tabindex="0">
        <div class="icon-circle" role="presentation">
          <i class="ti ti-chevron-right header-icon" aria-hidden="true"></i>
        </div>
        <h1 id="general-data-title" class="heading">{{ title }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GeneralDataHeader",
  props: {
    title: {
      type: String,
      required: true,
      default: "Datos generales",
    },
  },
};
</script>

<style scoped>
.general-data-section {
  background: #ffffff;
}

.general-data-container {
  display: flex;
  align-items: center;
  padding: 49px 70px;
  background: #ffffff;
  font-family: "Raleway", sans-serif;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.heading {
  color: rgba(0, 127, 178, 1);
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.icon-circle {
  background: #ffffff;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(0, 127, 178, 1);
}

.header-icon {
  color: rgba(0, 127, 178, 1);
  font-size: 20px;
}

@media (max-width: 991px) {
  .general-data-container {
    padding: 49px 40px;
  }
}

@media (max-width: 640px) {
  .general-data-container {
    padding: 30px 20px;
  }

  .heading {
    font-size: 20px;
  }

  .icon-circle {
    width: 28px;
    height: 28px;
  }

  .header-icon {
    font-size: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .header-icon {
    transition: none;
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
