<template>
  <div id="search-results">
    <banner />
    <search-result />
  </div>
</template>

<script>
import Banner from "../Shared/Banner";
import SearchResult from "@/components/SearchResults";
export default {
name: "index",
  components: {SearchResult, Banner}
}
</script>

<style>
</style>