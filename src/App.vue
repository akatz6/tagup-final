<template>
  <div id="app">
    <AddNewLog/>
  </div>
</template>

<script>
import AddNewLog from './components/AddNewLog.vue';

export default {
  name: 'App',
  components: {
    AddNewLog
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>
