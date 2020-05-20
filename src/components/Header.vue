<template>
  <div class="header">
    <div class="menu-icon" @click="openDraver">
      <img alt="menu" src="../assets/icon-menu.svg" />
    </div>
    <Draver v-if="isDraverOpen" @closeDraver="closeDraver" />
  </div>
</template>

<script>
import Draver from "../components/draver/draver";
export default {
  data: function() {
    return {
      isDraverOpen: false
    };
  },
  name: "Header",
  components: {
    Draver
  },
  methods: {
    openDraver() {
      this.isDraverOpen = true;
      console.log("2222222222");
    },
    closeDraver() {
      this.isDraverOpen = false;
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