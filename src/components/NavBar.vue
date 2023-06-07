<template>
      <main>
            <nav>
                  <ul class="liste">
                        <li id="logo">
                              <router-link to="/">Nat'Aloe</router-link>
                        </li>
                        <div class="liste2">
                               <li>
                                        <a href="/#contact">Me contacter</a>

                              </li>

                              <li>
                                    <a target="_blank"
                                          href="https://direct.foreverliving.fr/ref/330001545856/">Boutique</a>
                              </li>
                              <li>
                                    <router-link to="/massage">Massage</router-link>
                              </li>    
                        </div>
                            
                        
                      
                      
                  </ul>
            </nav>
      </main>
</template>
<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Advent+Pro|Dancing+Script&display=swap');
.liste{display: flex;
justify-content: space-between;
align-items: center;


}


nav {
      overflow: hidden;
      background-color: rgb(75, 89, 66);
      position: sticky;
      width: 100%;
      opacity: 1;
      width: 100%;
      z-index: 9999999;
      position: fixed;
      top: 0;
}
.liste2 a{
      font-size: 1.4rem;
      font-weight: bold;

}



li {
      float: right;
      font-size: 1.2em;
}

li a {
      text-decoration: none;
      display: block;
      text-align: center;
      padding: 18px 16px;
      
}

#logo {

      font-family: 'Dancing Script', cursive;
      font-weight: bold;
      float: left;
      font-size: 3.5em;
      padding: 0em;
}
@media screen and (max-width: 418px) and (max-height: 667px) {
    nav {
        font-size: 0.9em;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    li {
        float: none;
        margin-bottom: 10px;
    }
    
    li a {
        padding: 10px 8px;
    }
    
    #logo {
        font-size: 1.5em;
    }
    
    #logo router-link {
        display: block;
        text-align: center;
        padding: 10px 0;
    }
    
    ul {
        margin-top: 0;
    }
}
</style>