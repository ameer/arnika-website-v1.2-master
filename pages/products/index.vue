<template>
  <div>
    <desc-dialog
      :open="descDialogOpen"
      :title="selected.title"
      :description="selected.description"
      :image="selected.image"
      @closeDialog="descDialogOpen = false"
    />
    <hero
      :img="'/img/jpg/products-hero.jpg'"
      :title="'productsPage.title'"
      :about="'productsPage.about'"
    />
    <div class="relative">
      <v-container
        v-for="(item, i) in items"
        :key="'product-row' + i"
        fluid
        class="light products-bg py-8 py-md-16 px-4 px-md-16"
      >
        <h3
          class="text-h5 text-md-h4 py-3 px-4 px-md-16 md-em font-weight-regular golden-circle"
        >
          {{ $t(`products.categories.${item.name}`, $route.params.locale) }}
        </h3>
        <v-container>
          <v-row class="py-8">
            <v-col
              v-for="(subItem, j) in item.subItems"
              :key="'subItem-' + j"
              cols="12"
              sm="6"
              class="px-4 px-md-16 my-4 my-md-8"
            >
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
          name: 'holding',
          subItems: ['maskook', 'homa']
        },
        {
          name: 'brand',
          subItems: ['miniator', 'graphiumFMCG', 'zaal']
        },
        {
          name: 'exchange',
          subItems: [
            'sanjaqakSilver',
            'graphiumStock',
            'pluto',
            'spout',
            'sasquatch',
            'sanjaqakGold'
          ]
        },
        {
          name: 'accounting',
          subItems: ['homa', 'pando']
        },
        { name: 'financing', subItems: ['rahsar', 'davvam'] },
        { name: 'dataOwenership', subItems: ['octopus', 'ibmo'] }
      ]
    }
  },
  head () {
    return {
      title: this.$t('menu.products', this.$i18n.locale)
    }
  },
  mounted () {
    this.target = window.location.hash.replace('#', '')
    const spotlight = document.getElementById('spotlight')
    if (this.target.length > 0) {
      const elem = document.getElementById(this.target)
        ? document.getElementById(this.target)
        : document.getElementById('hero-section')
      spotlight.classList.add('active')
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
      elem.classList.add('target')
      setTimeout(
        (elem, spotlight) => {
          elem.classList.remove('target')
          spotlight.classList.remove('active')
        },
        1500,
        elem,
        spotlight
      )
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
<style></style>
