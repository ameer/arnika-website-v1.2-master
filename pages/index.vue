<template>
  <div>
    <hero />
    <specialty />
    <products />
    <industries />
    <in-media />
    <mag />
    <clients />
    <Map />
  </div>
</template>

<script>
import Clients from '~/components/home/clients.vue'
import Mag from '~/components/home/mag.vue'
import Hero from '~/components/home/hero.vue'
import Industries from '~/components/home/industries.vue'
import InMedia from '~/components/home/inMedia.vue'
import Map from '~/components/home/map.vue'
import Products from '~/components/home/products.vue'
import Specialty from '~/components/home/specialty.vue'

export default {
  components: {
    Hero,
    Specialty,
    Products,
    Industries,
    Clients,
    Mag,
    InMedia,
    Map
  },
  layout: 'default'
}
</script>
