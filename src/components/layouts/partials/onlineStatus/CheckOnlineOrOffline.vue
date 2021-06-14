<template>
  <!-- check online or offline -->
  <div class="onlineStatus">
    <div v-if="isOnline">
      <div class="alert alert-success text-small" role="alert">
        You are in
        <strong>Online mode</strong>.
      </div>
    </div>
    <div v-else>
      <div class="alert alert-danger" role="alert">
        You are in
        <a href="#" class="alert-link">Offline mode</a>.
      </div>
    </div>
  </div>
  <!-- check online or offline -->
</template>

<script>
export default {
  name: "CheckOnlineOrOffline",
  data() {
    return {
      isOnline: false,
    };
  },
  methods: {},
  created() {
    if (window.navigator.onLine) this.isOnline = true;
    window.addEventListener("online", () => {
      this.isOnline = true;
    });
    window.addEventListener("offline", () => {
      this.isOnline = false;
    });
  },
};
</script>

<style>
.alert {
  padding: 5px 20px !important;
  text-align: center;
  border-radius: 0 !important;
  font-size: 14px;
}
</style>
