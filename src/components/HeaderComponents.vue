<template>
      <main>
            <header>

                  <div id="imagePrincipale">
                        <h1> A la découverte de L'Aloe</h1>
                        <div id="premierTrait"></div>
                        <h3>Produits naturels</h3>
                  </div>
            </header>
      </main>
</template>
<script>
export default {}
</script>
<style scoped>


#imagePrincipale {
      padding-top: 60px;
      background: url(../assets/media/presentattion2.jpg) no-repeat fixed 50% 50%;
      background-position: top;
      width: 100%;
      height: 799px;
}

h1 {
      font-family: 'Dancing Script', cursive;
      text-align: center;
      color: var(--secondary);
      font-size: 6em;
      margin-top: 100px;
      text-shadow: 6px 3px 2px var(--thirdy);
}

#premierTrait {
      height: 1px;
      width: 25%;
      margin: -3px auto;
      background-color: var(--secondary);
      box-shadow: 1px 3px 2px var(--thirdy);
}

h3 {
      text-align: center;
      color: var(--secondary);
      font-size: 3em;
      text-shadow: 6px 3px 2px var(--primary);
}
</style>
