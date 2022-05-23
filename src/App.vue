<template>
  <h1>{{ title }}</h1>
  <p>{{ name }}</p>
  <div v-html="body"></div>
</template>


<script>
export default{
  data(){
    return{
      title : "Title1",
      name : "Name",
      body : "<h1>Here us Body</h1>",
    }
  }
}

</script>