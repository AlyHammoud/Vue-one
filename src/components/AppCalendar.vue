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
          v-for="day in startDay()" 
          :key="day"
        >

          

        </p>
      </section>

      <section class="flex flex-wrap">
        <p class="text-center" style="width:14.28%" v-for="num in daysInMonth(currentYear, currentMonth)" :key="num">{{ num }}</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentMonthName: new Date().toLocaleString('default',{month: "long"}),  // may or june or ...
      currentMonth: new Date().getMonth() + 1,// month + 1 since it gives the index number if the number so to get the actual month number add 1
      currentYear: new Date().getFullYear(), //2022
      days: ['Sun', 'Mon', "Tue", "Wed", "Thu", "Fri", "Sat"]
    }
  },

  methods:{
    daysInMonth(year, month){
      return new Date(year, month, 0).getDate();
    },

    startDay(){
    return new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
  }
  },
}
</script>
<style>

</style>