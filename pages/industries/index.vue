<template>
  <div>
    <desc-dialog
      :open="descDialogOpen"
      :title="selected.title"
      :description="selected.description"
      :image="selected.image"
      @closeDialog="descDialogOpen = false"
    />
    <hero :img="'/img/jpg/industries-hero.jpg'" :title="'industries.title'" :about="'industries.about'" />
    <div class="relative">
      <v-container v-for="(item, i) in items" :id="item.name" :key="'product-row'+i" fluid class="light products-bg py-8 py-md-16 px-4 px-md-16">
        <h3 class="text-h5 text-md-h4 py-3 px-4 px-md-16 md-em font-weight-regular golden-circle">
          {{ $t(`industries.categories.${item.name}`, $route.params.locale) }}
        </h3>
        <v-container>
          <v-row class="py-8">
            <v-col v-for="(subItem, j) in item.subItems" :key="'subItem-'+j" cols="12" sm="6" class="px-4 px-md-16 my-4 my-md-8">
              <single-card
                :img="subItem"
                :title="
                  $t(`products.itemsObj.${subItem}.name`, $route.params.locale)
                "
                :description="
                  $t(`products.itemsObj.${subItem}.desc`, $route.params.locale)
                "
                @openDescDialog="openDescDialog"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-container>
      <div id="spotlight" />
    </div>
  </div>
</template>
<script>
import DescDialog from '~/components/descDialog.vue'
import hero from '~/components/indiviualHero.vue'
import SingleCard from '~/components/singleCard.vue'
export default {
  components: { hero, SingleCard, DescDialog },
  data () {
    return {
      target: '',
      descDialogOpen: false,
      selected: {
        title: '',
        description: '',
        image: ''
      },
      defaultDesc: 'به زودی...',
      items: [
        {
          name: 'holding',
          subItems: [
            'rahsar',
            'davvam',
            'graphiumStock',
            'pluto',
            'miniator',
            'sasquatch',
            'zaal',
            'homa',
            'ibmo',
            'octopus'
          ]
        },
        {
          name: 'mining',
          subItems: [
            'homa',
            'pando',
            'ibmo',
            'octopus'
          ]
        },
        { name: 'bank', subItems: ['rahsar', 'davvam', 'miniator', 'zaal'] },
        { name: 'capitalMarket', subItems: ['rahsar', 'graphiumStock', 'pluto', 'spout', 'miniator', 'sanjaqakSilver', 'sasquatch', 'zaal'] },
        {
          name: 'governance',
          subItems: ['rahsar', 'sasquatch', 'ibmo',
            'octopus']
        },
        {
          name: 'fmcg',
          subItems: [
            'graphiumFMCG',
            'miniator',
            'zaal',
            'octopus'
          ]
        },
        {
          name: 'publishers',
          subItems: [
            'rahsar',
            'graphiumStock',
            'pluto',
            'spout',
            'sanjaqakSilver',
            'sasquatch'
          ]
        },
        {
          name: 'contracting',
          subItems: [
            'davvam',
            'homa',
            'pando',
            'ibmo',
            'octopus'
          ]
        }
      ]
    }
  },
  head () {
    return {
      title: this.$t('menu.industries', this.$i18n.locale)
    }
  },
  mounted () {
    this.target = window.location.hash.replace('#', '')
    if (this.target.length > 0) {
      const elem = document.getElementById(this.target) ? document.getElementById(this.target) : document.getElementById('hero-section')
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  },
  methods: {
    openDescDialog (title, description, image) {
      this.selected.title = title
      this.selected.description = description
      this.selected.image = image
      this.descDialogOpen = true
    }
  }

}
</script>
<style>
</style>
