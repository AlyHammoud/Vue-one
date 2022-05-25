<template>
  <div class="flex flex-wrap w-full">
    <div
      v-for="(color, index) in sliders"
      :key="color"
      class="absolute w-full bg-blue-600"
    >

      <div
        v-if="currentSlide == index"
        :class="color"
        style="height: 350px"
      ></div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: ["bg-teal-600", "bg-blue-600", "bg-yellow-600"],
      interval: "",
    };
  },

  mounted() {
    // time interval starts,, if we go to another router page it keeps runnign so we need to stop it when unmouted or before unmount
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 1000);
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style></style>
