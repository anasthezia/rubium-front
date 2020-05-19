<template>
  <div class="homepage">
    <div class="homepage__logo">
      <img alt="Rubium logo" src="../assets/main_logo.svg">
    </div>
    <div class="homepage__text">
      <h1 class="title">Rubium</h1>
      <p  class="tagline">Разработка сайтов и сложных интернет-решений</p>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.homepage {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center; 
  align-items: center;
  height: 100vh;
  
  &__text {
    text-align: left;
    margin-left: 4rem;
  }
}
.title {
  font-size: 10rem;
}
.tagline{
  font-size: 2.8rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>