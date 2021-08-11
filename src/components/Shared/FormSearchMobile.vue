<template>
  <form id="form-mobile" class="hidden-lg" autocomplete="off">
    <div class="search-form-mobile">
        <vue-select
            :options="options"
            v-model="typeChambre"
            label-by="name"
            searchable
            clear-on-select
            class="form-control-room__type"
            placeholder="Type de chambre désiré"
        />
    <div class="d-flex">
         <DatePicker v-model="chechInDate"
                     :locale="locale"
                     :lowerLimit="from"
                     :upperLimit="to"
                     inputFormat="dd-MM-yyyy"
                     placeholder="Date d'arrivée"
                     class="form-control-room__check-date mr-1"
         />


        <DatePicker v-model="checkoutDate"
                    :locale="locale"
                    :lowerLimit="from"
                    :upperLimit="to"
                    inputFormat="dd-MM-yyyy"
                    placeholder="Date de sortie"
                    class="form-control-room__check-date ml-1"
        />
    </div>
      <button class="btn btn-block btn-primary" style="margin-top: 10px">
        <i class="fa fa-check-circle"></i> Voir les disponibilités
      </button>
    </div>
  </form>
</template>

<script>
import DatePicker from 'vue3-datepicker'
import {fr} from 'date-fns/locale'
export default {
  name: "FormSearchMobile",
  data () {
    return {
      options:  [
        { name: 'Rails', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
      ],
      typeChambre: '',
      chechInDate: '',
      checkoutDate: '',
      locale: fr,
      from: new Date(),
      to: new Date() + 30
    }
  },

  components: {
    DatePicker
  }
}
</script>

<style scoped>

</style>