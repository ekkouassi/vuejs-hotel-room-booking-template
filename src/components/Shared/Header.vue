<template>
  <header id="header" :class="onHome">
    <div id="top-bar">
      <div class="top-bar-left">
        <ul class="st-list socials">
          <li>
            <a class="social-link" href="#"><i class="fab fa-facebook-f"></i> </a>
            <a class="social-link" href="#"><i class="fab fa-instagram"></i> </a>
            <a class="social-link" href="#"><i class="fab fa-twitter"></i> </a>
          </li>
        </ul>
        <ul class="st-list top-bar-items">
          <li class="hidden-xs hidden-sm">
            <a href="mailto:contact@shinetheme.com">contact@shinetheme.com</a>
          </li>
        </ul>
      </div>
      <div class="top-bar-right">
        <ul class="st-list top-bar-items">
          <li class="top-bar-item link-item">
            <a href="#" class="login">(225) 00 00 00 00 00</a>
          </li>
          <li class="top-bar-item login-item">
            <a href="#"
               class="login"
               data-toggle="modal" data-target="#auth-modal"
               @click="showFormByAction('isLogin')"
            >Se connecter</a>
          </li>
          <li class="top-bar-item logup-item">
            <a href="#" class="logup"
               data-toggle="modal" data-target="#auth-modal"
               @click="showFormByAction('isRegister')"
            >S'inscrire</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav">
      <a href="#" class="toggle-menu" @click.prevent="showNavMobile = true">
        <i class="input-icon field-icon fa"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->

          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Ico_off_menu" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
            <g id="Group" stroke="#fff" stroke-width="1.5">
              <g id="navigation-menu-4">
                <rect id="Rectangle-path" x="0.75" y="0.753" width="22.5" height="22.5" rx="1.5"></rect>
                <path d="M6.75,7.503 L17.25,7.503" id="Shape"></path>
                <path d="M6.75,12.003 L17.25,12.003" id="Shape"></path>
                <path d="M6.75,16.503 L17.25,16.503" id="Shape"></path>
              </g>
            </g>
          </g>
        </svg></i>
      </a>
      <div class="nav-left">
        <a href="/" class="logo hidden-xs hidden-sm">
          <img src="../../assets/logo.png" alt="LOGO DIVINE PALACE">
        </a>
        <a href="/" class="logo hidden-lg hidden-md hidden-xl hidden-xxl">
          <img src="../../assets/logo-mobile.png" alt="LOGO DIVINE PALACE">
        </a>
        <div class="dp-main-menu" :class="{'open': showNavMobile}">
          <a href="#" class="back-menu" @click.prevent="showNavMobile = false">
            <i class="fa fa-chevron-left"></i>
          </a>
          <ul id="main-menu" class="menu main-menu">
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="#">A propos</a>
            </li>
            <li>
              <a href="#">Actualités</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props:['onHome'],
  name: "Header",
  emits: ['showFormByAction'],
  data () {
   return {
     showNavMobile: false
   }
  },
  created() {
  },

  methods: {
    showFormByAction (value) {
      this.$emit('showFormByAction', value)
    }
  }
}
</script>

<style scoped>

</style>