<template>
  <div class="header">
    <div class="menu-icon">
      <img alt="menu" src="../assets/icon-menu.svg">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    width: 100%;
}
.menu-icon {
    position: absolute;
    right: 0;
}

</style>