<template>
  <v-container id="mag-section" tag="section" class="relative light light-bg py-10 py-md-16" fluid>
    <div
      class="t-container pt-4 pt-md-8"
    >
      <h3 class="text-h4 font-weight-bold high-em text-center mb-8">
        {{ $t("contentProducts.title", $route.params.locale) }}
      </h3>
      <h4 class="text-h5 font-weight-regular md-em text-center mb-12">
        {{ $t("contentProducts.suptitle", $route.params.locale) }}
      </h4>
      <v-row
        v-for="(item, index) in items"
        :id="item.title+'-row'"
        :key="'cp-'+index"
        v-intersect="onIntersect"
        justify="center"
        class="dark"
        :class="{ animated: isIntersecting }"
      >
        <v-col cols="12">
          <div class="d-flex align-center item">
            <h3 class="d-inline-block text-h5 darkBlue--text font-weight-bold hi-em me-4">
              {{ $t(`contentProducts.titles.${item.title}`, $route.params.locale) }}
            </h3>
            <v-divider class="d-inline-block w-90" />
          </div>
        </v-col>
        <v-col
          v-for="(subItem, j) in item.subItems"
          :key="'subitem-'+j"
          :cols="12"
          :sm="j == 0 ? '12' : '4'"
          md="3"
          class="item"
          :class="'delay-'+ index * 200"
        >
          <nuxt-link
            :to="`/mag/articles/${subItem.slug}`"
            class="text-decoration-none"
          >
            <v-card
              class="mx-auto pointer"
              max-width="400"
              rounded="lg"
            >
              <v-img
                height="200px"
                :src="`/img/content/mag/${subItem.img}`"
                class="rounded-lg elevation-2 pointer img-with-sliding-caption align-end cg"
              >
                <div class="dimmed">
                  <v-card-title class="hi-em text-body-2">
                    <span class="text-truncate">{{ subItem.title }}</span>
                  </v-card-title>
                  <v-card-subtitle class="md-em font-weight-light pb-4">
                    {{ subItem.faDate }}
                  </v-card-subtitle>
                </div>
              </v-img>
            </v-card>
          </nuxt-link>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      isIntersecting: false,
      currentlyIntersecting: [],
      items: [
        // {
        //   title: 'book',
        //   subItems: false
        // },
        // {
        //   title: 'podcast',
        //   subItems: false
        // },
        // {
        //   title: 'infography',
        //   subItems: false
        // },
        // {
        //   title: 'documentary',
        //   subItems: false
        // },
        {
          title: 'articles',
          subItems: []
        }
      ]
    }
  },
  async fetch () {
    this.items[0].subItems = await this.$content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()
  },
  methods: {
    onIntersect (entries, observer) {
      // console.log(entries[0].target)
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      if (entries[0].isIntersecting) {
        this.currentlyIntersecting.push(entries[0].target.id)
      } else {
        const index = this.currentlyIntersecting.indexOf(entries[0].target.id)
        this.currentlyIntersecting.splice(index, 1)
      }
    }
  }
}
</script>
<style>

</style>
