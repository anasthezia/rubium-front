<template>
  <nav class="main-menu">
    <ul class="menu">
      <li class="menu__item">
        <a class="menu__link" href="#">О компании</a>
      </li>
      <li class="menu__item" @click="CLOSE_DRAWER">
        <router-link class="menu__link" :to="{name: 'services'}">Услуги</router-link>
      </li>
      <li class="menu__item" @click="CLOSE_DRAWER">
        <router-link class="menu__link" :to="{name: 'portfolio'}">Портфолио</router-link>
      </li>
      <li class="menu__item" ref="menu-link">
        <a class="menu__link" href="#">Блог</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "mainMenu",
  data() {
    return {};
  },
  computed: {},
  methods: { ...mapActions(["CLOSE_DRAWER"]) },
};
</script>

<style lang="scss">
.main-menu {
  display: block;
  margin-bottom: 4rem;
  @include for-mobile {
    border-bottom: 1px solid lighten($black, 50%);
    width: 100%;
  }
}
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  &__link {
    color: $black;
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
    @include for-mobile {
      font-size: 2.8rem;
      margin-bottom: 2rem;
    }
        @include for-tablet {
      font-size: 4.2rem;
      margin-bottom: 2rem;
    }
  }
}
</style>