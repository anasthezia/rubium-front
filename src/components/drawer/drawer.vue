<template>
  <div class="drawer">
    <div class="drawer__content">
      <div class="drawer__container">
        <MainMenu />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "./main-menu";
import Footer from "./footer";
export default {
  name: "drawer",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    console.log("start animation");
  },
  beforeDestroy() {
    console.log("start destroy");
  },
  components: {
    MainMenu,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.drawer {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background: $white;
  padding: 14rem;
  box-sizing: border-box;
  z-index: 1000;
  box-shadow: -10px 0 40px #4343455c;
  @include for-mobile {
    padding: 8rem 6rem;
  }
    @include for-tablet {
    padding: 8rem 6rem;
  }
  &__container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: flex-start;
    @include for-mobile {
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
}
</style>