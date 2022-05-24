<template>
<AppHeader />

  <div class="w-full">
    <!-- <DcHeros /> -->
    <AppCalendar />
  </div>
</template>


<script>
import AppHeader from "./components/AppHeader";
import AppCalendar from "./components/AppCalendar";
// import DcHeros from "./components/DcHeros";

export default{
  components: {AppHeader,AppCalendar,/*DcHeros*/}
}
</script>