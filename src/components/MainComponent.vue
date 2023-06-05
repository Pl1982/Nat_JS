<template>
      <main>
            <section class="beige">
                  <div class="container">
                        <div class="texteIntro">
                              <h2>Des produits extraordinaires</h2>
                              <p>L'Aloe vera est une plante aux nombreux bienfaits. Son gel, riche en nutriments, hydrate et
                                    apaise la peau,
                                    favorisant
                                    ainsi sa régénération. Il possède également des propriétés anti-inflammatoires et
                                    antibactériennes, aidant à
                                    soulager
                                    les irritations cutanées. En interne, l'Aloe vera peut soutenir la digestion et renforcer
                                    le système
                                    immunitaire. Une
                                    véritable plante aux multiples vertus.</p>
                        </div>
                        <div class="prestations">
                              <div class="imagesPrestations">
                                    <h4>Boissons</h4>
                                    <a href="#"><img src="../assets/media/etoile3.jpg" alt="Aloe"></a>
                              </div>
                              <div class="imagesPrestations">
                                    <h4>Crèmes</h4>
                                    <a href="#"><img src="../assets/media/photo21.jpg" alt="chambre"></a>
                              </div>
                              <div class="imagesPrestations">
                                    <h4>Cure Detox</h4>
                                    <a href="#"><img src="../assets/media/maigre3.jpg" alt="repas"></a>
                              </div>
                        </div>
                  </div>
            </section>
      </main>
</template>
<script>
export default {}
</script>
<style scoped>
.beige{
      background-color: var(--secondary);
}

.texteIntro{
      padding: 0px 20%;
}

.prestations {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 30px 10%;
}

.imagesPrestations h4 {
      font-family: 'Dancing Script', cursive;
      text-align: center;
      font-size: 1.8em;
      margin: 15px;
      font-weight: 300;
}

.imagesPrestations img {
      border-radius: 25px;
      box-shadow: 2px 1px .5px .5px var(--thirdy);
}

.imagesPrestations img:hover {
      opacity: 0.5;
      transform: scale(1.05);
      transition: 0.6s ease-in-out;
}
</style>