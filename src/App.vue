<template>
  <div id="app" >
    <Header @showFormByAction="showFormByAction" :on-home="{'home-header': $route.name === 'Home'}"/>
      <div class="dp-content-wrapper">
        <router-view/>
      </div>
    <Footer />
    <auth @showFormByAction="showFormByAction" :login="login" :register="register" :password="password" :modal-title="title"/>
  </div>
</template>
<script>
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import Auth from "./components/Auth"
 export default  {
   name: 'App',
    data() {
     return {
       styleData: '',
       login: false,
       register: false,
       password: false,
       title: ''
     }
    },
   components: {
     Header,
     Footer,
     Auth
   },
   methods: {
     showFormByAction(actionType) {
       switch (actionType) {
         case 'isLogin':
           this.password = false;
           this.register = false;
           this.login = true
           this.title = 'Connexion'
           break;
         case 'isRegister':
           this.password = false;
           this.register = true;
           this.login = false
           this.title = 'Inscription'
           break;
         case 'isPassword':
           this.password = true;
           this.register = false;
           this.login = false
           this.title = 'réinitialiser le mot de passe';
           break;
       }
     }
   }
 }
</script>
<style lang="scss">
</style>
