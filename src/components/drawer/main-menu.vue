<template>
  <nav class="main-menu">
    <ul class="menu">
      <li class="menu__item">
        <a class="menu__link" href="#">О компании</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#">Услуги</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#">Портфолио</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="#">Блог</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "mainMenu",
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss">
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  &__link {
    color: #434345 !important;
    font-size: 6.4rem;
    line-height: 1;
    font-weight: 500;
    padding: 0;
    margin: 0 0 6.4rem;
    display: block;
    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
    }
  }
}
</style>