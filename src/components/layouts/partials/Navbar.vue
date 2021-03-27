<!-- template section -->
<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg bg-white shadow-sm">
    <!-- container -->
    <div class="container my-0">
      <div class="main-container  d-flex align-items-center">
        <!-- <a class="navbar-brand text-dark" href="#" v-if="first_name && last_name"> -->
        <a class="navbar-brand text-dark" href="#">
          <!-- <i class="fas fa-user-circle"></i> {{ first_name + " " + last_name }} -->
          <i class="fas fa-user-circle"></i> {{ username }}</a
        >

        <!-- Details & Logout section -->
        <ul class="navbar-nav ml-auto">
          <!-- Work Details -->
          <li class="nav-item">
            <router-link
              class="nav-link"
              id="work_details_button"
              :to="{ name: 'WorkSubmissionList' }"
              >View</router-link
            >
          </li>

          <!-- Logout -->
          <li class="nav-item">
            <a
              href=""
              class="nav-link logout-btn"
              id="logout_button"
              @click="logout"
              >Logout</a
            >
          </li>
        </ul>
        <!-- Details & Logout section end -->
      </div>
    </div>
    <!-- container end -->
  </nav>
  <!-- Navbar end -->
</template>

<!-- script section -->
<script>
import axios from "axios";

export default {
  name: "Navbar",

  data() {
    return {
      // localStorage data
      username: localStorage.getItem("username"),
      first_name: localStorage.getItem("first_name"),
      last_name: localStorage.getItem("last_name"),
    }; // return
  }, // data

  methods: {
    // Logout (GET): https://dushanbe-backend-apis.herokuapp.com/api/logout/
    logout() {
      const token = localStorage.getItem("token");
      axios
        .get(
          "https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/logout/",
          {
            headers: { Authorization: `token ${token}` },
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
      localStorage.removeItem("token");
      localStorage.clear();
      this.$router.push("/");
    }, // logout
  }, // methods
}; // export default
</script>

<!-- css section -->
<style scoped></style>
