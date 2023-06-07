<template>
     

      <p class="title">Prendre rendez-vous</p>
      <div class="calendar">
            <VDatePicker v-model="date" mode="dateTime" is24hr />
      </div>
      
</template>

<script>
import { ref } from 'vue';

export default {
      data() {
            return {
                  date: ref(new Date()),
            };
      },
};
</script>



<style scoped>  
.calendar :deep(.vc-container ){
      width: 31rem;
      height: 30rem;
      
      
     
}
 .calendar{
      font-size: 1.5rem !important;
     
}
  
.calendar :deep(.vc-time-picker){
    margin-top: 4rem;
     padding:35px;
}



.title{
      color: var(--primary);
      font-size: 3rem;
      font-weight: 400;
      text-align: center;
      margin-top: 10rem;
      margin-bottom: 5rem;
}

.calendar {   
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      margin-bottom:42px;
     
}

</style>



