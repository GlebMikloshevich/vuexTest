<template>
  <div id="app">

    <p>{{getClicks}}</p>
    <button @click="addOne">+1</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    getClicks(){
      return this.$store.getters.getClicks
    }
  },
  methods: {
    addOne(){
      this.$store.dispatch('updateNumber');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    color: #2c3e50;
  margin-top: 60px;
}
button{
  width: 100px;
  height: 30px;
  border: 2px solid #2c3e50;
  border-radius: 8px;
}

p{
  width: 140px;
  height: 40px;
  margin: 10px auto;
  line-height: 45px;
  border: 2px solid #2c3e50;
  background-color: ghostwhite;
  border-radius: 8px;
  text-align: center;
  vertical-align: middle;
}
</style>
