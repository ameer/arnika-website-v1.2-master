<template>
  <section id="hero-section" class="dark h-full relative">
    <v-parallax :src="img" class="hero-parallax" height="100%">
      <v-container v-intersect="onIntersect">
        <v-row
          align="center"
        >
          <v-col
            class=""
            cols="12"
            md="6"
          >
            <h2 class="text-h4 text-md-h3 text-start mb-4 font-weight-bold white-space-pre-line hi-em">
              {{ $t(title, $route.params.locale) }}
            </h2>
            <h3
              class="text-body-1 font-weight-light md-em"
            >
              {{ $t(about, $route.params.locale) }}
            </h3>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>
<script>

export default {
  props: {
    img: {
      type: String,
      default: '',
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    about: {
      type: String,
      default: '',
      required: true
    }

  },
  data () {
    return {
      isIntersecting: false
    }
  },
  methods: {
    onIntersect (entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      if (entries[0].isIntersecting === true) {
        history.replaceState({}, '', `#${entries[0].target.id}`)
      }
    }
  }
}
</script>
<style>
.hero-parallax .v-parallax__image {
    opacity: 40% !important;
    mix-blend-mode: screen !important;
}
.hero-parallax {
  min-height: 100vh !important;
}
.hero-parallax .v-parallax__content {
  height: 100vh !important;
}
</style>
