<template>
  <div class="mcs text-center">
    <img :class="'mb-md-3 mx-auto '+imgClass" :src="svg">
    <p class="darkBlue--text text-h6 fa">
      {{ faText }}
    </p>
    <p class="darkBlue--text text-h6 en">
      {{ enText }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'Mcs',
  props: {
    svg: { type: String, default: '' },
    faText: { type: String, default: '' },
    enText: { type: String, default: '' },
    imgClass: { type: String, default: '' }
  }
}
</script>
<style>

</style>
