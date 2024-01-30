<template>
  <v-container id="blog-section" tag="section" class="dark relative light-bg py-32" fluid>
    <v-row no-gutters class="mb-16 in-viewport" :class="{animated: isIntersecting}">
      <v-col v-intersect="onIntersect" cols="12" sm="9" md="6" offset-md="3">
        <v-btn class="align-center mb-4" plain nuxt to="/#mag-section">
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
              :to="`/mag/articles/${item.slug}`"
              class="text-decoration-none"
            >
              <v-card
                class="mx-auto pointer"
                max-width="400"
                rounded="md"
              >
                <v-img
                  height="200px"
                  :src="`/img/content/mag/${item.img}`"
                  class="rounded-l elevation-2 pointer img-with-sliding-caption align-end cg"
                >
                  <div class="dimmed">
                    <v-card-title class="hi-em text-body-2">
                      {{ item.title }}
                    </v-card-title>
                    <v-card-subtitle class="md-em font-weight-light pb-4">
                      {{ item.faDate }}
                    </v-card-subtitle>
                  </div>
                </v-img>
              </v-card>
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
    const article = await $content('articles', params.slug).fetch()
    const articles = await $content('articles')
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
