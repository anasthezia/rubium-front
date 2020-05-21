<template>
  <div class="header">
    <div class="menu-icon" @click="openDrawer">
      <img alt="menu" src="../assets/images/icon-menu.svg" />
    </div>
    <Drawer v-if="isDrawerOpen" @closeDrawer="closeDrawer" />
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
    openDrawer() {
      this.isDrawerOpen = true;    },
    closeDrawer() {
      this.isDrawerOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
}
.menu-icon {
  position: absolute;
  right: 58px;
  top: 68px;
  // z-index: 1000;
}
</style>