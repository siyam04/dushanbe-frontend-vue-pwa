<!-- template section -->
<template>
  <!-- main container -->
  <div class="create-form-container">
    <!-- main div -->
    <div class="container">
      <!-- form start -->
      <form
        @submit.prevent="submitBillSubmissionForm"
        class="form rounded bg-white"
        id="form_reset"
        name="bill_form"
      >
        <!-- logo & heading -->
        <div class="card-header bg-white">
          <div class="header d-flex align-items-center">
            <router-link :to="{ path: '/work-submission-create' }">
              <img
                alt="Dushanbe"
                src="https://ludwigpfeiffer.com/wp-content/themes/Ludwig-Pfeiffer_Theme/img/logo.png"
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
              :class="{
                'is-invalid':
                  field_validation_data && field_validation_data.bill,
              }"
              class="custom-select"
              v-model="work_data.bill_id"
            >
              <option disabled selected>select bill</option>
              <option :key="bill.id" :value="bill.id" v-for="bill in all_bills">
                <!--{{ bill.short_bill_name }}-->
                {{ bill.bill_name }}
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
              :class="
                field_validation_data && field_validation_data.type
                  ? 'custom-select is-invalid'
                  : 'custom-select all-type'
              "
              :disabled="!billTypes.length"
              v-model="work_data.type_id"
            >
              <option disabled selected>Select</option>
              <option :key="type.id" :value="type.id" v-for="type in billTypes">
                <!--{{ type.short_type_name }}-->
                {{ type.type_name }}
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
              :class="
                field_validation_data && field_validation_data.material
                  ? 'custom-select is-invalid'
                  : 'custom-select all-material'
              "
              :disabled="!typeMaterials.length"
              @change="setMaterialData()"
              v-model="work_data.material_id"
            >
              <option disabled selected>select material</option>
              <option
                :key="material.id"
                :value="material.id"
                v-for="material in typeMaterials"
              >
                <!--{{ material.short_material_name }}-->
                {{ material.material_name }}
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
                    class="form-control"
                    disabled
                    id="serial_number"
                    placeholder="Serial Number"
                    v-model="work_data.serial_no"
                  />
                </div>
              </div>

              <!-- Unit -->
              <div class="col-md-4">
                <div class="form-group mb-lg-0">
                  <input
                    class="form-control"
                    disabled
                    id="unit"
                    placeholder="Unit"
                    v-model="work_data.unit"
                  />
                </div>
              </div>

              <!-- Quantity -->
              <div class="col-md-4">
                <div class="form-group mb-0">
                  <input
                    class="form-control"
                    disabled
                    id="quantity"
                    placeholder="Quantity"
                    v-model="work_data.quantity"
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
                    :class="{
                      'is-invalid':
                        field_validation_data &&
                        field_validation_data.submission_date,
                    }"
                    class="form-control"
                    id="submission_date"
                    type="date"
                    v-model="work_data.submission_date"
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
                  <label>Work Progress</label> <br />
                  <!-- <input type="range" class="form-range w-100 mt-2" v-model="work_progress"> -->
                  <!-- <p style="position: absolute; right: 0">{{work_progress}}</p> -->

                  <input
                    :class="{
                      'is-invalid':
                        field_validation_data &&
                        field_validation_data.work_progress,
                    }"
                    class="form-control"
                    id="work_progress"
                    placeholder="0"
                    type="text"
                    min="0"
                    step=".01"
                    v-model="work_data.work_progress"
                    maxlength="6"
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
              :disabled="isDataSubmit ? true : false"
              @submit.prevent="submitBillSubmissionForm"
              class=" btn btn-primary mt-1"
              id="submit_button"
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
import { getRequest, postRequest } from "@/plugins/requestHandler";

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
      materials: [],
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
      work_data: {
        submission_date: new Date().toISOString().substr(0, 10),
      },
    };
  },
  computed: {
    billTypes() {
      return this.all_types.filter((type) => {
        return this.work_data.bill_id == type.bill.id;
      });
    },
    typeMaterials() {
      return this.materials.filter((material) => {
        return this.work_data.type_id == material.type.id;
      });
    },
  },
  methods: {
    async getBills() {
      if (localStorage.getItem("bills")) {
        this.all_bills = JSON.parse(localStorage.getItem("bills"));
      } else {
        this.all_bills = await getRequest("bills/");
        if (this.all_bills) {
          localStorage.setItem("bills", JSON.stringify(this.all_bills));
        }
      }
    },
    async getTypes() {
      if (localStorage.getItem("types")) {
        this.all_types = JSON.parse(localStorage.getItem("types"));
      } else {
        this.all_types = await getRequest("types/");
        if (this.all_types) {
          localStorage.setItem("types", JSON.stringify(this.all_types));
        }
      }
    },
    async getMaterials() {
      if (localStorage.getItem("materials")) {
        this.materials = JSON.parse(localStorage.getItem("materials"));
      } else {
        this.materials = await getRequest("materials/");
        if (this.materials) {
          localStorage.setItem("materials", JSON.stringify(this.materials));
        }
      }
    },
    setMaterialData: function() {
      let selected_material = this.materials.filter((item) => {
        return item.id === this.work_data.material_id;
      });
      let material_data = selected_material.length ? selected_material[0] : {};
      this.work_data.serial_no = material_data.serial_no;
      this.work_data.unit = material_data.unit;
      this.work_data.quantity = material_data.quantity;
    },
    setSubmittedListItem() {
      let selectedBill = this.all_bills.filter((item) => {
        // return item.id === this.bill
        return item.id === this.work_data.bill_id;
      })[0];

      let selectedType = this.all_types.filter((item) => {
        // return item.id === this.type
        return item.id === this.work_data.type_id;
      })[0];

      let selectedMaterial = this.materials.filter((item) => {
        // return item.id === this.material
        return item.id === this.work_data.material_id;
      })[0];

      let data = {
        bill: selectedBill,
        type: selectedType,
        material: selectedMaterial,
        submission_date: this.work_data.submission_date,
        work_progress: this.work_data.work_progress,
        created_by: {
          id: localStorage.getItem("id"),
          username: localStorage.getItem("username"),
          first_name: localStorage.getItem("first_name"),
          last_name: localStorage.getItem("last_name"),
          is_superuser: localStorage.getItem("superuser_status"),
        },
        active_status: localStorage.getItem("active_status"),
      };

      let oldData = [];
      if (localStorage.getItem("work_submissions")) {
        oldData = JSON.parse(localStorage.getItem("work_submissions"));
      }

      oldData.unshift(data);
      localStorage.setItem("work_submissions", JSON.stringify(oldData));
    },
    validateRequest() {
      if (
        !this.work_data.bill_id ||
        !this.work_data.type_id ||
        !this.work_data.material_id ||
        !this.work_data.work_progress
      ) {
        Swal.fire({
          icon: "error",
          title: "OOPS!",
          text: "Please Select Valid Data...",
        });
        return false;
      }
      return true;
    },
    async submitBillSubmissionForm() {
      if (!this.validateRequest()) {
        return false;
      }

      const data = {
        bill: this.work_data.bill_id,
        type: this.work_data.type_id,
        material: this.work_data.material_id,
        submission_date: this.work_data.submission_date,
        work_progress: this.work_data.work_progress,
      };

      this.isDataSubmit = true;
      let submit = await postRequest("work-submissions/", data);

      if (submit) {
        this.isDataSubmit = false;
        this.fireSuccessMessage(true);
      } else {
        this.isDataSubmit = false;

        if (window.navigator.onLine) {
          // this.field_validation_data = error.response.data;
          alert("Error Found!");
        } else {
          this.setSubmittedListItem();
          this.fireSuccessMessage(false);
        }
      }

      this.work_data = {
        submission_date: new Date().toISOString().substr(0, 10),
      };
    },
    fireSuccessMessage(online) {
      let message = online
        ? "Work Submitted Successfully!"
        : "Work Submitted Successfully & Processing in the Background...";
      Swal.fire({
        icon: "success",
        html: `${message}
                    <br><br>
                    <div class="swal-btn-cotnainer"> <button  class="btn btn-secondary SwalBtn1 customSwalBtn">
                    Add Again
                    </button>
                    <button  class="btn btn-success ml-2 SwalBtn2 customSwalBtn">
                    View List
                    </button> </div>`,
        showCancelButton: false,
        showConfirmButton: false,
      });

      $(".SwalBtn1").on("click", () => {
        Swal.close();
      });

      $(".SwalBtn2").on("click", () => {
        this.$router.push({ path: "/work-submission-list" });
        Swal.close();
      });
    },
  },

  created() {
    this.getBills();
    this.getTypes();
    this.getMaterials();
  },
};
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
