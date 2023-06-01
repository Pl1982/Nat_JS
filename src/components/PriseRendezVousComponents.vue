<template>
      <main>
<h1>les bienfaits du massage</h1>
<p>Prendre rendez-vous</p>
<div class="calendar"><VDatePicker v-model="date" mode="dateTime" is24hr /></div>
      <p>Sélectionnez votre de rendez-vous: {{ date }}</p>   
           

      </main>
</template>
<script>


import { ref } from 'vue';
const date = ref(new Date())

</script>


<style scoped>
h1 {
      color: var(--primary);
      font-size: 2rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 1rem;
    
}
p{
      color: var(--primary);
      font-size: 1.5rem;
      font-weight: 400;
      text-align: center;
      margin-bottom: 1rem;
}

.calendar {   
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
}
</style>