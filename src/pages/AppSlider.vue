<template>
  <div class="flex flex-wrap w-full relative">
    <div v-for="(color, index) in sliders" :key="color" class="absolute w-full">
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          :class="color"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(item,index) in sliders"
          :key="item"
          :class="currentSlide == index ? 'bg-gray-700' :'bg-gray-300'  "
          class="w-4 h-4 rounded-full  mx-2 cursor-pointer shadow-md"
          @click="makeActive(index)"
        ></div>
      </div>
    </div>
    <!-- <div class="my-10 flex w-full">
      <div class="m-auto">
        <transition name="fade">
          <h1 v-if="isTitleShowing">Slider Carousel</h1>
        </transition>
        <button
          @click="isTitleShowing = !isTitleShowing"
          class="p-2 border rounded bg-red-400 text-white"
        >
          Toggle Text
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: ["bg-teal-600", "bg-blue-600", "bg-yellow-600"],
      interval: "",
      isTitleShowing: true,
    };
  },

  mounted() {
    // time interval starts,, if we go to another router page it keeps runnign so we need to stop it when unmouted or before unmount
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 2000);
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },

  methods:{
      makeActive(index){
          this.currentSlide = index;
      }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
