<template>
  <div class="page services-page ">
    <div class="page__container services-page__container">
      <h2 class="page__title services-page__title">Услуги</h2>
      <div class="services-page__wrapper">
        <div class="services-menu">
          <div
            class="services-menu__item"
            v-for="service in SERVICES"
            :key="service.id"
            :class="[
              { active: SELECTED_SERVICE && service.id == SELECTED_SERVICE.id },
              service.style,
            ]"
            @click="SELECT_SERVICE(service)"
          >
            {{ service.title }}
          </div>
        </div>
        <div class="service">
          <div class="service__content" v-if="SELECTED_SERVICE">
            <p v-for="item in SELECTED_SERVICE.text" :key="item.p">
              {{ item.p }}
            </p>
          </div>
          <div class="service__image">
            <div
              class="service-img"
              v-if="SELECTED_SERVICE"
              :class="SELECTED_SERVICE.style"
            >
              <img
                :src="
                  require('../../assets/images/services/' +
                    SELECTED_SERVICE.image)
                "
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Services",

  data() {
    return {
      activeId: 0,
    };
  },
  computed: {
    ...mapGetters(["SERVICES", "SELECTED_SERVICE"]),
  },

  methods: {
    ...mapActions(["GET_SERVICES_FROM_API", "SELECT_SERVICE"]),
  },
  mounted() {
    this.GET_SERVICES_FROM_API();
  },
};
</script>

<style lang="scss" >
.services-page {
  height: 100vh;
  @include bgGradient(transparent, $blue-light, 135deg);
  @include for-mobile {
    height: auto;
  }
  &__container {
    width: 80%;
    max-width: 1360px;
    margin: 6rem auto;
    position: relative;
    @include for-mobile {
      width: 100%;
      margin: 0;
    }
  }
  &__wrapper {
    display: flex;
    margin-top: 8rem;
    @include for-mobile {
      flex-direction: column;
    }
  }
}
.services-menu {
  position: relative;
  width: 380px;
  display: flex;
  flex-direction: column;

  &__item {
    font-size: 32px;
    cursor: pointer;
    position: relative;
    color: $black;
    opacity: 0.5;
    font-weight: 600;
    margin: 0 0 28px;
    transition: all 1s;
    &.active,
    &:hover {
      opacity: 1;
      transform: translateX(-40px);
    }
    &:before {
      content: "";
      position: absolute;
      left: -28px;
      top: 0;
      bottom: 0;
      width: 8px;
      opacity: 0;
      transition: opacity 1s;
    }
    &.active:before {
      opacity: 1;
    }
    &.pink:before {
      background: $pink-middle;
    }
    &.blue:before {
      background: $blue-middle;
    }
    &.purple:before {
      background: $purple-middle;
    }
    &.orange:before {
      background: $orange-middle;
    }
    &.green:before {
      background: $green-middle;
    }
    @include for-mobile {
      &:before {
        bottom: -8px;
        height: 4px;
        width: 100%;
        left: 0;
        top: 100%;
      }
    }
  }
  @include for-mobile {
    flex-direction: row;
    width: auto;
    overflow-x: scroll;
    &__item {
      font-size: 1.4rem;
      width: auto;
      min-width: 168px;
      padding: 0 2rem 8px;
      margin-bottom: 10px;
      &:active,
      &:hover {
        transform: none;
      }
    }
  }
}

.service {
  max-height: calc(100vh - 35rem);
  height: auto;
  flex: 1;
  display: block;
  background: #ffffff;
  display: flex;
  padding: 8rem 4rem;
  &__content {
    width: 50%;
    text-align: left;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5;
    padding: 0 4rem 0 0;
    box-sizing: border-box;
    p {
      margin-bottom: 4rem;
    }
  }
  &__image {
    width: 50%;
    position: relative;
  }
  @include for-mobile {
    flex-direction: column-reverse;
    max-height: 100%;
    padding: 4rem 10vw;
    margin-bottom: 8rem;
    box-shadow: none;
  }
}

.service-img {
  width: 358px;
  height: 358px;
  background: url("./../../assets/images/frame.svg") no-repeat 0 0 / contain
    transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @include for-mobile {
    width: 80vw;
    height: 80vw;
  }
  img {
    max-height: 90%;
    max-width: 90%;

    object-fit: fill;
    width: auto;
    height: auto;
  }

  // &::before {
  //   position: absolute;
  //   // content: "";
  //   top: 0;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   transform: translate(40px, 40px);
  //   // z-index: -1;
  //   opacity: 0.25;
  //   transition: background (1s);
  // }
  &::after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: url("./../../assets/images/frame.svg") no-repeat 0 0 / contain;
  }
  &.pink:before {
    background: $pink-middle;
  }
  &.blue:before {
    background: $blue-middle;
  }
  &.purple:before {
    background: $purple-middle;
  }
  &.orange:before {
    background: $orange-middle;
  }
  &.green:before {
    background: $green-middle;
  }
  @include for-mobile {
    &:before {
      content: none;
    }
  }
}
.service-item {
  width: 30vh;
  height: 30vh;
  transition: background 0.7s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @include for-tablet {
    width: 20vw;
    height: 20vw;
  }
  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    transform: scale(0.9);
    transition: transform 0.7s;
  }
  &:hover > img {
    transform: scale(1);
  }
  &:first-of-type {
    margin-left: 1px;
    @include for-tablet {
      margin-left: 0;
    }
  }
  &.pink {
    background: $pink-middle;
    &:hover,
    &.active {
      background: $pink-dark;
    }
  }
  &.blue {
    background: $blue-middle;
    &:hover,
    &.active {
      background: $blue-dark;
    }
  }
  &.purple {
    background: $purple-middle;
    &:hover,
    &.active {
      background: $purple-dark;
    }
  }
  &.orange {
    background: $orange-middle;
    &:hover,
    &.active {
      background: $orange-dark;
    }
  }
  &.green {
    background: $green-middle;
    &:hover,
    &.active {
      background: $green-dark;
    }
  }
}

.service {
  // width: 100%;
  // height: 100%;
  // padding-left: 6rem;
  // box-sizing: border-box;
  @include for-tablet {
    // padding: 0 10vw;
  }
  &__container {
    display: flex;
    flex-direction: row;

    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    height: inherit;
    @include for-tablet {
      flex-direction: column;
    }
  }

  &__content {
    // width: 40vw;
    // text-align: left;
    // font-size: 2.8rem;
    // font-weight: 500;
    // line-height: 1.5;
    // padding: 0 4rem 0 0;
    @include for-tablet {
      width: 100%;
      padding: 0;
      font-size: 2.4rem;
    }
    @include for-mobile {
      font-size: 1.8rem;
    }
  }
}
</style>