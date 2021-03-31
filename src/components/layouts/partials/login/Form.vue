<!-- template section -->
<template>

  <!-- main div -->
  <div>
    <!-- loginContainer -->
    <div class="loginContainer">
      <!-- container -->
      <div class="container">

        <!-- form-container -->
        <div class="form-container">
          <!-- logo-container -->
          <div class="logo-container mb-4 d-flex align-items-center">
            <img
                src="https://ludwigpfeiffer.com/wp-content/themes/Ludwig-Pfeiffer_Theme/img/logo.png"
                alt="Dushanbe"
            />
            <div>
              <h3 class="login-header-text">Login | DUSHANBE</h3>
              <p class="formDescription mb-0">www.ludwigpfeiffer.com</p>
            </div>
          </div>
          <!-- logo-container end -->

          <!-- formInput -->
          <div class="formInput">
            <!-- login form -->
            <form
                style="max-width: 500px; margin: auto"
                action="#"
                @submit.prevent="loginSubmit"
            >
              <!-- username (email) field -->
              <div class="form-group">
                <input
                    class="form-control"
                    type="email"
                    placeholder="Email"
                    name="email"
                    v-model="username"
                    :class="{'is-invalid': login_validation_data && login_validation_data.username}"/>

                 <!--error handling-->
              <div :class="{'invalid-feedback':login_validation_data && login_validation_data.username}"
                   v-if="login_validation_data && login_validation_data.username">
                  {{login_validation_data.username[0] }}
              </div>
              </div>
              <!-- username (email) field end -->

              <!-- password field -->
              <div class="form-group">
                <input
                    class="form-control"
                    type="password"
                    placeholder="Password"
                    name="psw"
                    v-model="password"
                    :class="{'is-invalid': login_validation_data && login_validation_data.password}"/>

                <div :class="{'invalid-feedback':login_validation_data && login_validation_data.password}"
                   v-if="login_validation_data && login_validation_data.password">
                  {{login_validation_data.password[0] }}
              </div>
              </div>
              <!-- password field end -->

              <!-- button -->
              <button @submit.prevent="loginSubmit" type="submit" class="btn">
                LOGIN
              </button>
              <!-- button end -->
            </form>
            <!-- login form end -->
          </div>
          <!-- formInput end -->
        </div>
        <!-- form-container end -->

      </div>
      <!-- container end -->
    </div>
    <!-- loginContainer end -->
  </div>
  <!-- main div end -->

</template>


<!-- script section -->
<script>
import axios from "axios"
import * as Swal from "sweetalert2"


export default {
  name: "Form",

  data() {
    return {
      username: null,
      password: null,

      login_validation_data: {
        username: null,
        password: null,
      },

    } // return
  }, // data

  methods: {
    /* Login (POST): https://dushanbe-backend-apis.herokuapp.com/api/login/ */
    loginSubmit() {
      axios
          .post("https://dushanbe-backend-apis.herokuapp.com/api/login/", {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            localStorage.setItem("id", response.data.id)
            localStorage.setItem("username", response.data.username)
            localStorage.setItem("first_name", response.data.first_name)
            localStorage.setItem("last_name", response.data.last_name)
            localStorage.setItem("active_status", response.data.active_status)
            localStorage.setItem("superuser_status", response.data.superuser_status)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("groups", JSON.stringify(response.data.groups))
            localStorage.setItem("user_permissions", JSON.stringify(response.data.user_permissions))

            // go to this route after login
            // window.location.href = "/work-submission-create"
            this.$router.push("work-submission-create")

          }) // then
          .catch((error) => {
            this.login_validation_data = error.response.data
            Swal.fire({
              icon: "error",
              text: "Provided Credentials Are Not Correct! Please Try Again...",
            }) // swal

            return error.status(400).json({error: error})
          }) // catch

    }, // loginSubmit

  }, // methods

} // export default

</script>


<!-- css section -->
<style scoped>
body {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
}

* {
  box-sizing: border-box;
}

.loginContainer {
  width: 100%;
  height: 100vh;
  position: relative;
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
}

.form-container {
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  width: 600px;
  /*margin: 50px auto;*/
  padding: 100px 80px;
  /*text-align: center;*/
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.formInput {
  margin-top: 10px;
}

.formDescription {
  /*margin-bottom: 20px;*/
}

.ImageContainer {
  /* margin-top: ; */
  margin: 100px 10px;
}

h3 {
  color: #0061a7;
  text-transform: uppercase;
}

.input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

.carousel-inner img {
  width: 100%;
  height: 100%;
}

.icon {
  padding: 10px;
  margin-top: 5px;
  color: black;
  min-width: 50px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
}

/*
.input-field:focus {
  border: 2px solid dodgerblue;
} */
/* Set a style for the submit button */
.btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 40px !important;
  background-color: #0061a7;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  margin-top: 20px;
  cursor: pointer;
}

.btn:hover {
  opacity: 1;
}

.forgot {
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: #e1bee7;
  padding-top: 15px;
  margin-top: 50px !important;
}

.logo-container img {
  width: 50px;
  height: auto;
  /*margin-bottom: 15px;*/
  margin-right: 15px;
}

@media (max-width: 425px) {
  .form-container {
    width: 100%;
    padding: 20px;
  }

  .logo-container {
    flex-direction: column;
    text-align: center;
    padding-top: 20px;
  }

  .logo-container img {
    margin-bottom: 15px;
    margin-right: 0;
  }
}

@media (max-width: 320px) {
  .login-header-text {
    font-size: 22px;
  }
}
</style>
