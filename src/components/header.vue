<template>
  <div class="header">
    <div class="header__logo" v-if="!$route.meta.hideLogo">
      <router-link :to="{name: 'main'}">
        <img alt="Rubium logo" src="../assets/images/header-logo.svg" />
      </router-link>
    </div>
    <div class="menu-button" :class="{ opened: DRAWER_OPEN }" @click="TOGGLE_DRAWER">
      <i class="menu-button__line"></i>
      <i class="menu-button__line"></i>
      <i class="menu-button__line"></i>
    </div>
    <transition name="drawer">
      <Drawer v-if="DRAWER_OPEN" />
    </transition>
  </div>
</template>

<script>
import Drawer from "../components/drawer/drawer";
import { mapGetters, mapActions } from "vuex";

export default {
  data: function () {
    return {};
  },
  name: "Header",
  components: {
    Drawer,
  },
  methods: {
    ...mapActions(["TOGGLE_DRAWER"]),
  },
  computed: {
    ...mapGetters(["DRAWER_OPEN"]),
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  position: fixed;
  flex-wrap: nowrap;
  z-index: 1;
  background: rgba($white, 30%);
  &__logo {
    margin: 40px 0 40px 60px;
    height: 40px;
    img {
      height: 100%; 
      width: auto;
    }
    @include for-tablet {
      margin: 20px 0 20px 40px;
    }
    @include for-mobile {
      margin: 12px 0 12px 20px;
          width: 182px;

    }
  }
}
.menu-button {
  position: fixed;
  right: 58px;
  top: 48px;
  height: 24px;
  width: 40px;
  z-index: 1002;
  cursor: pointer;
  // background: $white;
  @include for-tablet {
    top: 32px;
  }
  @include for-mobile {
    right: 20px;
    top: 20px;
  }
  &__line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: $black;
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
.drawer-enter-active {
  animation: push-in 0.75s ease;
}

.drawer-leave-active {
  animation: push-in 0.5s reverse ease-out;
}
@keyframes push-in {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>