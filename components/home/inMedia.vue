<template>
  <v-container id="inMedia-section" tag="section" class="dark relative py-8 py-md-16" fluid>
    <!-- <div class="absolute left-0 right-0 top--1">
      <svg fill="#f3f3f3" viewBox="0 0 1920 99" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="null" d="M 0 50 L 1 95 L 1 0 L 0 0 Z" stroke-width="0" /> <path fill="null" d="M 0 95 L 1920 0 L 1920 0 L 0 0 Z" stroke-width="0" />
      </svg>
    </div> -->
    <div class="t-container pb-12">
      <h4 class="text-3xl text-md-h4 font-weight-bold hi-em text-center mb-4 mt-6">
        {{ $t("inMedia.title", $route.params.locale) }}
      </h4>
      <h3 class="text-xl text-md-h5 font-weight-regular md-em text-center mb-8 mb-md-16">
        {{ $t("inMedia.suptitle", $route.params.locale) }}
      </h3>
      <v-row align="center" justify="center" class="mt-8 mt-md-16">
        <v-col
          v-for="(item, i) in articles"
          :key="i"
          cols="12"
          md="4"
        >
          <nuxt-link
            :to="`/in-media/${item.slug}`"
            class="text-decoration-none"
          >
            <v-card
              class="mx-auto pointer rounded-lg"
              max-width="400"
              color="transparent"
            >
              <v-img
                class="align-end cg rounded-lg"
                height="256px"
                :src="`/img/content/in-media/${item.img}`"
              >
                <div class="dimmed">
                  <v-card-title class="hi-em text-base text-md-body-1 font-weight-medium">
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
        <!-- <v-col cols="12" class="text-center mt-8">
          <v-btn
            max-width="256px"
            text
            dark
            plain
            class="hi-em"
          >
            <span class="text-h6">{{ $t("inMedia.link", $route.params.locale) }}...</span>
          </v-btn>
        </v-col> -->
      </v-row>
    </div>
    <!-- <div class="rotate-y-180 rotate-x-180 absolute left-0 right-0 bottom--1">
      <svg fill="#f3f3f3" viewBox="0 0 1920 99" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="null" d="M 0 50 L 1 95 L 1 0 L 0 0 Z" stroke-width="0" /> <path fill="null" d="M 0 95 L 1920 0 L 1920 0 L 0 0 Z" stroke-width="0" />
      </svg>
    </div> -->
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  async fetch () {
    const articles = await this.$content('inMedia')
      .sortBy('createdAt', 'asc')
      .fetch()

    this.articles = articles
  }
}
</script>
<style>

</style>
