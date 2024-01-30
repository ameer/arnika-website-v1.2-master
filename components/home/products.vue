<template>
  <v-container id="products-section" tag="section" class="relative" fluid>
    <!-- <div class="absolute left-0 right-0 top--1 rotate-y-180">
      <svg fill="#f3f3f3" viewBox="0 0 1920 99" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="null" d="M 0 50 L 1 95 L 1 0 L 0 0 Z" stroke-width="0" /> <path fill="null" d="M 0 95 L 1920 0 L 1920 0 L 0 0 Z" stroke-width="0" />
      </svg>
    </div> -->
    <div class="not-visible d-none d-md-block" style="height: 48px" />
    <div class="dark">
      <nuxt-link :to="localePath('/products')" class="text-decoration-none">
        <h4
          class="
          text-3xl text-md-h4
          font-weight-bold
          hi-em
          text-center
          mb-4
          mt-6 mt-md-12
        "
        >
          {{ $t("products.suptitle", $route.params.locale) }}
        </h4>
        <h3
          class="text-xl text-md-h5 font-weight-regular md-em text-center mb-8 mb-md-16"
        >
          {{ $t("products.title", $route.params.locale) }}
        </h3>
      </nuxt-link>
    </div>
    <div
      v-intersect="onIntersect"
      class="in-viewport mb-8 mb-md-16 pb-8 light"
      :class="{ animated: isIntersecting }"
    >
      <v-container>
        <v-row align="stretch" justify="center">
          <v-col
            v-for="(item, index) in items"
            :key="index"
            cols="12"
            sm="auto"
            class="text-center mb-md-8 flex-grow-1"
          >
            <div class="h-100 overflow-hidden rounded-lg">
              <div class="d-flex flex-wrap align-center justify-space-around milky-bg pa-3">
                <div
                  v-for="(subItem, j) in item.subItems"
                  :key="subItem + j"
                  class="pa-3 pa-md-8"
                >
                  <a :href="localePath(`/products/?#${subItem}`)">
                    <v-img
                      :src="`/img/svg/products/${subItem}.svg`"
                      alt=""
                      contain
                      width="100px"
                      max-height="100px"
                    />
                  </a>
                </div>
              </div>
              <h1 class="text-h5 py-3 md-em font-weight-medium milky-bg darken">
                {{ $t(`products.categories.${item.title}`, $route.params.locale) }}
              </h1>
            </div>
            <!-- <p>{{ $t(`products.linkText`, $route.params.locale) }}</p> -->
          </v-col>
        </v-row>
      </v-container>
      <!-- <ul id="hexGrid">
        <li v-for="(item, index) in items" :key="index" class="hex">
          <div class="hexIn">
            <a href="#" class="hexLink">
              <img :src="`/img/svg/products/${item}.svg`" alt="">
              <h1>{{ $t(`products.items[${index}]`, $route.params.locale) }}</h1>
              <p>{{ $t(`products.linkText`, $route.params.locale) }}</p>
            </a>
          </div>
        </li>
      </ul> -->
    </div>
    <!-- <div class="svg-container absolute left-0 right-0 bottom--1">
      <svg fill="#f3f3f3" viewBox="0 0 1920 99" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="null" d="M 0 50 L 1 95 L 1 0 L 0 0 Z" stroke-width="0" /> <path fill="null" d="M 0 95 L 1920 0 L 1920 0 L 0 0 Z" stroke-width="0" />
      </svg>
    </div> -->
  </v-container>
</template>
<script>
export default {
  data: () => ({
    isIntersecting: false,
    items: [
      { title: 'accounting', subItems: ['homa', 'pando'] },
      { title: 'financing', subItems: ['rahsar', 'davvam'] },
      { title: 'dataOwenership', subItems: ['octopus', 'ibmo'] },
      {
        title: 'holding',
        subItems: ['maskook', 'homa']
      },
      {
        title: 'brand',
        subItems: ['miniator', 'graphiumFMCG', 'zaal']
      },
      { title: 'exchange', subItems: ['sanjaqakSilver', 'graphiumStock', 'pluto', 'spout', 'sasquatch', 'sanjaqakGold'] }

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
