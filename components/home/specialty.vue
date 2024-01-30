<template>
  <v-container id="specialty-section" tag="section" class="light relative light-bg py-16" fluid>
    <!-- <div class="absolute left-0 right-0 top--1">
      <svg fill="none" viewBox="0 0 1920 99" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgb(19, 86, 115);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(8, 26, 42);stop-opacity:1" />
          </linearGradient>
        </defs>
        <path fill="url(#grad1)" d="M 0 50 L 1 95 L 1 0 L 0 0 Z" stroke-width="0" /> <path fill="url(#grad1)" d="M 0 95 L 1920 0 L 1920 0 L 0 0 Z" stroke-width="0" />
      </svg>
    </div> -->
    <div class="t-container py-md-16">
      <nuxt-link :to="localePath('/experties')" class="text-decoration-none">
        <h3 class="text-3xl text-md-h4 font-weight-bold hi-em text-center mb-8">
          {{ $t("specialty.title", $route.params.locale) }}
        </h3>
        <h4 class="text-xl text-md-h5 font-weight-regular md-em text-center mb-12">
          {{ $t("specialty.subtitle", $route.params.locale) }}
        </h4>
      </nuxt-link>
      <div
        v-intersect="onIntersect"
        class="container relative flex flex-column in-viewport"
        :class="{ animated: isIntersecting }"
      >
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="'spec-'+i"
            cols="6"
            md="4"
          >
            <a :href="localePath(`/experties/?#${item.name}`)" class="text-decoration-none">
              <mcs
                :svg="`/img/svg/specialty/${item.name}.svg`"
                :en-text="item.enText"
                :fa-text="item.faText"
                :class="item.class"
                :img-class="'pointer pulse-on-hover'"
              />
            </a>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>
<script>
import mcs from '../multiCaptionSvg.vue'
export default {
  components: { mcs },
  data: () => ({
    isIntersecting: false,
    items: [
      {
        name: 'cs',
        enText: 'Cyber Security',
        faText: 'امنیت سایبری',
        class: 'item delay-300'
      },
      {
        name: 'bi',
        enText: 'Business Intelligence',
        faText: 'هوش تجاری',
        class: 'item delay-300'
      },
      {
        name: 'ml',
        enText: 'Machine Learning',
        faText: 'یادگیری ماشین',
        class: 'item delay-300'
      },
      {
        name: 'ds',
        enText: 'Data Science',
        faText: 'علم داده',
        class: 'item delay-500'
      },
      {
        name: 'nlp',
        enText: 'Natural language processing',
        faText: 'پردازش زبان‌های طبیعی',
        class: 'item delay-500'
      },
      {
        name: 'bd',
        enText: 'Big Data',
        faText: 'کلان داده',
        class: 'item delay-500'
      },
      {
        name: 'bourse',
        enText: 'Iran Stock Exchange',
        faText: 'بورس ایران',
        class: 'item delay-700'
      },
      {
        name: 'crypto',
        enText: 'Cryptocurrency',
        faText: 'رمز ارزها',
        class: 'item delay-700'
      },
      {
        name: 'forex',
        enText: 'Forex',
        faText: 'فارکس',
        class: 'item delay-700'
      }
    ]
  }),

  methods: {
    onIntersect (entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting
    }
  }
}
</script>
<style>

</style>
