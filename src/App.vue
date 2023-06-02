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
  <NavBar />
  <div class="main-wrapper">
    <RouterView />
    <FooterComponent/>
  </div>
</template>

<style scoped></style>
