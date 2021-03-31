<!-- template section -->
<template>
  <!-- main div -->
  <div>
    <!-- partial form component for login -->
    <Form></Form>
    <!-- partial form component for login end -->
  </div>
  <!-- main div end -->
</template>

<!-- script section -->
<script>
import Form from "../components/layouts/partials/login/Form";


export default {
  name: "Login",
  components: { Form },
};
</script>

<!-- css section -->
<style scoped></style>
