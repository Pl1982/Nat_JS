<template>
      <main>
            <section class="produit_1">
                  <div class="container2">
                        <h2>Et tant à découvrir...</h2>
                        <ul>
                              <li class="Vitamines">
                                    <p>Vitamines</p>
                              </li>
                              <li class="Complement">
                                    <p>Compléménts alimantaires</p>
                              </li>
                              <li class="Soins">
                                    <p>Soins du corps</p>
                              </li>
                              <li class="Boissons">
                                    <p>Les boissons</p>
                              </li>
                        </ul>
                  </div>
            </section>
      </main>
</template>
<script>
export default {}
</script>
<style scoped>


.produit_1{
      height: 1400px;
      background-color: var(--secondary);
      padding: 1px 2%;
}

.produit_1 h2 {
      padding-top: 60px;

}

.Vitamines {
      background: url(../assets/media/vitamine1.jpg);
      border-radius: 1em;

}

.Complement {
      background: url(../assets/media/Cadeaux3.jpg);
      border-radius: 1em;
}

.Soins {
      background: url(../assets/media/savon1.jpg);
      border-radius: 1em;
}

.Boissons {
      background: url(../assets/media/Imageprincipale3.jpg);
      border-radius: 1em;
}

.container2 {
      width: 80%;
      margin: auto;
}
.produit_1 li {
      margin: 65px 100px 0 100px;
      height: 226px;
      width: 55%;
      max-width: 550px;
      float: left;
      box-shadow: 6px 6px 28px -1px var(--thirdy);
}

.produit_1 p {
      height: 45px;
      width: 235px;
      background-color: rgb(175, 194, 11);
      float: right;
      margin: 50px -180px 0 0;
      font-size: 1.5em;
      text-align: center;
      padding-top: 15px;
      box-shadow: 4px 4px 0 1px #524A3A;
      border-radius: .5em;
}

.produit_1 .Complement,
.produit_1 .Boissons {
      float: right;
}

.Complement p,
.Boissons p {
      float: left;
      background-color: rgb(175, 194, 11);
      margin-left: -180px;
      box-shadow: -4px 4px 0 1px #524A3A;
      color: var(--primary);
      border-radius: .5em;
}

</style>