<!-- template section -->
<template>
  <!-- main container -->
  <div class="create-form-container">
    <!-- main div -->
    <div class="container">
      <!-- form start -->
      <form
          name="bill_form"
          id="form_reset"
          class="form rounded bg-white"
          @submit.prevent="submitBillSubmissionForm"
      >
        <!-- logo & heading -->
        <div class="card-header bg-white">
          <div class="header d-flex align-items-center">
            <router-link :to="{ path: '/work-submission-create' }">
              <img
                  src="https://ludwigpfeiffer.com/wp-content/themes/Ludwig-Pfeiffer_Theme/img/logo.png"
                  alt="Dushanbe"
              />
            </router-link>
            <h1 class="">Work Submission | Dushanbe</h1>
          </div>
        </div>

        <!-- card body -->
        <div class="card-body">
          <!-- array of strings or numbers -->
          <!-- <h1>hello</h1>
          <v-select :options="['Canada', 'United States']"></v-select> -->

          <!-- Bill-->
          <div class="form-group">
            <label>Bill</label>

            <!-- <Select2
              :options="filter_bill"
              @change="myChangeEvent($event)"
              @select="mySelectEvent($event)"
            /> -->

            <select
                v-model="bill"
                @change="loadType()"
                class="custom-select"
                :class="{
                'is-invalid':
                  field_validation_data && field_validation_data.bill,
              }"
            >
              <option selected disabled>select bill</option>
              <option v-for="bill in all_bills" :key="bill.id" :value="bill.id">
                <!--{{ bill.short_bill_name }}-->
                {{ bill.bill_name.substr(0, 50) + "..." }}
              </option>
            </select>

            <!-- bill error handling-->
            <div
                :class="{
                'invalid-feedback':
                  field_validation_data && field_validation_data.bill,
              }"
                v-if="field_validation_data && field_validation_data.bill"
            >
              {{
                !isOnline
                    ? field_validation_data.Bill
                    : field_validation_data.bill[0]
              }}
            </div>
          </div>
          <!-- Bill end -->

          <!-- Type -->
          <div class="form-group">
            <label>Type</label>
            <select
                :disabled="switchTypeField()"
                v-model="type"
                :class="
                field_validation_data && field_validation_data.type
                  ? 'custom-select is-invalid'
                  : 'custom-select all-type'
              "
                @change="loadMaterial()"
            >
              <option selected disabled>Select</option>
              <option
                  v-for="type in filtered_types_by_bill_id"
                  :key="type.id"
                  :value="type.id"
              >
                <!--{{ type.short_type_name }}-->
                {{ type.type_name.substr(0, 50) + "..." }}
              </option>
            </select>

            <!-- type error handling-->
            <div
                :class="{
                'invalid-feedback':
                  field_validation_data && field_validation_data.type,
              }"
                v-if="field_validation_data && field_validation_data.type"
            >
              {{
                !isOnline
                    ? field_validation_data.Type
                    : field_validation_data.type[0]
              }}
            </div>
          </div>
          <!-- Type end -->

          <!-- Materials -->
          <div class="form-group">
            <label>Material</label>
            <select
                :disabled="switchMaterialField()"
                v-model="material"
                :class="
                field_validation_data && field_validation_data.material
                  ? 'custom-select is-invalid'
                  : 'custom-select all-material'
              "
                @change="loadMaterialData()"
            >
              <option selected disabled>select material</option>
              <option
                  v-for="material in filtered_materials_by_type_id"
                  :key="material.id"
                  :value="material.id"
              >
                <!--{{ material.short_material_name }}-->
                {{ material.material_name.substr(0, 50) + "..." }}
              </option>

              <!-- material error handling -->
              <div
                  :class="{
                  'invalid-feedback':
                    field_validation_data && field_validation_data.material,
                }"
                  v-if="field_validation_data && field_validation_data.material"
              >
                {{
                  !isOnline
                      ? field_validation_data.material
                      : field_validation_data.material[0]
                }}
              </div>
            </select>

            <!-- Populated fields -->
            <div class="form-row mt-3">
              <!-- Serial Number -->
              <div class="col-md-4">
                <div class="form-group mb-lg-0">
                  <input
                      disabled
                      id="serial_number"
                      v-model="serial_no"
                      class="form-control"
                      placeholder="Serial Number"
                  />
                </div>
              </div>

              <!-- Unit -->
              <div class="col-md-4">
                <div class="form-group mb-lg-0">
                  <input
                      disabled
                      id="unit"
                      v-model="unit"
                      class="form-control"
                      placeholder="Unit"
                  />
                </div>
              </div>

              <!-- Quantity -->
              <div class="col-md-4">
                <div class="form-group mb-0">
                  <input
                      disabled
                      id="quantity"
                      v-model="quantity"
                      class="form-control"
                      placeholder="Quantity"
                  />
                </div>
              </div>
            </div>
            <!-- Populated fields end -->
          </div>
          <!-- Materials end -->

          <!-- Date & WorkProgress -->
          <div class="form-group">
            <!-- main row -->
            <div class="form-row">
              <!-- Date -->
              <div class="col-md-6">
                <div class="position-relative form-group mb-lg-0">
                  <label>Date</label>
                  <input
                      type="date"
                      id="submission_date"
                      class="form-control"
                      v-model="submission_date"
                      :class="{
                      'is-invalid':
                        field_validation_data &&
                        field_validation_data.submission_date,
                    }"
                  />

                  <!--Error Handling-->
                  <div
                      :class="{
                      'invalid-feedback':
                        field_validation_data &&
                        field_validation_data.submission_date,
                    }"
                      v-if="
                      field_validation_data &&
                        field_validation_data.submission_date
                    "
                  >
                    {{
                      !isOnline
                          ? field_validation_data.submission_date
                          : field_validation_data.submission_date[0]
                    }}
                  </div>
                </div>
              </div>

              <!-- WorkProgress -->
              <div class="col-md-6">
                <div class="position-relative form-group mb-0">
                  <label>Work Progress</label> <br/>
                  <!-- <input type="range" class="form-range w-100 mt-2" v-model="work_progress"> -->
                  <!-- <p style="position: absolute; right: 0">{{work_progress}}</p> -->

                  <input
                      type="number"
                      id="work_progress"
                      class="form-control"
                      v-model="work_progress"
                      placeholder="0"
                      min="0"
                      step=".01"
                      :class="{
                      'is-invalid':
                        field_validation_data &&
                        field_validation_data.work_progress,
                    }"
                  />

                  <!--Error Handling-->
                  <div
                      :class="{
                      'invalid-feedback':
                        field_validation_data &&
                        field_validation_data.work_progress,
                    }"
                      v-if="
                      field_validation_data &&
                        field_validation_data.work_progress
                    "
                  >
                    {{
                      !isOnline
                          ? field_validation_data.work_progress
                          : field_validation_data.work_progress[0]
                    }}
                  </div>
                </div>
              </div>
            </div>
            <!-- main row -->
          </div>
          <!-- Date & WorkProgress end -->

          <!-- Submit Button -->
          <div class="btn-container">
            <button
                @submit.prevent="submitBillSubmissionForm"
                id="submit_button"
                class=" btn btn-primary mt-1"
                :disabled="isDataSubmit ? true : false"
            >
              {{ isDataSubmit ? "Loading..." : "SUBMIT" }}
            </button>
          </div>
          <!-- Submit Button end-->
        </div>
        <!-- card body end -->
      </form>
      <!-- form end -->
    </div>
    <!-- Main Div End -->
  </div>
  <!-- main container end -->
</template>

<!-- script section -->
<script>
import $ from "jquery";
import axios from "axios";
import Swal from "sweetalert2";
import {getRequest} from "@/plugins/requestHandler";

// import Select2Component
// import Select2 from "vue3-select2-component";


/* exporting */
export default {
  name: "Form",
  // components: { Select2 },

  data() {
    return {
      /* GET API data */
      all_bills: [],
      all_types: [],
      all_materials: [],
      work_submissions: [],

      filter_bill: [],

      /* filtered data */
      filtered_types_by_bill_id: [],
      filtered_materials_by_type_id: [],

      /* materials populated data */
      serial_no: null,
      unit: null,
      quantity: null,

      /* POST API data */
      bill: null,
      type: null,
      material: null,
      submission_date: null,
      work_progress: null,

      /* field error validation data */
      field_validation_data: {
        bill: "",
        type: "",
        material: "",
        submission_date: "",
        work_progress: "",
      },

      test1: "",

      isDataSubmit: false,
      isOnline: window.navigator.onLine,

      /* localStorage data */
      username: localStorage.getItem("username"),
    };
  },

  /* methods */
  methods: {
    /* first, getting all data from API */
    async getAllData() {
      /* Bill List (GET): https://dushanbe-backend-apis.herokuapp.com/api/bills/ */

      /* system-1: saving API */
      // this.all_bills = await getRequest('bills/')

      /* system-2: saving API to localStorage if not get already */
      if (localStorage.getItem("bills")) {
        this.all_bills = JSON.parse(localStorage.getItem("bills"));
      } else {
        let bills = await getRequest("bills/");
        if (bills) {
          localStorage.setItem("bills", JSON.stringify(bills));
        }
      }

      /* Type List (GET): https://dushanbe-backend-apis.herokuapp.com/api/types/ */

      /* system-1: saving API */
      // this.req_types = await getRequest('types/')

      /* system-2: saving API to localStorage if not get already */
      if (localStorage.getItem("types")) {
        this.all_types = JSON.parse(localStorage.getItem("types"));
      } else {
        let types = await getRequest("types/");
        if (types) {
          localStorage.setItem("types", JSON.stringify(types));
        }
      }

      /* Material List (GET): https://dushanbe-backend-apis.herokuapp.com/api/materials/ */

      /* system-1: saving API */
      // this.req_materials = await getRequest('materials/')

      /* system-2: saving API to localStorage if not get already */
      if (localStorage.getItem("materials")) {
        this.all_materials = JSON.parse(localStorage.getItem("materials"));
      } else {
        let materials = await getRequest("materials/");
        if (materials) {
          localStorage.setItem("materials", JSON.stringify(materials));
        }
      }
    },

    /* Type List (GET): https://dushanbe-backend-apis.herokuapp.com/api/types/ */
    loadType: function () {
      this.filtered_types_by_bill_id = this.all_types.filter((item) => {
        return item.bill.id === this.bill;
      });
    },

    /* Material List (GET): https://dushanbe-backend-apis.herokuapp.com/api/materials/ */
    loadMaterial: function () {
      this.filtered_materials_by_type_id = this.all_materials.filter((item) => {
        return item.type.id === this.type;
      });
    },

    /* Material Data (GET): https://dushanbe-backend-apis.herokuapp.com/api/materials/ */
    loadMaterialData: function () {
      let selected_material = this.filtered_materials_by_type_id.filter(
          (item) => {
            return item.id === this.material;
          }
      );
      let material_data = selected_material.length ? selected_material[0] : {};
      this.serial_no = material_data.serial_no;
      this.unit = material_data.unit;
      this.quantity = material_data.quantity;
    },

    /* Display today's date into 'submission_date' field */
    todayDate: function () {
      // const current = new Date()
      // this.submission_date = current.getFullYear() + '-' + (current.getMonth()+1) + '-' + current.getDate()
      this.submission_date = new Date().toISOString().substr(0, 10);
    },

    /* Work Submission (GET): https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/ */
    loadWorkSubmission() {
      const token = localStorage.getItem("token");
      const user_id = parseInt(localStorage.getItem("id"));

      axios
          .get('https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/', {
            headers: {
              Authorization: `token ${token}`,
            },
            params: {
              user_id,
            },
          })
          .then((response) => {
            this.work_submissions = response.data.results;
            localStorage.setItem("work_submissions", JSON.stringify(this.work_submissions));
          })
          .catch((err) => {
            console.log(err);
          });
    },

    /* Work Submission (POST): https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/ */
    submitBillSubmissionForm() {
      const token = localStorage.getItem("token");

      const headerConfig = {
        headers: {Authorization: `token ${token}`},
      };

      const bodyParameters = {
        bill: this.bill,
        type: this.type,
        material: this.material,
        submission_date: this.submission_date,
        work_progress: this.work_progress,
      };

      this.isDataSubmit = true;

      /* online first */
      axios
          .post(
              "https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/",
              bodyParameters,
              headerConfig
          )
          .then((response) => {
            this.isDataSubmit = false;

            Swal.fire({
              icon: "success",
              // text: "Work Submitted Successfully!",
              html:
                  "Work Submitted Successfully!" +
                  "<br><br>" +
                  '<div class="swal-btn-cotnainer"> <button  class="btn btn-secondary SwalBtn1 customSwalBtn">' +
                  "Add Again" +
                  "</button>" +
                  '<button  class="btn btn-success ml-2 SwalBtn2 customSwalBtn">' +
                  "View List" +
                  "</button> </div>",
              showCancelButton: false,
              showConfirmButton: false,
            });

            $(".SwalBtn1").on("click", function () {
              Swal.close();
              console.log("SwalBtn1");
            });

            $(".SwalBtn2").on("click", function () {
              console.log("SwalBtn2");
              window.location.assign("work-submission-list");
            });

            // console.log(response);
          })
          .catch((error) => {
            // console.log(error);

            if (window.navigator.onLine) {
              this.field_validation_data = error.response.data;
            } else {
              this.field_validation_data = {
                bill: "This field may not be null",
                type: "This field may not be null",
                material: "This field may not be null",
                submission_date: "This field may not be null",
                work_progress: "This field may not be null",
              };
            }

            this.isDataSubmit = false;
          });

      /* offline */
      if (!window.navigator.onLine === true) {
        if (this.bill && this.type && this.material && this.submission_date && this.work_progress) {

          // this.field_validation_data = {
          //   bill: null,
          //   type: null,
          //   material: null,
          //   submission_date: null,
          //   work_progress: null,
          // };

          /* LS config */
          console.log('--myArr--:', this.work_submissions)
          console.log('--myobj--:', bodyParameters)

          let parseGetDataFromStringfy = JSON.parse(localStorage.getItem('work_submissions') ? localStorage.getItem("work_submissions") : "[]")
          console.log('--parseGetDataFromStringfy--:', typeof parseGetDataFromStringfy, parseGetDataFromStringfy)

          let pushData = [...parseGetDataFromStringfy, bodyParameters]
          console.log('--pushData--:', typeof pushData, pushData)

          pushData.filter(item => {
            console.log('--item_id--', item.id)
            console.log('--bill_name--', item.bill.short_bill_name)
            console.log('--type_name--', item.type.short_type_name)
            console.log('--short_material_name--', item.material.short_material_name)
            console.log('--submission_date--', item.submission_date)
            console.log('--work_progress--', item.work_progress)
            console.log('--created_by--', item.created_by.username)
          })

          Swal.fire({
            icon: "success",
            html:
                "Work Submitted Successfully!" +
                "<br><br>" +
                "You're offline. Work you've submitted is processing in the background & will be add to SharePoint including work list when you're back online." +
                "<br><br>" +
                '<div class="swal-btn-cotnainer"> <button  class="btn btn-secondary SwalBtn1 customSwalBtn">' +
                "Add Again" +
                "</button>" +
                '<button  class="btn btn-success ml-2 SwalBtn2 customSwalBtn">' +
                "View List" +
                "</button> </div>",

            showCancelButton: false,
            showConfirmButton: false,
          }).then((res) => {
            this.isDataSubmit = false;
            console.log("You are in offline");
            // console.log(this.field_validation_data);
          });

          $(".SwalBtn1").on("click", function () {
            Swal.close();
          });
          
          $(".SwalBtn2").on("click", function () {
            window.location.assign("view-lists");
          });
        }
      }

      this.bill = null;
      this.type = null;
      // this.material.serial_no = null
      // this.material.unit = null
      // this.material.quantity = null
      this.material = null;
      this.submission_date = null;
      this.work_progress = null;
    },

    /* Deactivate type field if no dependant API data */
    switchTypeField() {
      // if (this.filtered_types_by_bill_id.length > 0) {
      //   $(".all-type").removeAttr("disabled");
      // } else {
      //   $(".all-type").attr("disabled", "");
      // }
    },

    /* Deactivate material field if no dependant API data */
    switchMaterialField() {
      // if (this.filtered_materials_by_type_id.length > 0) {
      //   $(".all-material").removeAttr("disabled");
      // } else {
      //   $(".all-material").attr("disabled", "");
      // }
    },

    test() {
      //
    },
  },

  created() {
    this.getAllData();
    this.todayDate();
    this.switchTypeField();
    this.switchMaterialField();
    this.loadWorkSubmission();
    this.test();
  },
}; // export default
</script>

<!-- css section -->
<style>
body {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
}

.btn:disabled {
  cursor: no-drop;
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

.create-form-container {
  margin: 30px auto;
  /* width: 60%; */
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
  .main-container {
    width: 100%;
  }

  .header h1 {
    font-size: 20px;
  }

  .btn {
    width: 100%;
  }

  .navbar-nav li {
    margin-left: 15px;
  }

  .swal2-content {
    padding: 0 !important;
  }

  .swal-btn-cotnainer {
    display: flex;
  }

  .swal-btn-cotnainer .btn {
    width: 50%;
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
