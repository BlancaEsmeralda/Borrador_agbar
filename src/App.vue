<template>
  <div id="app">
    <HeaderMain />
    <router-link />
  </div>
</template>
<script>
import HeaderMain from "@/components/HeaderMain.vue";
export default {
  name: "App",
  components: {
    HeaderMain,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap");
/* Reset global */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

#app {
  font-family: "Raleway", sans-serif; /* Solo Raleway como fuente principal */
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: 0;
  padding: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #243c7c;
}
</style>
