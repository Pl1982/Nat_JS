<script>
import NavBar from "./components/NavBar.vue"
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    NavBar,
    FooterComponent
  },
}
</script>

<template>
<div class="contenair">
   <NavBar />
        <RouterView />
        <FooterComponent/>
    
  </div> 

</template>

<style scoped>
.contenair {
  position: relative;
  padding-bottom: 166px;
  min-height: 100vh;
}
</style>
