<template>
  <div id="user-auth">
    <div class="modal fade" id="auth-modal" tabindex="-1" aria-labelledby="auth-modalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="auth-modalLabel">{{ modalTitle }}</h5>
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
            <login @showFormByAction="showFormByAction" v-show="login"/>
            <register @showFormByAction="showFormByAction" v-show="register"/>
            <password @showFormByAction="showFormByAction" v-show="password" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
import Password from "@/components/Auth/Password";
export default {
  components: {Password, Register, Login},
  emits: ['showFormByAction'],
  props: {
    modalTitle:{
      type: String
    },
    login:{
      type: Boolean,
      default: false
    },
    register:{
      type: Boolean,
      default: false
    },
    password:{
      type: Boolean,
      default: false
    }
  },
  name: "Index",
  methods: {
    showFormByAction (value){
      this.$emit('showFormByAction', value);
    }
  }
}
</script>

<style scoped>

</style>