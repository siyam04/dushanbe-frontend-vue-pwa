<!-- template section -->
<template>
  <!-- main div -->
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Check online or offline mode -->
    <CheckOnlineOrOffline />

    <!--contents slot-->
    <slot name="contents"></slot>
  </div>
  <!-- main div end -->
</template>

<!-- script section -->
<script>
import Navbar from "./partials/Navbar";
import CheckOnlineOrOffline from "./partials/onlineStatus/CheckOnlineOrOffline";

export default {
  name: "Master.vue",
  components: { Navbar, CheckOnlineOrOffline },
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
