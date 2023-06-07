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
   <div class="wrapper">
     <RouterView />      
     <div class="footer">
         <FooterComponent/>    
     </div>
   </div>
     

   
       
      
    
  </div> 

</template>

<style scoped>
.contenair {
  position: relative;
  padding-bottom: 166px;
  min-height: 100vh;
}
/* .wrapper{
  position: absolute;
  top:104px;
  z-index: -1;
} */

</style> 
