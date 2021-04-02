<!-- template section -->
<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg bg-white shadow-sm">
    <!-- container -->
    <div class="container my-0">
      <div
        class="main-container d-flex justify-content-between align-items-center"
      >
        <!-- <a class="navbar-brand text-dark" href="#" v-if="first_name && last_name"> -->
        <a class="navbar-brand text-dark" href="#">
          <fa-icon icon="user" /> {{ username }}
        </a>

        <!-- Details & Logout section -->
        <ul class="navbar-nav flex-row">
          <!-- Work Details -->
          <li class="nav-item">
            <router-link
              class="nav-link"
              id="work_details_button"
              :to="{ name: 'WorkSubmissionList' }"
              >View
            </router-link>
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
import { getRequest } from "@/plugins/requestHandler";

export default {
  name: "Navbar",

  data() {
    return {
      username: localStorage.getItem("username"),
      first_name: localStorage.getItem("first_name"),
      last_name: localStorage.getItem("last_name"),
    };
  },

  methods: {
    /* Logout (GET): https://dushanbe-backend-apis.herokuapp.com/api/logout/ */
    logout() {
      getRequest("logout/");
      localStorage.removeItem("token");
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<!-- css section -->
<style scoped>
.navbar a,
.navbar a.nav-link {
  font-size: 15px;
}
</style>
