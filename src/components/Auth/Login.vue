<template>
  <div id="login">
        <form class="form" autocomplete="off">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="E-mail">
            <i class="input-icon field-icon fa"><svg width="18px" viewBox="0 0 24 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Hotel-layout" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="Log-In" transform="translate(-912.000000, -220.000000)" stroke="#A0A9B2">
                  <g id="login" transform="translate(466.000000, 80.000000)">
                    <g id="input" transform="translate(30.000000, 119.000000)">
                      <g id="Group" transform="translate(416.000000, 22.000000)">
                        <g id="ico_email_login_form">
                          <rect id="Rectangle-path" x="0.5" y="0.0101176471" width="23" height="16.9411765" rx="2"></rect>
                          <polyline id="Shape" points="22.911 0.626352941 12 10.0689412 1.089 0.626352941"></polyline>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg></i>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Mot de passe">
          <i class="input-icon field-icon fa"><svg width="16px" viewBox="0 0 18 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch -->

            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Hotel-layout" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <g id="Log-In" transform="translate(-918.000000, -307.000000)" stroke="#A0A9B2">
                <g id="login" transform="translate(466.000000, 80.000000)">
                  <g id="input" transform="translate(30.000000, 209.000000)">
                    <g id="Group" transform="translate(422.000000, 18.000000)">
                      <g id="ico_pass_login_form">
                        <path d="M3.5,6 C3.5,2.96243388 5.96243388,0.5 9,0.5 C12.0375661,0.5 14.5,2.96243388 14.5,6 L14.5,9.5" id="Shape"></path>
                        <path d="M17.5,11.5 C17.5,10.3954305 16.6045695,9.5 15.5,9.5 L2.5,9.5 C1.3954305,9.5 0.5,10.3954305 0.5,11.5 L0.5,21.5 C0.5,22.6045695 1.3954305,23.5 2.5,23.5 L15.5,23.5 C16.6045695,23.5 17.5,22.6045695 17.5,21.5 L17.5,11.5 Z" id="Shape"></path>
                        <circle id="Oval" cx="9" cy="16.5" r="1.25"></circle>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          </i>
          </div>
          <div class="form-group">
            <input type="submit" class="form-submit" value="Connexion">
          </div>
        </form>
        <div class="">
          <div class="mt20 text-right">
            <a href="#" @click.prevent="showFormByAction('isPassword')" class="dp-link open-loss-password">
              Mot de passe oublié?
            </a>
          </div>
        </div>
        <div class="font-medium c-grey text-center mt20 f14">
          Vous n'avez pas de compte? <a href="#" @click.prevent="showFormByAction('isRegister')" class="dp-link">S'inscrire</a>
        </div>

      </div>
</template>

<script>
export default {
  name: "Login",
  emits: ['showFormByAction'],
  methods: {
    showFormByAction (value) {
      this.$emit('showFormByAction', value)
    }
  }
}
</script>

<style scoped>

</style>