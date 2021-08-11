<template>
  <div id="map-modal">
    <div class="modal fade" id="dpMap-modal" tabindex="-1" aria-labelledby="dpMap-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="dpMap-modalLabel">Divine Palace - Localisation</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
              <i class="input-icon field-icon fa">
                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Ico_close" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                  <g id="Group" stroke="#1A2B48" stroke-width="1.5">
                    <g id="close">
                      <path d="M0.75,23.249 L23.25,0.749" id="Shape"></path>
                      <path d="M23.25,23.249 L0.75,0.749" id="Shape"></path>
                    </g>
                  </g>
                </g>
              </svg></i>
              </span>
            </button>
          </div>
          <div class="modal-body">
            <div class="dp-map mt20">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15889.142243912222!2d-3.9546877!3d5.373353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb5e3d230cc0ebe10!2sDivine%20Palace!5e0!3m2!1sfr!2sci!4v1619624617352!5m2!1sfr!2sci"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapModal"
}
</script>

<style scoped>

</style>