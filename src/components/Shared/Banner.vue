<template>
 <div id="banner">
   <div class="banner dp-banner">
      <div class="container">
        <h1>Recherche D'une Chambre d'Hôtel</h1>
      </div>
   </div>
   <div class="container">
     <form-search-mobile />
   </div>
 </div>
</template>

<script>
import FormSearchMobile from "@/components/Shared/FormSearchMobile";
export default {
  name: "Banner",
  components: {FormSearchMobile}
}
</script>

<style scoped>

</style>