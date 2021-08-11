<template>
  <div class="dp-galery">
    <div class="fotorama"
         data-allowfullscreen="true"
         data-width="100%"
         data-nav="thumbs"
         data-fit="cover"
         data-maxwidth="100%"
         data-ratio="16/9">
      <img v-for="(data, i) in loadedImages" :key="i" :src="data.image"  alt="CHAMBRE D'HOTEL - DIVINE PALACE"/>
    </div>
    <div class="shares dropdown">
      <a href="#" class="share-item social-share">
        <i class="input-icon field-icon fa">
          <svg width="20px" height="20px" viewBox="0 0 18 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->

            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Hotel-layout" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <g id="Room_Only_Detail_1" transform="translate(-921.000000, -251.000000)" stroke="#FFFFFF">
                <g id="room-detail" transform="translate(0.000000, 211.000000)">
                  <g id="img">
                    <g id="share" transform="translate(910.000000, 30.000000)">
                      <g id="ico_share" transform="translate(10.000000, 10.000000)">
                        <g id="Group" transform="translate(1.666667, 0.000000)">
                          <g id="share-2" stroke-width="1.5">
                            <path d="M16.4583333,4.375 L9.58333333,4.375 C8.20262146,4.375 7.08333333,5.49428813 7.08333333,6.875 L7.08333333,10" id="Shape"></path>
                            <polyline id="Shape" points="12.7083333 8.125 16.4583333 4.375 12.7083333 0.625"></polyline>
                            <path d="M13.9583333,11.875 L13.9583333,18.125 C13.9583333,18.8153559 13.3986893,19.375 12.7083333,19.375 L1.45833333,19.375 C0.767977396,19.375 0.208333333,18.8153559 0.208333333,18.125 L0.208333333,8.125 C0.208333333,7.43464406 0.767977396,6.875 1.45833333,6.875 L3.33333333,6.875" id="Shape"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </i>
      </a>
      <a href="#" class="share-item social-share">
        <i class="fa fa-heart"></i>
      </a>
    </div>
  </div>
</template>

<script>
import {loadImages} from '@/services/loadImages';
export default {
name: "RoomGalaries",
  created() {
    this.loadFotorama();
    (function ($) {
      'use strict';
      let body = $('body');
      window.on('resize', function () {
        if (window.matchMedia('(min-width: 992)').matches) {
          // TODO
          $('.dp-galery', body).each(function () {
            let parent = $(this);
            let fotoramaDiv = $('.fotorama', parent).fotorama ({
              width: parent.data('width'),
              nav: parent.data('nav'),
              thumbwidth: '135',
              thumbheight: '135',
              allowfullscreen: parent.data('allowfullscreen')
            });
            parent.data('fotorama', fotoramaDiv.data('fotorama'));
          });
        }
        else {
          // TODO
          $('.dp-galery', body).each(function () {
            var parent = $(this);
            if (typeof parent.data('fotorama') !== 'undefined') {
              parent.data('fotorama').destroy();
            }
            var $fotoramaDiv = $('.fotorama', parent).fotorama({
              width: parent.data('width'),
              nav: parent.data('nav'),
              thumbwidth: '80',
              thumbheight: '80',
              allowfullscreen: parent.data('allowfullscreen')
            });
            parent.data('fotorama', $fotoramaDiv.data('fotorama'));
          });
        }
      })
    })
  },

  methods: {
    loadFotorama () {
      let script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js';
      document.documentElement.firstChild.appendChild(script);
    }
  },

  computed: {
    loadedImages () {
      return loadImages
    }
  },
  watch: {
    loadedImages (val) {
      if (val) {
        this.loadFotorama();
      }
    }
  }
}
</script>

<style scoped>

</style>