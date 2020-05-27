<template>
  <nav class="main-menu">
    <ul class="menu">
      <li class="menu__item">
        <a class="menu__link" href="#">О компании</a>
      </li>
      <li class="menu__item">
        <router-link class="menu__link" :to="{name: 'services'}">Услуги</router-link>
      </li>
      <li class="menu__item">
        <router-link class="menu__link" :to="{name: 'portfolio'}">Портфолио</router-link>
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
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  &__link {
    color: #434345;
    text-decoration: none;
    font-size: 6.4rem;
    line-height: 1;
    font-weight: 500;
    padding: 0;
    margin: 0 0 6.4rem;
    display: block;
    opacity: 0.8;
    transition: all 0.5s;
    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      opacity: 1;
      transform: translateX(12px);
    }
  }
}
</style>