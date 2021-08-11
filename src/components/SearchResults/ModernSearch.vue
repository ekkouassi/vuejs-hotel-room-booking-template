<template>
  <div id="modern-search-result" class="modern-search-result">
    <div class="row row-wrapper">
      <result-item v-for="i in 12" :key="i"/>
    </div>
  </div>
</template>

<script>
import ResultItem from "@/components/SearchResults/ResultItem";
export default {
  name: "ModernSearch",
  components: {
    ResultItem
  }
}
</script>

<style scoped>

</style>