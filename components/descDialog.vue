<template>
  <v-dialog
    :value="open"
    width="600px"
    @click:outside="closeDialog"
  >
    <v-card>
      <v-card-title class="align-center justify-space-around light">
        <div class="d-flex">
          <img contain :src="image" width="128px" height="128px">
        </div>
        <div class="text-h6 text-md-h5 md-em font-weight-bold">
          {{ title }}
        </div>
      </v-card-title>
      <v-divider class="mb-4" />
      <v-card-text class="text-body-1 line-height-doubled">
        {{ description }}
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn
          color="red darken-1"
          text
          @click="closeDialog"
        >
          {{ $t(`common.close`, $route.params.locale) }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  },
  methods: {
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style>

</style>
