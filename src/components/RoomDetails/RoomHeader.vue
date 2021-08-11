<template>
  <div class="dp-room-header">
    <div class="lef">
      <div class="dp-star">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
      <h2 class="dp-heading">
        Grande chambre climatisée
      </h2>
      <div class="sub-heading">
        <i class="input-icon field-icon fa">
          <svg width="16px" height="16px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->

            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Ico_maps" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <g id="Group" transform="translate(4.000000, 0.000000)" stroke="#A0A9B2">
                <g id="pin-1" transform="translate(-0.000000, 0.000000)">
                  <path d="M15.75,8.25 C15.75,12.471 12.817,14.899 10.619,17.25 C9.303,18.658 8.25,23.25 8.25,23.25 C8.25,23.25 7.2,18.661 5.887,17.257 C3.687,14.907 0.75,12.475 0.75,8.25 C0.75,4.10786438 4.10786438,0.75 8.25,0.75 C12.3921356,0.75 15.75,4.10786438 15.75,8.25 Z" id="Shape"></path>
                  <circle id="Oval" cx="8.25" cy="8.25" r="3"></circle>
                </g>
              </g>
            </g>
          </svg>
        </i>
        Cocody, Palameraie, CI
        <a href="#"
           class="dp-link font-medium"
           data-toggle="modal"
           data-target="#dpMap-modal"
        >Voir sur le map</a>
      </div>
    </div>
    <div class="right">
      <div class="review-score">
        <div class="head clearfix">
          <div class="left">
            <span class="head-rating">Très bon</span>
            <span class="text-rating">sur 3 critiques</span>
          </div>
          <div class="score">
            3,5<span>/5</span>
          </div>
        </div>
        <div class="foot">
          100% des clients recommandent cette chambre.
        </div>
      </div>
    </div>
    <map-modal />
  </div>
</template>

<script>
import MapModal from "@/components/RoomDetails/MapModal";
export default {
name: "RoomHeader",
  components: {MapModal},
  methods: {
    openMapModal () {
      console.log("MAP INFOS")
    }
  }
}
</script>

<style scoped>

</style>