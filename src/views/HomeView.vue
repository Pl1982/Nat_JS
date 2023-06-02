<template>
  <main>
    <HeaderComponents />
    <MainComponents />
    <CarrousselComponent />
    <DeuxiemePartie />
    <ContactComponent />
    

  </main>
</template>
<script>
import HeaderComponents from '../components/HeaderComponents.vue'
import MainComponents from '../components/MainComponent.vue'
import DeuxiemePartie from '../components/DeuxiemePartie.vue'
import ContactComponent from '../components/ContactComponent.vue'
import CarrousselComponent from '../components/CarrousselComponent.vue'

export default {
  components: { HeaderComponents, MainComponents, DeuxiemePartie, ContactComponent, CarrousselComponent, }
}

</script>

