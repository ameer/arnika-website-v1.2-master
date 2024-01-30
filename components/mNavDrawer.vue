<template>
  <v-navigation-drawer
    :value="drawer"
    bottom
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['drawer'],
  data () {
    return {
      localDrawer: false,
      group: null
    }
  }
}
</script>
<style>

</style>
