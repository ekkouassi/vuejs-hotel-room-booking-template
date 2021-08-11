<template>
  <footer class="clearfix" id="footer">
      <newsletter />
  <links-in-footer />
  </footer>
  <copy-right />
</template>

<script>
import Newsletter from './Newsletter'
import LinksInFooter from "./LinksInFooter";
import CopyRight from "@/components/Shared/CopyRight";

export default {
  components: {Newsletter, LinksInFooter, CopyRight },

}
</script>

<style>

</style>