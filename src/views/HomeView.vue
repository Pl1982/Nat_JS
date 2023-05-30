<template>
  <main>
    <HeaderComponents />
    <MainComponents />
    <DeuxiemePartie />
  </main>
</template>
<script>
import HeaderComponents from '../components/headerComponents.vue'
import MainComponents from '../components/MainComponent.vue'
import DeuxiemePartie from '../components/deuxiemePartie.vue'
export default {
  components: { HeaderComponents, MainComponents, DeuxiemePartie }
}

</script>

