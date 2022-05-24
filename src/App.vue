<template>
<AppHeader />

  <div class="w-full">
    <DcHeros />
  </div>
</template>


<script>
import AppHeader from "./components/AppHeader";
import DcHeros from "./components/DcHeros";

export default{
  components: {AppHeader,DcHeros}
}
</script>