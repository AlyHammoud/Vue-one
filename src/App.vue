<template>
  <div class="w-full">
    <div class="flex">
      <div class="mx-auto">
        <p class="text-2xl text-red-500 mb-10">{{ fname }} {{ lname }}</p>
        <ul>
          <li class="mb-5 flex justify-between" v-for="hero in dcHeros" :key="hero.name">
            <p>{{ hero.name }}</p>
            <button @click="removeHero(hero.name)">x</button>
          </li>
        </ul>
        <form @submit.prevent="addHero" action="">
          <input class="border mr-3 rounded" placeholder="Add new hero" type="text" name="" v-model="dcHero">
          <button class="bg-gradient-to-r bg-red-600 text-white" type="submit">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default{
  data(){
    return{
      dcHero: "",
      fname: "My",
      lname: "Nameu",
      dcHeros:[
        {name:"one"},
        {name:"Two"},
        {name:"Thre"},
        {name:"Four"},
      ]
    }
  },

  methods:{
    addHero: function(){
      if(this.dcHero != ""){
        this.dcHeros.unshift({name : this.dcHero});
        this.dcHero = "";
      }
    },

    removeHero: function(heroName){
      this.dcHeros = this.dcHeros.filter(function(hero){
        return heroName != hero.name
      });
    },
  }
}
</script>