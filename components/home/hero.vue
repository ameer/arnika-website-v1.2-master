<template>
  <section id="hero-section" class="dark main-gr h-full pt-28 relative">
    <div class="container pt-md-16">
      <v-row align="center" class="relative" justify-sm="center">
        <div class="h-100 w-100 absolute" :class="hideParticles === true ? 'hidden': 'visible' ">
          <Particles
            id="tsparticles"
            :options="particlesConfig"
            class="h-100 w-100"
          />
        </div>
        <v-col cols="12" sm="6" md="4" class="text-center text-md-start">
          <img :src="logo" class="pt-12 px-12" style="max-width:320px;">
          <h2 class="text-h6 text-center text-md-start ms-md-4 mt-n4 white-space-pre-line md-em">
            {{ $t("HomeHeroTitle", $route.params.locale) }}
          </h2>
        </v-col>
        <v-col id="particles" class="text-end relative" cols="12" md="8">
          <div>
            <v-img src="/img/png/brain.png" alt="" contain />
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script>

export default {
  data () {
    return {
      hideParticles: true,
      particlesConfig: {
        fpsLimit: 30,
        particles: {
          number: {
            value: 128,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#e2a725'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'repulse'
            },
            onclick: {
              enable: false,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3
            },
            repulse: {
              distance: 400,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }
    }
  },
  computed: {
    logo () {
      if (this.$i18n.locale === 'fa') {
        return '/img/svg/logo.svg'
      } else {
        return '/img/svg/logo-en.svg'
      }
    }
  },
  mounted () {
    const self = this
    setTimeout(() => { self.hideParticles = false }, 1000)
  }
}
</script>
<style>
.hidden {
  visibility: hidden;
  opacity: 0;
}
.visible {
  opacity: 1;
  visibility: visible;
  transition: opacity 1s linear;
}
</style>
