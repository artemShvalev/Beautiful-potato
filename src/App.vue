<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "root-component",
  components: {
    NavBar,
  },
};
</script>