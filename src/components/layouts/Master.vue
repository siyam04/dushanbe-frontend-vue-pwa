<!-- template section -->
<template>
  <!-- main div -->
  <div>
    <!-- Navbar -->
    <Navbar />
    <!--contents slot-->
    <slot name="contents"></slot>
  </div>
  <!-- main div end -->
</template>

<!-- script section -->
<script>
import Navbar from "./partials/Navbar";

export default {
  name: "Master.vue",
  components: { Navbar },
};
</script>

<!-- css section -->
<style scoped>
button,
.btn,
.page-link {
  outline: none i !important;
  box-shadow: none i !important;
}
</style>
