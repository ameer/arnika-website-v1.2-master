<template>
  <v-footer padless>
    <v-container fluid class="dark py-12" style="background:#0d384e;">
      <v-row style="max-width:425px;" class="mx-auto" align="center" justify="center">
        <v-col cols="6" class="">
          <v-img :src="logo" alt="logo" contain class="mx-auto" />
        </v-col>
      </v-row>
      <v-divider dark class="mt-10 mb-4" />
      <v-row style="max-width:860px;" class="mx-auto text-center" justify="center">
        <v-col cols="6" md="2">
          <v-btn class="hi-em" text dark>
            {{ $t("menu.products", $route.params.locale) }}
          </v-btn>
          <!-- <v-list dark color="transparent">
            <v-subheader>محصولات</v-subheader>
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item" />
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list> -->
        </v-col>
        <v-col cols="6" md="auto">
          <v-btn class="hi-em" text dark>
            {{ $t("menu.specialty", $route.params.locale) }}
          </v-btn>
        </v-col>
        <v-col cols="6" md="auto">
          <v-btn class="hi-em" text dark>
            {{ $t("menu.clients", $route.params.locale) }}
          </v-btn>
        </v-col>
        <v-col cols="6" md="auto">
          <v-btn class="hi-em" text dark>
            {{ $t("menu.industries", $route.params.locale) }}
          </v-btn>
        </v-col>
        <v-col cols="6" md="auto">
          <v-btn class="hi-em" text dark>
            {{ $t("menu.about", $route.params.locale) }}
          </v-btn>
        </v-col>
        <v-col cols="6" md="auto">
          <v-btn class="hi-em" text dark>
            {{ $t("menu.contactUs", $route.params.locale) }}
          </v-btn>
        </v-col>
        <!-- <v-col cols="6" md="auto">
          <v-btn class="hi-em" text dark>
            {{ $t("menu.jobs", $route.params.locale) }}
          </v-btn>
        </v-col> -->
      </v-row>
      <v-divider dark class="mt-4 mb-10" />
      <v-row class="mx-auto text-center" no-gutters>
        <v-col cols="12" md="6" offset-md="3">
          <p class="mb-4 hi-em">
            {{ $t("company.address", $route.params.locale) }}
          </p>
        </v-col>
        <v-col cols="12" md="6" offset-md="3">
          <div class="mb-4">
            <a class="text-decoration-none letter-spacing-low hi-em" href="tel:+982188772282">{{ $t("company.phone", $route.params.locale) }}</a>
            <span class="md-em">|</span>
            <a class="text-decoration-none letter-spacing-low hi-em" href="mailto:info@arnika.ai">info [at] arnika.ai</a>
          </div>
        </v-col>
      </v-row>
      <v-divider dark class="my-4" />
      <v-row class="mx-auto text-center" no-gutters>
        <v-col cols="12">
          <v-btn
            fab
            plain
            dark
            href="https://t.me/arnika_ai"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38"><path fill="none" d="M0 0h24v24H0z" /><path fill="#fff" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z" /></svg>
          </v-btn>
          <v-btn
            fab
            plain
            dark
            href="https://twitter.com/ArnikaAi"
            target="_blank"
          >
            <v-icon large>
              mdi-twitter
            </v-icon>
          </v-btn>
          <v-btn
            fab
            plain
            dark
            href="https://www.linkedin.com/company/arnika-ai"
            target="_blank"
          >
            <v-icon large>
              mdi-linkedin
            </v-icon>
          </v-btn>
          <v-btn
            fab
            plain
            dark
            href="https://www.instagram.com/arnika.ai/"
            target="_blank"
          >
            <v-icon large>
              mdi-instagram
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data () {
    return {
      items: this.$t('products.items', this.$i18n.locale)
    }
  },
  computed: {
    logo () {
      if (this.$i18n.locale === 'fa') {
        return '/img/svg/logo.svg'
      } else {
        return '/img/svg/logo-en.svg'
      }
    }
  }
}
</script>
<style>

</style>
