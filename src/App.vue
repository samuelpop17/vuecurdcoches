<template>
  <MenuCoches/>
  <router-view></router-view>
</template>

<script>
import MenuCoches from './components/MenuCoches.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
export default {
  name: 'App',
  components: {
    MenuCoches
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
