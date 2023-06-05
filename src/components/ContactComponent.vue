<template>
      <main>
            <section>
                  <footer>
                        <h2 id="contact">
                              <div class="contact">
                                    <p>contact</p>
                              </div>
                        </h2>
                        <form>
                              <input placeholder="Nom" required>
                              <input placeholder="Prenom" required>
                              <input placeholder="E-mail" required>
                              <textarea placeholder="Votre message ici..."></textarea>
                              <button type="submit">E-mail</button>
                        </form>
                        
                  </footer>
            </section>
      </main>
</template>

<script>
export default {
      data() {
            return {
                  nom: '',
                  prenom: '',
                  mail: '',
                  message: ''
            }
      },
}
</script>

<style scoped>
footer {
      background-color: #524A3A;
      color: rgba(204, 213, 174, 0.5);
      padding: 20px 0 10px 0;
      text-align: center;
}

.contact {
      color: rgba(204, 213, 174, 0.5);
}

form {
      margin: 0 auto;
      max-width: 900px;
}

input,
textarea,
button {
      border: none;
      width: 100%;
      padding: 15px 10px;
      margin: 1px 0;
      font-size: 1.2em;
      font-family: 'Advent Pro', sans-serif;
      border-radius: 8px;
}

textarea {
      height: 120px;
}

button {
      font-size: 1.5em;
      background-color: #4b5942;
      cursor: pointer;
      color: #fff;
}

button:hover {
      background-color: #333;
      transition: 0.3s ease-in-out;
}


</style>
