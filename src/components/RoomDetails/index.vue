<template>
  <div id="details">
    <bread-crumb />
    <div class="container dp-room-content">
      <room-header />
      <div class="row">
        <div class="col-xs-12 col-md-9 col-lg-9">
          <room-galaries />
        </div>
        <div class="col-xs-12 col-md-3 col-lg-3">
          <widgets />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/Shared/BreadCrumb";
import RoomHeader from "@/components/RoomDetails/RoomHeader";
import RoomGalaries from "@/components/RoomDetails/RoomGalaries";
import Widgets from "@/components/RoomDetails/Widgets";
export default {
  name: "index",
  components: {
    Widgets,
    RoomGalaries,
    RoomHeader,
    BreadCrumb
  }
}
</script>

<style scoped>
</style>