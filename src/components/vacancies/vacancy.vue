<template>
  <div class="vacancy" :class="{ opened: isCardOpen }">
    <div class="vacancy__header" @click="toggleCard">
      <div class="vacancy__header-content">
        <h4 class="vacancy__title">{{vacancy_data.title}}</h4>
        <ul class="tags-list">
          <li
            class="tags-list__item tag"
            v-for="tag in vacancy_data.tags"
            :key="tag"
            :class="vacancy_data.style"
          >{{tag}}</li>
        </ul>
      </div>
      <div class="vacancy__toggle-btn toggle-btn">
        <i class="toggle-btn__line"></i>
        <i class="toggle-btn__line"></i>
      </div>
    </div>
    <div class="vacancy__body">
      <div class="vacancy__content" v-html="vacancy_data.content"></div>
      <div class="vacancy__actions">
        <button class="btn btn-1" :class="vacancy_data.style" @click="openPopup">Откликнуться</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vacancy",
  props: {
    vacancy_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data: function () {
    return {
      isCardOpen: false,
    };
  },
  methods: {
    toggleCard() {
      this.isCardOpen = !this.isCardOpen;
    },
    openPopup() {
      this.$emit("sentVacancy", this.vacancy_data.title);
    },
  },
};
</script>

<style lang="scss" scoped>
.vacancy {
  background: $white;
  padding: 4rem;
  box-sizing: border-box;
  @include for-mobile {
    padding: 2.8rem;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__title {
    margin: 0 0 1.6rem;
    font-size: 3.6rem;
    padding: 0;
    @include for-mobile {
      font-size: 2.4rem;
    }
    @include for-tablet {
      font-size: 3.2rem;
    }
  }
  &__content {
    font-size: 1.6rem;
    line-height: 1.5;
    margin: 2rem 0;
  }
  &__body {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }
  &__toggle-btn {
    transform: rotate(0);
    transition: all 0.25s ease-in-out;
  }
  &.opened &__toggle-btn {
    transform: rotate(180deg);
  }
  &.opened &__body {
    max-height: 700px;
    opacity: 1;
  }
  &__actions {
    display: flex;
    justify-content: space-around;
    margin: 4rem 0 0;
  }
}

.btn {
  border-radius: 2px;
  border-width: 1px;
  padding: 8px 16px;
  font-size: 1.4rem;
  text-transform: uppercase;
  border-style: solid;
  display: flex;
  cursor: pointer;
  background: none;
  margin: 20px auto;
  &.blue {
    color: #0e2783;
    border-color: #0e2783;
  }
  &.purple {
    color: #6a1b9a;
    border-color: #6a1b9a;
  }
  &.green {
    color: #00903a;
    border-color: #00903a;
  }
}
.toggle-btn {
  width: 40px;
  height: 40px;
  position: relative;
  @include for-mobile {
    width: 32px;
    height: 32px;
  }
  &__line {
    position: absolute;
    height: 50%;
    width: 3px;
    background: #0e2783;
    transform-origin: bottom;
    top: 25%;

    &:nth-child(1) {
      transform: rotate(45deg);
      left: calc(50% - 2px);
    }
    &:nth-child(2) {
      transform: rotate(-45deg);
      right: calc(50% - 2px);
    }
  }
}
</style>