<template>
  <div class="widgets">
    <div class="fixed-on-mobile" style="width: auto">
      <div class="form-book-wrapper position-relative">

        <div class="form-head">
          <span class="price">35 000 F CFA</span>
          <span class="unit"> /nuit</span>
        </div>

        <nav>
          <ul class="nav nav-tabs nav-fill-dp" id="nav-tab">
            <li :class="{'active':book}">
              <a href="#" @click.prevent="onBook" class="nav-book-tab">Réserver</a>
            </li>
            <li :class="{'active': inquiry}">
              <a href="#" @click.prevent="onInquiry" class="nav-book-tab">Rechercher</a>
            </li>
          </ul>
        </nav>

        <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabcontent">
          <div id="nav-book" v-show="book">
            <div class="owner-info dp-sent-mail-customer">
              <div class="loader-wrapper">
                <div class="dp-loader"></div>
              </div>
              <div class="media dp-form-sent-mail">
                <div class="dp_send-mail-form">
                  <div class="form-wrapper">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-xs-12">
                        <div class="form-group">
                          <div class="dpf2021">
                            <div class="screen-header-response">
                              <p role="status"></p>
                              <ul></ul>
                            </div>
                            <form autocomplete="off">
                              <div class="form-group">
                                <span class="form-control-wrapper name_dp">
                                  <input type="text" placeholder="Name" class="dp-form-control dpf2021-text">
                                </span>
                              </div>
                              <div class="form-group">
                                <span class="form-control-wrapper name_dp">
                                  <input type="text" placeholder="Email" class="dp-form-control dpf2021-text">
                                </span>
                              </div>
                              <div class="form-group">
                                <span class="form-control-wrapper name_dp">
                                  <input type="text" placeholder="Téléphone" class="dp-form-control dpf2021-text">
                                </span>
                              </div>
                              <div class="form-group">
                                <span class="form-control-wrapper name_dp">
                                  <input type="text" placeholder="Note" class="dp-form-control dpf2021-text">
                                </span>
                              </div>
                              <p class="text-center">
                                <input type="submit" class="wpf2021-form-control
                               dpf2021-submit btn btn-primary font-small" value="ENVOYER">
                              </p>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="nav-inquirement" v-show="inquiry">
            <form autocomplete="off" class="form form-check-available">
              <div class="form-group clearfix form-date-field date-enquire form-date-search">
                <div class="date-wrapper clearfix">
                  <div class="check-in-wrapper">
                    <ul class="dp-grid-date">
                      <li>
                        <div class="dp-item-date">
                          <label>Arriver</label>
                          <div class="render check-in-render">JJ/MM/AAAA</div>
                        </div>
                      </li>
                      <li>
                        <div class="dp-item-date">
                          <label>Départ</label>
                          <div class="render check-in-render">JJ/MM/AAAA</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="form-group form-extra-field clearfix field-guest">
                <div class="dp-dropdown">
                  <label >Type de chambre</label>
                  <div class="render"></div>
                  <ul class="dropdown-menu">
                    <li class="item">
                      Chambre à jacousi
                    </li>
                  </ul>
                </div>
              </div>
              <div class="submit-group">
                <input type="submit" name="submit" value="Voir les disponibilités" class="btn btn-primary btn-lg">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Widgets",
  data() {
    return {
      book: true,
      inquiry: false
    }
  },
  methods: {
    onBook () {
      this.book = true;
      this.inquiry = false;
    },

    onInquiry () {
      this.inquiry = true;
      this.book = false;
    }
  }
}
</script>

<style scoped>

</style>