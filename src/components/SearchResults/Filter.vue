<template>
  <div class="col-lg-3 col-md-3 sidebar-filter">
    <div class="sidebar-item sidebar-search-form hidden-xs hidden-sm">
      <div class="sidebar-search-wrapper sidebar-inner">
        <div class="search-form">
          <div class="search-title">
            Rechercher
          </div>
          <div class="row">
            <form class="form">
              <div class="col-md-12">
                <div class="form-group form-extra-field dropdown clearfix field-type has-icon">
                  <i class="fa input-icon field-icon">
                    <svg width="24px" height="24px" viewBox="0 0 17 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->

                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g id="Hotel-layout" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                        <g id="Search_Result_1_Grid" transform="translate(-165.000000, -328.000000)" stroke="#A0A9B2">
                          <g id="form_search_hotel_row" transform="translate(135.000000, 290.000000)">
                            <g id="input" transform="translate(30.000000, 0.000000)">
                              <g id="where" transform="translate(0.000000, 26.000000)">
                                <g id="Group" transform="translate(0.000000, 12.000000)">
                                  <g id="ico_maps_search_box">
                                    <path d="M15.75,8.25 C15.75,12.471 12.817,14.899 10.619,17.25 C9.303,18.658 8.25,23.25 8.25,23.25 C8.25,23.25 7.2,18.661 5.887,17.257 C3.687,14.907 0.75,12.475 0.75,8.25 C0.75,4.10786438 4.10786438,0.75 8.25,0.75 C12.3921356,0.75 15.75,4.10786438 15.75,8.25 Z" id="Shape"></path>
                                    <circle id="Oval" cx="8.25" cy="8.25" r="3"></circle>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </i>
                  <div class="dropdown" data-toggle="dropdown" id="dropdown-type" @click="showType = !showType">
                    <label>Type de chambre</label>
                    <div class="render">
                      <input type="text" id="type_chambre" name="type_chambre" placeholder="Type de chambre désiré ?" control-id="controlID-1">
                    </div>
                    <input type="hidden" name="type_chambre" control-id="controlID-2">
                  </div>
                  <ul class="dropdown-menu" id="dropdown_type" aria-labelledby="dropdown-type" tabindex="2" style="overflow: hidden; outline: none;" v-show="showType">
                    <li style="padding-left: 20px" data-type="NT" data-value="Suite" class="item parent-li">
                      <span class="parent">Nos types</span>
                    </li>
                    <li style="padding-left: 20px" data-type="NT" data-value="Suite" class="item parent-li">
                      <span class="parent">Chambre régulière</span>
                    </li>
                    <li style="padding-left: 20px" data-type="NT" data-value="Suite" class="item parent-li">
                      <span class="parent">Chambre familiale</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group form-date-field form-search-date clearfix has-icon" data-format="DD/MM/YYYY">
                  <i class="fa input-icon field-icon">
                    <svg height="24px" width="24px" viewBox="0 0 24 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g id="Hotel-layout" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                        <g id="Search_Result_1_Grid" transform="translate(-436.000000, -328.000000)" stroke="#A0A9B2">
                          <g id="form_search_hotel_row" transform="translate(135.000000, 290.000000)">
                            <g id="input" transform="translate(30.000000, 0.000000)">
                              <g id="check-in" transform="translate(270.000000, 26.000000)">
                                <g id="ico_calendar_search_box" transform="translate(1.000000, 12.000000)">
                                  <g id="calendar-add-1">
                                    <path d="M9.5,18.5 L1.5,18.5 C0.94771525,18.5 0.5,18.0522847 0.5,17.5 L0.5,3.5 C0.5,2.94771525 0.94771525,2.5 1.5,2.5 L19.5,2.5 C20.0522847,2.5 20.5,2.94771525 20.5,3.5 L20.5,10" id="Shape"></path>
                                    <path d="M5.5,0.501 L5.5,5.501" id="Shape"></path>
                                    <path d="M15.5,0.501 L15.5,5.501" id="Shape"></path>
                                    <path d="M0.5,7.501 L20.5,7.501" id="Shape"></path>
                                    <circle id="Oval" cx="17.5" cy="17.501" r="6"></circle>
                                    <path d="M17.5,14.501 L17.5,20.501" id="Shape"></path>
                                    <path d="M20.5,17.501 L14.5,17.501" id="Shape"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </i>
                  <div class="date-wrapper clearfix">
                    <div class="check-in-wrapper">
                      <label>Arrivée - Sortie</label>
                      <div class="render check-in-render">dd/mm/yyyy</div>
                      <span>-</span>
                      <div class="render check-out-render">dd/mm/yyyy</div>
                    </div>
                  </div>
                  <input type="hidden" name="start" class="check-in-input" />
                  <input type="hidden" name="end" class="check-out-input" />
                  <input type="text" name="date" class="check-in-out-input" control-id="controlID-4" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-button">
                  <div class="advance">
                    <div class="form-group form-extra-field dropdown clearfix field-avance">
                      <div class="dropdown" @click="showMore = !showMore">
                        <div class="render">
                                <span>Plus d'options
                                  <i class="fa fa-caret-down"></i>
                                </span>
                        </div>
                      </div>
                      <div class="dropdown-menu" v-show="showMore">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="advance-item range-slider">
                              <div class="item-title"><h4>Filtre du prix</h4></div>
                              <div class="item-content"></div>
                            </div>
                            <div class="advance-item facilities dp-check">
                              <div class="item-title"><h4>Aménagements hôteliers</h4></div>
                              <div class="item-content">
                                <div class="row">
                                  <div class="ovscroll" tabindex="1" style="overflow: hidden; outline: none">
                                    <div class="col-lg-12">
                                      <div class="dp-icheck-item">
                                        <label>
                                          Climatisation
                                          <input type="checkbox" name="condition" control-id="controlID-51">
                                          <span class="checkmark dp-check"></span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-primary btn-search" type="submit" control-id="controlID-6">Chercher</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filter"
}
</script>

<style scoped>

</style>