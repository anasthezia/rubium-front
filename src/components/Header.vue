<template>
  <div class="header">
    <div class="menu-button" :class="{ opened: isDrawerOpen }" @click="toggleDrawer">
      <i class="menu-button__line"></i>
      <i class="menu-button__line"></i>
      <i class="menu-button__line"></i>
    </div>
    <Drawer v-if="isDrawerOpen"  />
  </div>
</template>

<script>
import Drawer from "../components/drawer/drawer";
export default {
  data: function() {
    return {
      isDrawerOpen: false
    };
  },
  name: "Header",
  components: {
    Drawer
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  top: 0;
}
.menu-button {
  position: fixed;
  right: 58px;
  top: 68px;
  height: 24px;
  width: 40px;
  z-index: 1002;
  cursor: pointer;
  background: #fff;
  &__line {
    position: absolute;
    width: 100%;
    height: 3px;
    background: #0e2783;
    right: 0;
    transition: all 0.25s;
    transform-origin: right;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
    }
    &:nth-child(3) {
      top: 100%;
    }
  }
  &.opened {
    .menu-button__line {
      top: 50%;
      &:nth-child(1) {
        transform: rotate(35deg);
        width: 50%;
      }
      &:nth-child(3) {
        transform: rotate(-35deg);
        width: 50%;
      }
    }
  }
}
</style>