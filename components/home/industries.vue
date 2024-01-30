<template>
  <v-container id="industries-section" tag="section" class="light relative light-bg py-16" fluid>
    <div class="t-container pb-8">
      <nuxt-link :to="localePath('/industries')" class="text-decoration-none">
        <h3 class="text-3xl text-md-h4 font-weight-bold hi-em text-center mb-4 mt-4">
          {{ $t("industries.title", $route.params.locale) }}
        </h3>
        <h4 class="text-xl text-md-h5 font-weight-regular md-em text-center mb-12">
          {{ $t("industries.suptitle", $route.params.locale) }}
        </h4>
      </nuxt-link>
      <v-row class="mt-6 text-center text-md-start" align="start">
        <v-col cols="12" md="8" lg="6">
          <h3 class="text-xl text-md-h5 hi-em">
            {{ $t("industries.columnTitle", $route.params.locale) }}
          </h3>
          <p class="md-em mt-4 mb-8 mb-md-12">
            {{ $t("industries.columnSubtitle", $route.params.locale) }}
          </p>
          <v-img src="/img/jpg/consult.jpg" contain class="rounded-lg d-block d-md-none mx-auto" max-width="512px" />
          <fieldset class="mt-12 mt-sm-8">
            <legend class="text-h5 mb-4">
              {{ $t("industries.question", $route.params.locale) }}
            </legend>
            <div class="ind-question">
              <a v-for="(item, i) in 8" :key="'ind-'+i" :href="`/industries/#${categories[i]}`" class="text-decoration-none">
                <span class="me-4 my-6">
                  <label class="hi-em">
                    {{ $t(`industries.options[${i}]`, $route.params.locale) }}
                  </label>
                </span>
              </a>
            </div>
          </fieldset>
        </v-col>
        <v-col cols="12" md="4" lg="6">
          <v-img src="/img/jpg/consult.jpg" contain class="rounded-lg d-none d-md-block" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      categories: [
        'holding',
        'mining',
        'bank',
        'capitalMarket',
        'governance',
        'fmcg',
        'publishers',
        'contracting'
      ]
    }
  }
}
</script>
<style>

</style>
