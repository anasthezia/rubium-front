<template>
  <div class="services">
    <h2>{{ SERVICES[0] }} qqqqqqqqqqq</h2>
    <div class="services-list">
      <div class="services__row">
        <div
          class="service-item"
          v-for="service in SERVICES"
          :key="service.id"
          :class="[service.style, { active: service.id == SERVICES[active].id }]"
          @click="active=SELECT_SERVICE(service.id)"
        >
          <img
            :src="require('../../assets/images/services/' + service.image)"
            alt
          />
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
      active: 0
    };
  },
  computed: {
    ...mapGetters(["SERVICES", "SELECTED_SERVICE"]),
    selectedId() {
      return this.$store.getters;
    },
  },

  methods: {
    ...mapActions([
      "GET_SERVICES_FROM_API",
      "SELECT_SERVICE",
    ])
  },
  mounted() {
    this.GET_SERVICES_FROM_API();
  },
};
</script>

<style lang="scss" >
.services {
  height: 100vh;
}
.services-list {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 90vh;
  height: 60vh;
}
.services__row {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  flex-direction: row;
}
.service-item {
  width: 30vh;
  height: 30vh;
  transition: background 0.7s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transform: scale(0.9);
    transition: transform 0.7s;
  }
  &:hover > img {
    transform: scale(1);
  }
  &:first-of-type {
    margin-left: 1px;
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
  width: 100%;
  height: 100%;
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
  &__image {
    width: 65%;
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include for-tablet {
      width: 80%;
    }
    @include for-mobile {
      width: 100%;
    }
    img {
      max-width: 100%;
      height: fit-content;
    }
  }
  &__content {
    width: 35%;
    text-align: left;
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1.5;
    padding: 0 4rem 0 0;
    @include for-tablet {
      width: 100%;
      padding: 0;
      text-align: center;
      font-size: 2.4rem;
    }
    @include for-mobile {
      font-size: 1.8rem;
    }
  }
}
</style>