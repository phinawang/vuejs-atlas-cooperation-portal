<template>
  <div id="app">
    <CTable />
  </div>
</template>

<script>
import CTable from "./views/CTable";
export default {
  name: "App",
  components: { CTable },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
