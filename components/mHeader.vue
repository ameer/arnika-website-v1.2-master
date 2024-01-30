<template>
  <v-app-bar
    fixed
    prominent
    short
    elevation="0"
    :color="backgroundColor"
    shrink-on-scroll
    scroll-threshold="112"
    dark
  >
    <template #img="{ props }">
      <v-img v-bind="props" gradient="to left, transparent, transparent" />
    </template>
    <div class="container h-100 d-flex py-1 align-center">
      <v-app-bar-nav-icon class="d-md-none" @click="toggleDrawer" />
      <v-spacer class="d-none d-md-block" />
      <v-img
        :src="logo"
        alt="logo"
        max-width="128px"
        width="100%"
        class="pointer navbar-logo"
        contain
        @click="goToTop"
      />
      <div class="main-menu w-100 d-none d-md-flex align-center mx-4">
        <v-btn
          v-for="(item, i) in menuItems"
          :key="'menu-item-' + i"
          nuxt
          link
          elevation="0"
          plain
          dark
          rounded
          :to="localePath(`/#${item}-section`)"
          class="mx-3 menu-text"
        >
          {{ $t(`menu.${item}`, $route.params.locale) }}
        </v-btn>
        <v-spacer />
        <v-btn
          elevation="0"
          outlined
          dark
          color="grey lighten-2"
          target="_blank"
          href="https://mag.arnika.ai/"
        >
          {{ $t("menu.blog", $route.params.locale) }}
        </v-btn>
        <v-btn
          v-for="locale in availableLocales"
          :key="locale.code"
          color="grey lighten-2"
          icon
          class="mx-4 text-decoration-none white--text"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  props: {
    drawer: { type: Boolean, default: false },
    menuItems: { type: Array, default: null },
    availableLocales: { type: Array, default: null },
    bgColor: { type: String, default: null }
  },
  data () {
    return {
      offsetTop: 0
    }
  },
  computed: {
    backgroundColor () {
      if (this.bgColor !== null) {
        return this.bgColor
      } else {
        return this.offsetTop >= 112 ? '#081a2a' : 'transparent'
      }
    },
    logo () {
      if (this.$i18n.locale === 'fa') {
        return '/img/svg/logo.svg'
      } else {
        return '/img/svg/logo-en.svg'
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    goToTop () {
      if (window.location.pathname === '/') {
        document.body.scrollTop = 0 // For Safari
        document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
      } else {
        window.location.replace(this.localePath('/'))
      }
    },
    onScroll () {
      this.offsetTop = window.scrollY
    },
    toggleDrawer () {
      this.$emit('update:drawer', !this.drawer)
    }
  }
}
</script>
<style>
.navbar-logo {
  opacity: 1;
  visibility: visible;
}
@media screen and (max-width: 600px) {
  .navbar-logo {
    opacity: 0;
    visibility: hidden;
    transition: all .4s ease-in-out;
     max-width: 85px !important;
  }
  .v-app-bar--is-scrolled .navbar-logo {opacity: 1;visibility: visible; max-width: 85px !important;}
}

</style>
