<template>
  <v-container id="clients-section" tag="section" class="dark relative py-8 py-md-16 mb-16" fluid>
    <!-- <div class="absolute left-0 right-0 top--1">
      <svg fill="#f3f3f3" viewBox="0 0 1920 99" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="null" d="M 0 50 L 1 95 L 1 0 L 0 0 Z" stroke-width="0" /> <path fill="null" d="M 0 95 L 1920 0 L 1920 0 L 0 0 Z" stroke-width="0" />
      </svg>
    </div> -->
    <div class="t-container">
      <div class="not-visible" style="height:64px" />
      <h4 class="text-h4 font-weight-bold hi-em text-center mb-4">
        {{ $t("clients.suptitle", $route.params.locale) }}
      </h4>
      <h3 class="text-h5 font-weight-regular md-em text-center mb-8">
        {{ $t("clients.title", $route.params.locale) }}
      </h3>
      <div class="not-visible" style="height:64px" />
      <v-row class="clients-logos flex-wrap mb-md-4" no-gutters align="center" justify="center">
        <v-col
          v-for="(item, index) in items.slice(0,8)"
          :key="'client-'+index"
          :cols="item.cols"
          :sm="item.sm"
          class="pa-4 mb-16"
        >
          <v-img :src="item.img" contain class="grayscale pointer ma-0 mx-auto" height="128px" max-width="160px" />
          <!-- <v-card
            elevation="8"
            color="#ffffff"
            rounded="xl"
            class="pointer d-flex pa-4 client-logo mx-auto"
            max-width="164px"
            height="164px"
          >

          </v-card> -->
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { title: 'client', img: '/img/svg/clients/noavaran.svg', sm: '3', cols: '6', class: '' },
        { title: 'client', img: '/img/svg/clients/aegh.svg', sm: '3', cols: '6', class: '' },
        { title: 'client', img: '/img/svg/clients/miras.svg', sm: '3', cols: '6', class: '' },
        { title: 'client', img: '/img/svg/clients/sahm-ashna.svg', sm: '3', cols: '6', class: '' },
        { title: 'client', img: '/img/svg/clients/sahm-ashna-yekom.svg', sm: '3', cols: '6', class: '' },
        { title: 'client', img: '/img/svg/clients/otagh.svg', sm: '3', cols: '6', class: '' },
        { title: 'client', img: '/img/svg/clients/opal.svg', sm: '3', cols: '6', class: '' },
        { title: 'client', img: '/img/svg/clients/golgohar.svg', sm: '3', cols: '6', class: '' }
      ]
    }
  }
}
</script>
<style>

</style>
