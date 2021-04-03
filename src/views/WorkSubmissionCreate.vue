<!-- template section -->
<template>
  <!-- main div -->
  <div>
    <!-- injecting data into master component -->
    <Master>
      <!-- injecting data into master component's slot -->
      <template v-slot:contents>
        <!-- partial form component for work-submission-create -->
        <Form></Form>
        <!-- partial form component for work-submission-create -->
      </template>
      <!-- injecting data into master component's slot end -->
    </Master>
    <!-- injecting data into master component end -->
  </div>
  <!-- main div end -->
</template>

<!-- script section -->
<script>
import Master from "../components/layouts/Master";
import Form from "../components/layouts/partials/work_submission_create/Form";

export default {
  name: "WorkSubmissionCreate",

  components: { Master, Form },
}; // export default
</script>

<!-- css section -->
<style>
body {
  width: 100%;
  height: 100%;
  /* background-color: #f5f5f5; */
}

.shadow-sm {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);
}

.navbar-brand {
  color: #999999;
  font-size: 16px;
}

.navbar a.nav-link {
  font-size: 16px;
  color: #000;
}

.navbar a.logout-btn {
  color: red;
}

.main-container {
  margin: auto;
  width: 70%;
}

.form {
  background: #ffffff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  width: 70%;
  margin: auto;
}

label {
  text-transform: uppercase;
  font-weight: 500;
}

.header img {
  width: 50px;
  height: auto;
  margin-right: 15px;
}

.header h1 {
  color: #0061a7;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
}

.btn-container {
  text-align: right;
}

.custom-select {
  text-transform: capitalize;
}

#submit_button {
  background-color: #0061a7;
  min-width: 150px;
}

@media (max-width: 768px) {
  .main-container,
  .form {
    width: 100%;
  }

  .header h1 {
    font-size: 24px;
  }

  #submit_button {
    width: 100%;
  }
  .navbar-nav {
    flex-direction: row;
  }
  .navbar-nav li {
    margin-left: 10px;
  }
}
@media (max-width: 425px) {
  .header h1 {
    font-size: 20px;
  }

  .btn {
    width: 100%;
  }

  .navbar-nav li {
    margin-left: 15px;
  }
}

@media (max-width: 320px) {
  .header h1 {
    font-size: 18px;
  }

  .card-body {
    padding: 15px;
  }

  .navbar a.nav-link,
  .navbar a.navbar-brand {
    font-size: 14px;
  }
  .header img {
    width: 40px;
  }
}
</style>
