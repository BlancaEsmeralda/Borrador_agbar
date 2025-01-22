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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
