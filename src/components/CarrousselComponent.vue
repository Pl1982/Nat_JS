<template>
      <carousel :items-to-show="1.5" :autoplay="2000" :pauseAutoplayOnHver="true" wrapAround="true">
            <slide v-for="image in images" :key="image">
                  <img :src="image.src" alt="image.alt" class="slider-image">

            </slide>

            <template #addons>
                  <navigation />
                  <pagination />
            </template>
      </carousel>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
      components: {
            Carousel,
            Slide,
            Pagination,
            Navigation
      },
      data() {
            return {
                  images: [
                        {
                              src: ' ./assets/media/photo21.jpg',
                              alt: 'blab'
                        },
                        {
                              src: ' ./assets/media/maigre3.jpg',
                              alt: 'blab'
                        },
                        {
                              src: ' ./assets/media/etoile3.jpg',
                              alt: 'blab'
                        }
                  ]

            }
      }
}
</script>