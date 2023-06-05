<template>
      <section>
                              <div id="deuxiemeTrait"></div>
                              <div id="copyrightEtIcons">
                                    <div id="copyright">
                                          <span> © fromsP.L; 2022</span>
                                    </div>
                                    <div id="icons">

                                          <a target="_blank" href="http://www.facebook.fr"><i class="fa fa-facebook"></i></a>
                                          <a target="_blank" href="http://www.instagram.com"><i class="fa fa-instagram"></i></a>
                                    </div>
                              </div>
                              </section>
</template>
<script>
export default {}
</script>
<style scoped>
#deuxiemeTrait {
      height: 1px;
      width: 75%;
      background-color: #FFFAE1;
      margin: 60px auto;
}

#icons {
      display: flex;
      justify-content: flex-end;
}

#icons a {
      display: inline-block;
      padding: 0 15px;
      font-size: 1.3em;
      color: #FFFAE1;
}

#icons a:hover {
      transform: scale(1.5);
      transition: 0.1s;
      color: red;
}






section{
      background-color: #524a3a;
      padding:1px; 
      position:absolute;
      bottom: 0;
      width: 100%;
 
};
</style>