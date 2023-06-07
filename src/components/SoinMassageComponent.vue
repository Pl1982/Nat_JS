<template>             
           <section :class="{ reversed: reversed } ">
                  <div class="content">
                        <h2>{{ title }}</h2>
                      <slot/>
                        <Router-Link :to="LinkUrl">{{ LinkText }}</Router-Link>
                  </div>
                  <div class="image">
                        <img :src="imageUrl" alt="image">
                       
                  </div>
            </section>       
                  
     
</template>
<script>
export default {
      props: {
            title: String,
            image: String,
            reversed: Boolean,
            LinkUrl: String,
            LinkText: String,
      },

      computed: {
            imageUrl: function () {
                  return new URL(this.image, import.meta.url).href
            }
      }}
</script>
<style scoped>
.image {
      display: flex;
      align-items: center;

}

.image img {
    
      aspect-ratio: 4/3;
      object-fit: 2rem;

}

section {
      display: grid;
      grid-template-columns: 45% 55%;
      margin: 4rem 0;
      background-color: white
      
}


section.reversed .image {
      order: 1;
}

section.reversed .content {
      order: 2;
}

section .content a {
      display: block;
      width: fit-content;
      padding: 0.5rem 2rem;
      background: var(--primary);
      color: white;
      margin: 2rem 0;
}

section.reversed .content a:hover {
      background: white;
      border: 1px solid var(--primary);
}


section.reversed .content a {
      background: white;
      color: var(--primary);
}

section.reversed .content a:hover {
      background: var(--primary);
      border: 1px solid white;
      color: white;
}

section .content a:hover {
      background: white;
      border: 1px solid var(--primary);
      color: var(--primary);
}


.image img {
      width: 100%;
      /* Force un ratio d'iamge 
      Attention ca deforme l image */
      aspect-ratio: 2/1;
      /* Replace l'image au centre sans la deforme */
      object-fit: cover;
}

.content {
      padding: 2rem;
}

.content p {
      margin: 1rem 0;
}

.content h2 {
      font-size: 2rem;
      margin: 1rem 0;
}

@media screen and (max-width: 1200px) {

      section,
      section.reversed {
            grid-template-columns: 100%;
      }

      section.reversed .image {
            order: 2;
      }

      section.reversed .content {
            order: 1;
      }
}
      
</style>

