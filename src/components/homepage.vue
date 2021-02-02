<template>
  <div class="homepage">
    <div class="homepage__logo">
      <img alt="Rubium logo" src="../assets/images/main_logo.svg">
    </div>
    <div class="homepage__text">
      <h1 class="title">Rubium</h1>
      <p  class="tagline">Разработка сайтов<br/> и сложных интернет-решений</p>  
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
  @include for-tablet {
    flex-direction: column;
  }
  &__logo {
    @include for-tablet {
      max-width: 80%;
    }
    img {
      width: 100%;
    }
  }
  &__text {
    text-align: left;
    margin-left: 4rem;
    @include for-tablet {
      text-align: center; 
      margin-left: 0;
    }
  }
}
.title {
  font-size: 14rem;
  font-family: 'Poiret One', cursive;
  text-transform: uppercase;
  margin: 0;
  @include for-mobile {
    font-size: 5rem;
  }
}
.tagline{
  font-size: 2.8rem;
    @include for-mobile {
    font-size: 1.8rem;
  }
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