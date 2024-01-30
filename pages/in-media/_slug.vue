<template>
  <v-container id="blog-section" tag="section" class="light relative light-bg py-32" fluid>
    <v-row no-gutters class="mb-16 in-viewport" :class="{animated: isIntersecting}">
      <v-col v-intersect="onIntersect" cols="12" sm="9" md="6" offset-md="3">
        <v-btn class="align-center mb-4" plain nuxt to="/#in-media-section">
          <i class="ri-arrow-right-line me-2" />
          <div>بازگشت به صفحه اصلی</div>
        </v-btn>
        <v-card class="py-8 px-16" color="mWhite" elevation="0">
          <div class="mb-4">
            <h2 class="primary--text mb-2">
              {{ article.title }}
            </h2>
            <span class="text-sm secondary--text">زمان مطالعه: {{ article.readTime }}</span>
          </div>
          <nuxt-content :document="article" />
          <a v-show="article.source" target="_blank" :href="article.source">لینک خبر</a>
        </v-card>
        <v-divider class="mb-6" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="9">
        <h4 class="text-center mb-6 secondary--text text-lg">
          بیشتر بخوانید
        </h4>
        <v-divider class="my-4" />
        <v-row align="center" justify="center">
          <v-col
            v-for="(item, i) in articles"
            :key="i"
            cols="12"
            sm="6"
            md="4"
            xl="3"
            class="z-2 px-6 item"
            :class="'delay-'+i*100"
          >
            <nuxt-link
              :to="`/in-media/${item.slug}`"
            >
              <v-img
                height="320px"
                width="320px"
                :src="`/img/content/in-media/${item.img}`"
                class="rounded-l elevation-2 pointer img-with-sliding-caption cg"
              >
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    />
                  </v-row>
                </template>
                <div v-if="item.description !== ''" class="slide-up-caption text-center">
                  <p class="text-h6 mb-1">
                    {{ item.title }}
                  </p>
                </div>
              </v-img>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'blog',
  async asyncData ({ $content, params }) {
    const article = await $content('inMedia', params.slug).fetch()
    const articles = await $content('inMedia')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { article, articles }
  },
  data () {
    return {
      isIntersecting: false
    }
  },
  head () {
    return {
      title: this.article.title ? this.article.title : 'بلاگ آرنیکا',
      meta: [
        { description: this.article.description ? this.article.description : '' }
      ]
    }
  },
  methods: {
    onIntersect (entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = true
    }
  }
}
</script>
<style>
</style>
