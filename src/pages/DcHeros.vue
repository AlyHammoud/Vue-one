<template>
  <div class="flex">
    <div class="mx-auto">
      <p class="text-2xl text-red-500 mb-10">{{ fname }} {{ lname }}</p>
      <ul>
        <li
          class="mb-5 flex justify-between"
          v-for="hero in dcHeros"
          :key="hero.name"
        >
          <p>{{ hero.name }}</p>
          <button @click="removeHero(hero.name)">x</button>
        </li>
      </ul>
      <form @submit.prevent="addHero" action="">
        <input
          class="border mr-3 rounded"
          placeholder="Add new hero"
          type="text"
          name=""
          v-model="dcHero"
          ref="newHeroRef"
        />
        <button class="bg-gradient-to-r bg-red-600 text-white" type="submit">
          Add
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const dcHero = ref("");
    const fname = "My";
    const lname = "Nameu";
    const newHeroRef = ref("");

    const dcHeros = ref([
      { name: "one" },
      { name: "Two" },
      { name: "Thre" },
      { name: "Four" },
    ]);

    function removeHero(heroName) {
      dcHeros.value = dcHeros.value.filter(function (hero) {
        return heroName != hero.name;
      });
    }

    function addHero() {
      if (dcHero.value != "") {
        dcHeros.value.unshift({ name: dcHero.value });
        dcHero.value = "";
      }
    }

    onMounted(() => newHeroRef.value.focus());

    return { dcHeros, dcHero, lname, fname, removeHero, addHero, newHeroRef };
  },
};
</script>

<style></style>
