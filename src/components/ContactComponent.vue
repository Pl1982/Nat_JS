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
                              <input placeholder="Nom" required v-model="nom" id="nom" type="text">
                              <input placeholder="Prenom" required v-model="prenom" id="prenom" type="text">
                              <input placeholder="E-mail" required v-model="mail" id="mail" type="text">
                              <textarea placeholder="Votre message ici..." required v-model="message" id="message"
                                    type="text"></textarea>
                              <button type="submit">

                                    <a href="mailto:nathaliedulongb@gmail.com">E-mail</a></button>
                        </form>

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
<style>
footer {
      background-color: #524A3A;
      color: rgb(32, 190, 32);
      padding: 20px 0 10px 0;
      color: rgba(204, 213, 174, .5);
      padding: 20px 0 10px 0;
      text-align: center;
}

.contact {
      color: rgba(204, 213, 174, .5);
}

form {
      margin: 0 auto;
      max-width: 900px;
}

input,
textarea,
button {
      border: none;
      width: 55%;
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
      background-color: var(--thirdy);
}

button:hover {
      background-color: #4b5942;
      transition: 0.3s ease-in-out;
}

#deuxiemeTrait {
      height: 1px;
      width: 75%;
      background-color: #FFFAE1;
      margin: 60px auto;
}

#copyrightEtIcons {
      display: flex;
      margin-bottom: 20px;
      padding: 0 10%;
}

#copyright {
      width: 50%;
      text-align: left;
      color: #FFFAE1;

}

#icons {
      width: 50%;
      text-align: right;
}

#icons a {
      display: inline-block;
      padding: 0 15px;
      font-size: 1.3em;
      color: var(--secondary)
}

#icons a:hover {
      transform: scale(1.5);
      transition: 0.1s;
      color: red;
}
</style>