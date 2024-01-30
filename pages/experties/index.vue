<template>
  <div>
    <desc-dialog
      :open="descDialogOpen"
      :title="selected.title"
      :description="selected.description"
      :image="selected.image"
      @closeDialog="descDialogOpen = false"
    />
    <hero :img="'/img/jpg/experties-hero.jpg'" :title="'specialty.title'" :about="'specialty.about'" />
    <div class="relative">
      <v-container
        v-for="(item, i) in items"
        :id="item.name"
        :key="'product-row'+i"
        v-intersect="onIntersect"
        fluid
        class="light products-bg py-8 py-md-16 px-4 px-md-16"
      >
        <h3 class="text-h5 text-md-h4 py-3 px-4 px-md-16 md-em font-weight-regular golden-circle">
          {{ $t(`specialty.categories.${item.name}`, $route.params.locale) }}
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
      defaultDesc: 'به زودی...',
      descDialogOpen: false,
      selected: {
        title: '',
        description: '',
        image: ''
      },
      items: [
        {
          name: 'cs',
          subItems: [
            'rahsar',
            'pando',
            'octopus'

          ]
        },
        {
          name: 'bi',
          subItems: [
            'rahsar',
            'davvam',
            'graphiumFMCG',
            'graphiumStock',
            'pluto',
            'sasquatch',

            'homa',
            'pando',
            'ibmo'
          ]
        },
        {
          name: 'ml',
          subItems: [
            'rahsar',
            'davvam',
            'graphiumFMCG',
            'graphiumStock',
            'pluto',
            'spout',
            'sanjaqakGold',
            'sasquatch',
            'zaal',

            'homa',
            'pando',
            'ibmo',
            'sanjaqakSilver'

          ]
        },
        {
          name: 'nlp',
          subItems: [
            'graphiumFMCG',
            'graphiumStock',
            'pluto',
            'spout',
            'miniator',
            'zaal'
          ]
        },
        {
          name: 'bd',
          subItems: [
            'rahsar',
            'davvam',
            'graphiumFMCG',
            'graphiumStock',
            'pluto',
            'spout',
            'miniator',
            'sanjaqakGold',
            'sasquatch',
            'zaal',

            'homa',
            'pando',
            'ibmo',
            'sanjaqakSilver'

          ]
        },
        {
          name: 'bourse',
          subItems: [
            'rahsar',
            'graphiumStock',
            'pluto',
            'spout',
            'sanjaqakGold',
            'sasquatch'
          ]
        },
        {
          name: 'forex',
          subItems: [
            'graphiumStock',

            'sanjaqakSilver'
          ]
        }
      ],
      isIntersecting: false
    }
  },
  head () {
    return {
      title: this.$t('menu.specialty', this.$i18n.locale)
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
    onIntersect (entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      if (entries[0].isIntersecting === true) {
        history.replaceState({}, '', `#${entries[0].target.id}`)
      }
    },
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
