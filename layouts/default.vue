<template>
  <v-app>
    <m-header :drawer.sync="drawer" :menu-items="menuItems" :available-locales="availableLocales" />
    <v-navigation-drawer
      v-model="drawer"
      fixed
      color="#081a2a"
      :right="isRTL"
    >
      <div class="d-flex py-4 px-2 justify-space-around">
        <v-btn elevation="0" outlined dark>
          {{ $t("menu.blog", $route.params.locale) }}
        </v-btn>
        <v-btn
          v-for="locale in availableLocales"
          :key="locale.code"
          icon
          class="mx-4 text-decoration-none white--text"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </v-btn>
      </div>
      <v-divider dark />
      <v-list
        nav
      >
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="'menu-item-'+i"
        >
          <v-btn
            nuxt
            link
            :to="localePath(`/#${item}-section`)"
            elevation="0"
            plain
            dark
            rounded
          >
            {{ $t(`menu.${item}`, $route.params.locale) }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
    <m-footer />
  </v-app>
</template>

<script>
import MFooter from '~/components/mFooter.vue'
import mHeader from '~/components/mHeader.vue'
export default {
  components: { mHeader, MFooter },
  data () {
    return {
      offsetTop: 0,
      clipped: false,
      drawer: false,
      fixed: false,
      menuItems: [
        'specialty',
        'products',
        'industries',
        'inMedia',
        'clients'
      ]
    }
  },
  head () {
    const locale = this.$i18n.locale
    const obj = this.$i18n.locales.filter(function (el) {
      return el.code === locale
    })
    this.$vuetify.rtl = obj[0].dir === 'rtl'
    return {
      title: this.$t('pageTitles.home', this.$route.params.locale),
      htmlAttrs: {
        lang: obj[0].lang,
        dir: obj[0].dir
      },
      bodyAttrs: {
        class: 'overflow-x-hidden main-gr'
      }
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    isRTL () {
      const rtl = this.$i18n.locale === 'fa'
      return rtl
    }
  }
}
</script>
