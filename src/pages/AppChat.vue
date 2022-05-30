<template>
  <h1>Chat</h1>
  <h1>ss</h1>
</template>

<script>
import { reactive } from "@vue/runtime-core";

export default {
  setup() {
    const state = reactive({
      chats: {},
      message: "",
    });


    return { state };
  },


};


</script>

<style></style>
