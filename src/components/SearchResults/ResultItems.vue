<template>
  <div class="col-lg-9 col-md-9" id="result-items">
    <div class="toolbar layout-3">
      <ul class="toolbar-action hidden-xs">
        <li>
          <div class="form-extra-field dropdown">
            <button
              class="btn btn-link"
              type="button"
              @click="showFilter = !showFilter"
            >
              Trie <i class="fa fa-angle-down arrow"></i>
            </button>
            <div class="dropdown-menu sort-menu" v-show="showFilter">
              <div class="sort-title">
                <h3>TRIER PAR</h3>
              </div>
              <div class="sort-item dp-icheck">
                <div class="dp-icheck-item">
                  <label>
                    Climatisée
                    <input
                      type="radio"
                      name="service_order"
                      class="service_order"
                      value="Chambre climatisée"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="dp-icheck-item">
                  <label>
                    Ventilée
                    <input
                      type="radio"
                      name="service_order"
                      class="service_order"
                      value="Chambre ventilée"
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="layout">
          <span class="layout-item">
            <i class="fa input-icon field-icon">
              <svg
                height="24px"
                width="24px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->

                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Hotel-layout"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g
                    id="Search_Result_1_Grid"
                    transform="translate(-1255.000000, -920.000000)"
                    stroke="#A0A9B2"
                  >
                    <g
                      id="list-hotel"
                      transform="translate(435.000000, 910.000000)"
                    >
                      <g
                        id="ico_list"
                        transform="translate(820.000000, 10.000000)"
                      >
                        <g id="layout-bullets">
                          <rect
                            id="Rectangle-path"
                            x="6.875"
                            y="0.6225"
                            width="12.5"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                          <rect
                            id="Rectangle-path"
                            x="6.875"
                            y="8.1225"
                            width="12.5"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                          <rect
                            id="Rectangle-path"
                            x="6.875"
                            y="15.6225"
                            width="12.5"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                          <rect
                            id="Rectangle-path"
                            x="0.625"
                            y="0.6225"
                            width="3.75"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                          <rect
                            id="Rectangle-path"
                            x="0.625"
                            y="8.1225"
                            width="3.75"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                          <rect
                            id="Rectangle-path"
                            x="0.625"
                            y="15.6225"
                            width="3.75"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </i>
          </span>
          <span class="layout-item active" style="margin-left: 7px">
            <i class="fa input-icon field-icon">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Hotel-layout"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g
                    id="Search_Result_1_Grid"
                    transform="translate(-1285.000000, -920.000000)"
                    stroke="#5191FA"
                  >
                    <g
                      id="list-hotel"
                      transform="translate(435.000000, 910.000000)"
                    >
                      <g
                        id="ico_grid_active"
                        transform="translate(850.000000, 10.000000)"
                      >
                        <g id="layout-module">
                          <rect
                            id="Rectangle-path"
                            x="0.625"
                            y="0.6225"
                            width="3.75"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                          <rect
                            id="Rectangle-path"
                            x="8.125"
                            y="0.6225"
                            width="3.75"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                          <rect
                            id="Rectangle-path"
                            x="15.625"
                            y="0.6225"
                            width="3.75"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                          <rect
                            id="Rectangle-path"
                            x="0.625"
                            y="8.1225"
                            width="3.75"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                          <rect
                            id="Rectangle-path"
                            x="8.125"
                            y="8.1225"
                            width="3.75"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                          <rect
                            id="Rectangle-path"
                            x="15.625"
                            y="8.1225"
                            width="3.75"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                          <rect
                            id="Rectangle-path"
                            x="0.625"
                            y="15.6225"
                            width="3.75"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                          <rect
                            id="Rectangle-path"
                            x="8.125"
                            y="15.6225"
                            width="3.75"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                          <rect
                            id="Rectangle-path"
                            x="15.625"
                            y="15.6225"
                            width="3.75"
                            height="3.75"
                            rx="1.5"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </i>
          </span>
        </li>
      </ul>
      <h3 class="search-string modern-result-string">
        20 chambres d'hôtel disponibles
      </h3>
    </div>
    <div>
      <modern-search />
    </div>
    <div>
      <paginate />
    </div>

  </div>
</template>

<script>
import Paginate from '../Shared/Paginate';
import ModernSearch from "@/components/SearchResults/ModernSearch";
export default {
  name: "ResultItems",
  data() {
    return {
      showFilter: false,
    };
  },

  components: {
    ModernSearch,
    Paginate
  }
};
</script>

<style scoped>
</style>