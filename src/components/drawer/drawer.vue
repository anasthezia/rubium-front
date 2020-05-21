<template>
  <div class="drawer">
    <div class="drawer__close" @click="closeDrawer"></div>
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
  methods: {
    closeDrawer() {
      this.$emit("closeDrawer");
    }
  },
  components: {
    MainMenu,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.drawer {
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  background: #ffffff;
  padding: 140px;
  position: fixed;
  box-sizing: border-box;
  z-index: 1000;
  &__close {
    position: absolute;
    right: 58px;
    top: 68px;
    width: 52px;
    height: 40px;
    background: url("./../../assets/images/close-draver-btn.svg") no-repeat 0 0
      transparent;
  }
  &__container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: flex-start;
  }
}
</style>