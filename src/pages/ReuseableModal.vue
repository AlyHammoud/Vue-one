<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5 w-full">Re-useable Modal</h1>

      <AppModal v-if="isModalOneOpen" @close-login="isModalOneOpen = false">
          <template #title>
            Model One
          </template>
          <template #body>
            <p>this is the body slot for body 1</p>
          </template>
      </AppModal>
      <button class="border rounded px-2 mx-4 bg-blue-400 text-white" @click="isModalOneOpen = true">Model One</button>

      <AppModal v-if="isModalTwoOpen" @close-login="isModalTwoOpen = false">
        <template #title>
            Modal Two
          </template>
          <template #body>
            <p>this is the body slot for body 2</p>
          </template>
      </AppModal>
      <button class="border rounded px-2 mx-4 bg-blue-400 text-white" @click="isModalTwoOpen = true">Modal Two</button>

    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import AppModal from "../components/AppModal.vue";
export default {
  components: { AppModal },

  setup() {
    const isModalOneOpen = ref(false);
    const isModalTwoOpen = ref(false);

    return { isModalOneOpen, isModalTwoOpen };
  },
};
</script>

<style></style>
