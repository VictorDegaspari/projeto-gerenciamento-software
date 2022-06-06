<template>
  <RouterView />
  <div id="app"></div>
</template>

<script>
import { RouterView } from "vue-router";
export default {
  components: {
    RouterView,
  },
};
</script>

<style>
@import "@/assets/base.css";
</style>
