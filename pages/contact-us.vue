<template>
  <section id="contact-us-section" class="main-gr dark h-full relative">
    <div class="h-full relative">
      <v-container class="h-full d-flex align-center justify-center">
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" class="text-center">
            <h3 class="text-h4 text-md-h3 font-weight-bold hi-em mb-8">
              با ما در تماس باشید
            </h3>
            <p class="md-em text-body-1 text-md-h6">
              اولین تماس می‌تواند شروع یک تحول فوق‌العاده در کسب و کار شما باشد.
            </p>
          </v-col>
        </v-row>
      </v-container>
      <div class="icon-scroll">
        <div />
      </div>
    </div>
    <v-container />
  </section>
</template>

<script>
export default {

}
</script>

<style>
.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}
.icon-scroll {
  cursor: pointer;
  width: 40px;
  height: 70px;
  margin-left: -20px;
  bottom: 0;
  margin-bottom: 4rem;
  box-shadow: inset 0 0 0 1px hsl(0deg 0% 100% / 87%);
  border-radius: 25px;
}
.icon-scroll:before {
  content: '';
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  -webkit-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-name: scroll;
          animation-name: scroll;
}
@-webkit-keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}
</style>
