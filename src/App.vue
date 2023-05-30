<script>
import NavBar from "./components/NavBar.vue"

export default {
  components: {
    NavBar
  },
}
</script>

<template>
  <NavBar />
  <div class="main-wrapper">
    <RouterView />
  </div>
</template>

<style scoped></style>
