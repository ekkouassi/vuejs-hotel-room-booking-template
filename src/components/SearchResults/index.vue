<template>
  <div id="search">
    <div class="container">
      <div id="search-result" class="dp-hotel-result">
        <div class="row">
          <Filter />
          <ResultItems />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filter from "@/components/SearchResults/Filter";
import ResultItems from "@/components/SearchResults/ResultItems";
export default {
  name: "index",
  components: { ResultItems, Filter },
};
</script>

<style scoped>
</style>