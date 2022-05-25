<template>
  <div class="flex">
    <div class="mx-auto">
      <h1 class="text-2xl my-2 text-center">Vue Calendar</h1>

      <section class="mx-4 flex justify-between">
        <h2 class="font-bold">{{ currentMonthName }}</h2>
        <h2 class="font-bold">{{ currentYear }}</h2>
      </section>

      <section class="flex">
        <p 
          class="text-center my-2" 
          style="width:14.28%" 
          v-for="day in days" 
          :key="day"
        >
          {{ day }}
        </p>
      </section>
      <section class="flex flex-wrap">
        <p 
          class="text-center my-2" 
          style="width:14.28%" 
          v-for="startDay in startDay()" 
          :key="startDay"
        > </p>
        <p 
          class="text-center" 
          style="width:14.28%" 
          v-for="num in daysInMonth()" 
          :key="num"
          :class="currentDayClass(num)"
        >
            {{ num }}
        </p>
      </section>
      <section class="flex justify-between my-4">
        <button class="px-2 borer rounded" @click="prev">Prev</button>
        <button class="px-2 borer rounded" @click="next">Next</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentDay: new Date().getDate(),
      currentMonth: new Date().getMonth(),// month + 1 since it gives the index number if the number so to get the actual month number add 1
      currentYear: new Date().getFullYear(), //2022
      days: ['Sun', 'Mon', "Tue", "Wed", "Thu", "Fri", "Sat"]
    }
  },

  methods:{
    daysInMonth(){
      return new Date(this.currentYear, this.currentMonth+1, 0).getDate();
    },

    startDay(){  
      return new Date(this.currentYear, this.currentMonth, 1).getDay(); //first day of the month
    },

    next(){
      if(this.currentMonth === 11){
        this.currentMonth = 0;
        this.currentYear++;
      }else{
        this.currentMonth++;
      }

    },
    prev(){
      if(this.currentMonth === 0)
      {
        this.currentMonth =11;
        this.currentYear--;
      }else{
        this.currentMonth--;
      }
      
    },

    currentDayClass(num){
      const calendarFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();

      const currentFullDate = new Date().toDateString();
      return calendarFullDate === currentFullDate ? 'text-yellow-600' : '';
    }
  },

  computed:{
    currentMonthName(){
      return new Date(this.currentYear, this.currentMonth).toLocaleString('default',{month: "long"});  // may or june or ...
    },
  }
}
</script>
<style>

</style>