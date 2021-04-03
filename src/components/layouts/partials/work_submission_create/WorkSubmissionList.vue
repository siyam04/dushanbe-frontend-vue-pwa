<!-- template section -->
<template>
  <!-- main row -->
  <div class="main-header bg-white shadow-sm px-3 py-2 mb-4">
    <div class="container">
      <div
        class="header-box bg-white d-flex align-items-center justify-content-between"
      >
        <div class="header d-flex align-items-center">
          <img
            src="https://ludwigpfeiffer.com/wp-content/themes/Ludwig-Pfeiffer_Theme/img/logo.png"
            alt="Dushanbe"
          />
          <h1 class="mb-0">Works List</h1>
        </div>
        <div class="page-title-heading">
          <router-link :to="{ name: 'WorkSubmissionCreate' }">
            <button type="button" class="btn btn-primary">
              <span class="fas fa-plus-circle mr-1"></span> Add Work
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container ">
    <!-- Start Data Loader -->
    <div v-if="isLoading" class="loading-container">
      <div class="d-flex align-items-center">
        <div
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></div>
        <h6 class="ml-2 mb-0">Loading...</h6>
      </div>
    </div>
    <!-- End Data Loader -->

    <div class="accordion mt-4" id="accordionExample">
      <div
        class="card"
        v-for="(work, index) in all_work_submissions.slice(
          pageStart,
          pageStart + itemPerPage
        )"
        :key="work.id"
      >
        <div class="card-header" :id="'heading_' + work.id">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              :data-target="'#collapse_' + work.id"
              :aria-expanded="index < 1 ? true : false"
              :aria-controls="'collapse_' + work.id"
            >
              <span>{{
                // index + 1 + ". " + work.bill.short_bill_name + "..."
                work.id + ". " + work.bill.bill_name + "..."
              }}</span>

              <span>{{ work.submission_date }}</span>
            </button>
          </h2>
        </div>

        <div
          :id="'collapse_' + work.id"
          :class="index < 1 ? 'collapse show' : 'collapse'"
          :aria-labelledby="'heading_' + work.id"
          data-parent="#accordionExample"
        >
          <div class="card-body border-top">
            <div class="outer-box type-and-user">
              <div class="inner-box">
                <small>Serial No</small>
                <h5>{{ work.material.serial_no }}</h5>
              </div>

              <div class="inner-box">
                <small>Unit</small>
                <h5 class="text">{{ work.material.unit }}</h5>
              </div>
              <div class="inner-box">
                <small>Quantity</small>
                <h5>{{ work.material.quantity }}</h5>
              </div>
              <div class="inner-box">
                <small>Work Progress</small>
                <h5>{{ work.work_progress }}</h5>
              </div>

              <div class="inner-box">
                <small>Submitted By</small>
                <h5>{{ work.created_by.username }}</h5>
              </div>

              <div class="inner-box">
                <small>Type</small>
                <h5>{{ work.type.type_name }}</h5>
              </div>
            </div>

            <div class="inner-box mt-3">
              <small>Material</small>
              <p class="mb-0">{{ work.material.material_name }}</p>
            </div>

            <div class="dropdown-divider my-3"></div>
            <div class="outer-box">
              <h5>Material</h5>
              <p>{{ work.material.material_name }}</p>
            </div>

            <div class="dropdown-divider my-3"></div>

            <div class="box">
              <small>Submitted By</small>
              <h5 class="mb-0">{{ work.created_by.username }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start Pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          :class="['page-item ', currentPage === 1 ? 'disabled' : '']"
          @click.prevent="setPage(currentPage - 1)"
        >
          <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <!-- <li
          v-for="pageNo in totalPage"
          :key="pageNo"
          :class="['page-item', currentPage == pageNo ? 'active' : '']"
          @click.prevent="setPage(pageNo)"
        >
          <a class="page-link" href="#">{{ pageNo }}</a>
        </li> -->
        <li
          :class="['page-item ', currentPage === totalPage ? 'disabled' : '']"
          @click.prevent="setPage(currentPage + 1)"
        >
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
    <!-- End Pagination -->
  </div>
  <!-- main row end -->
</template>

<!-- script section -->
<script>
import axios from "axios";
import { getRequest } from "@/plugins/requestHandler";

export default {
  name: "WorkSubmissionList",
  data() {
    return {
      all_work_submissions: [],
      url: "https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/",
      currentPage: 1,
      itemPerPage: 5,
      isLoading: true,
    };
  },
  methods: {
    /* Work Submission (GET): https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/ */
    loadWorkSubmission() {
      const token = localStorage.getItem("token");
      const user_id = parseInt(localStorage.getItem("id"));
      axios
        .get(this.url, {
          headers: {
            Authorization: `token ${token}`,
          },
          params: {
            user_id,
            page: this.$route.query.page, // for pagination
          },
        })
        .then((response) => {
          this.all_work_submissions = response.data.results;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setPage: function(pageNumber) {
      if (pageNumber <= 0 || pageNumber > this.totalPage) {
        return;
      }
      this.currentPage = pageNumber;
      // console.log("Current Page: ", this.currentPage)
    },
  },

  created() {
    this.loadWorkSubmission();
  },

  computed: {
    // show all  posts
    displayedPosts() {
      return this.all_work_submissions;
    },
    //
    pageStart: function() {
      return (this.currentPage - 1) * this.itemPerPage;
    },
    // show total pages
    totalPage: function() {
      return Math.ceil(this.all_work_submissions.length / this.itemPerPage);
    },
  },
}; // export default
</script>

<!-- css section -->
<style scoped>
.table {
  /* text-align: center; */
}

.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 120px);
}

.spinner-border {
  color: #0061a7;
}

.header img {
  width: 36px;
  height: auto;
  margin-right: 15px;
}

.header h1 {
  font-size: 22px;
}

.td_action button {
  margin: 3px;
}

.table td,
.table th {
  vertical-align: middle;
  font-size: 15px;
}

.ellipsis {
  max-width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.header-box .btn {
  background: #0061a7;
  border: 0;
}

/* ///////////// Custom accordion ///////////////// */
.card {
  border: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin-bottom: 10px;
}

.accordion .card-header {
  display: flex;
  background: none;
  border: none;
  padding: 0px;
}

.accordion h2 {
  padding: 0;
  width: 100%;
}

.accordion button {
  width: 100%;
  padding: 15px;
  text-decoration: none;
  color: #444444;
  border: none;
  border-radius: 0px;
  box-shadow: none !important;
  outline: none !important;
  position: relative;
  font-size: 16px;
  font-weight: 500;
  white-space: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion button span:first-child {
  width: calc(100% - 150px);
  text-align: left;
  /* background: #000; */
}

.accordion button span:last-child {
  font-size: 14px;
  background: rgba(0, 97, 167, 0.08);
  border-radius: 3px;
  margin-right: 30px;
  padding: 4px 12px;
  border-radius: 30px;
}

.accordion button[aria-expanded="true"] span:last-child {
  background: rgba(255, 255, 255, 0.1);
}

.accordion button[aria-expanded="true"] {
  background: #0061a7;
  color: #ffffff;
}

.accordion button[aria-expanded="true"]:after,
.accordion button[aria-expanded="false"]:after {
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  transition: all 0.3s ease-in-out 0s;
}

.accordion button[aria-expanded="false"]:after {
  content: "+";
}

.accordion button[aria-expanded="true"]:after {
  content: "-";
}

.accordion .card-body .type-and-user {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.inner-box {
  padding: 10px 20px;
  background: #f5f5f5;
  border-radius: 5px;
}

.inner-box small {
  opacity: 0.8;
}

.inner-box h5 {
  margin-bottom: 5px;
  margin-top: 5px;
}

.page-item .page-link {
  color: #0061a7;
}

.page-item.active .page-link {
  background-color: #0061a7;
  border-color: #0061a7;
  color: white;
}

/* ///////////// Custom accordion ///////////////// */
/* //////////////// responsive //////////////// */
@media (max-width: 768px) {
  .accordion .card-body .type-and-user {
    grid-gap: 10px;
  }
}

@media (max-width: 425px) {
  .header h1 {
    width: 50%;
    font-size: 20px;
  }

  .accordion button {
    flex-direction: column;
    align-items: flex-start !important;
  }

  .accordion button span:first-child {
    width: 90%;
    margin-bottom: 10px;
    line-height: normal;
  }

  .accordion button[aria-expanded="true"]:after,
  .accordion button[aria-expanded="false"]:after {
    top: 26px;
  }

  .accordion .card-body .type-and-user {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 320px) {
  .header-box {
    flex-direction: column;
    align-items: flex-start !important;
  }

  .header {
    margin-bottom: 15px;
  }

  .header h1 {
    width: 100%;
    font-size: 20px;
  }

  .page-title-heading {
    width: 100%;
  }
}

/* //////////////// responsive //////////////// */
</style>
