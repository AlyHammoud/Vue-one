<template>
  <div class="flex flex-wrap w-full"></div>
  <h1 class="w-full text-center text-3xl my-4">MarkDownd App</h1>
  <section class="flex m-auto w-10/12 h-screen">
    <article class="w-1/2 border">
      <!-- <textarea class="w-full h-full" v-model.lazy="text"></textarea>  when loose focus apply the changes (blur)-->
      <textarea ref="markDownTextArea" class="w-full h-full" :value="text" @input="update"></textarea>
    </article>
    <article class="w-1/2 border bg-gray-100" v-html="markedText1"></article>
  </section>
</template>

<script>
import { marked } from "marked";
import debounce from "../utilities/mixins/debounce";

export default {
  mixins: [debounce],

  data() {
    return {
      text: "",
    };
  },

  computed: {
    markedText1() {
      return marked(this.text);
    },
  },

  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },

  mounted(){
      this.$refs.markDownTextArea.focus();
  }
};
</script>

<style></style>
