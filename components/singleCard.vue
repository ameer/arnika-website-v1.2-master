<template>
  <v-card
    :id="img"
    height="256px"
    flat
    class="single-card rounded-lg relative has-read-more"
  >
    <div class="d-flex align-center px-1">
      <div class="single-card__image">
        <img contain :src="image" width="100%" height="100%">
      </div>
      <h4 class="darkBlue--text text-h5 text--md-h4">
        {{ title }}
      </h4>
    </div>
    <v-card-text class="single-card__body">
      {{ truncatedDesc }}
    </v-card-text>
    <div
      class="absolute bottom-0 right-0 left-0 text-center read-more"
      @click="openDescDialog"
    >
      {{ $t(`common.readMore`, $route.params.locale) }}
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    img: { type: String, default: 'img' },
    title: { type: String, default: 'Title' },
    description: { type: String, default: 'description' }
  },
  data () {
    return {
      err: false
    }
  },
  computed: {
    image () {
      if (this.err === false) {
        return `/img/svg/products/${this.img}.svg`
      } else {
        return '/img/png/coming-soon.png'
      }
    },
    truncatedDesc () {
      const arr = this.description.split(' ')
      if (arr.length > 50) {
        return arr.slice(0, 50).join(' ') + '...'
      } else {
        return this.description
      }
    }
  },
  methods: {
    openDescDialog () {
      this.$emit('openDescDialog', this.title, this.description, this.image)
    }
  }
}
</script>
<style>
.single-card {
  scroll-padding-top: 200px;
}
html[dir="ltr"] .single-card__image {
  transform: translate(-32px, -32px);
}

.single-card__image {
  background: #fcfcfc;
  border: 1px solid #ececec;
  border-radius: 50% !important;
  display: inline-block;
  height: 128px;
  padding: 1.5rem;
  transform: translate(32px, -32px);
  width: 128px;
}
html[dir="ltr"] .single-card__body {
  line-height: 1.5rem !important;
}
.single-card__body {
  transform: translateY(-32px);
  font-size: 0.875rem;
  line-height: 2rem !important;
  max-height: 9rem;
  overflow: hidden;
  user-select: none;
}
.has-read-more:hover .read-more {
  height: 3rem;
  opacity: 1;
}
.read-more {
  background: rgb(25 79 112 / 90%);
  color: #fff;
  font-weight: 300;
  line-height: 3rem;
  height: 0;
  opacity: 0;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}
@media (max-width: 600px) {
  html[dir="ltr"] .single-card__image {
    transform: translate(-24px, -24px);
  }
  .single-card__image {
    transform: translate(24px, -24px);
  }
  .read-more {
    height: 3rem;
    opacity: 1;
  }
}
</style>
