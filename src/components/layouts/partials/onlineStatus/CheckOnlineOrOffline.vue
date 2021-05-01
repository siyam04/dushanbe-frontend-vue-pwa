<template>
  <!-- check online or offline -->
  <div class="onlineStatus">
    <div v-if="isOnline">
      <div class="alert alert-success text-small" role="alert">
        You are in
        <strong>Online</strong>.
      </div>
    </div>
    <div v-else>
      <div class="alert alert-danger" role="alert">
        You are in
        <a href="#" class="alert-link">Offline</a>.
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
  methods: {
    onlineStatus() {
      // this.isOnline = window.navigator.onLine;

      window.navigator.onLine ? (this.isOnline = true) : this.isOnline;
    },
  },
  created() {
    this.onlineStatus();
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
