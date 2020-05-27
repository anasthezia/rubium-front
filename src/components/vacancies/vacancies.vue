

<template>
  <div class="vacancies-page page">
    <div class="vacancies-page__container">
      <h2 class="page__title vacancies-page__title">Вакансии</h2>
      <div class="vacancies-list">
        <Vacancy
          class="vacancies-list__item"
          :class="item.style"
          v-for="item in VACANCIES"
          :key="item.title"
          :vacancy_data="item"
          @sentVacancy="openPopup"
        />
      </div>
    </div>
    <Popup v-if="isPopupOpen" @closePopup="closePopup" popupTitle="Отклик на вакансию">
      <vacancyForm :selectedVacancy="selectedVacancy" />
    </Popup>
  </div>
</template>

<script>
import Popup from "../../components/common/popup";
import vacancyForm from "../../components/forms/vacancy-form";
import Vacancy from "./vacancy";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Vacancies",
  components: {
    Popup,
    vacancyForm,
    Vacancy
  },
  data: function() {
    return {
      isPopupOpen: false,
      selectedVacancy: ""
    };
  },
  computed: {
    ...mapGetters([
      'VACANCIES'

    ])
  },
  methods: {
    ...mapActions(["GET_VACANCIES_FROM_API"]),
    openPopup(data) {
      this.isPopupOpen = true;
      this.selectedVacancy = data;
    },
    closePopup() {
      this.isPopupOpen = false;
      this.selectedVacancy = "";
    }
  },
  mounted() {
    this.GET_VACANCIES_FROM_API();
  }
};
</script>

<style lang="scss" scoped>
.vacancies-page {
  min-height: 100vh;
  background: url("../../assets/images/bg.png") no-repeat 0 0 / cover
    transparent;
  background-attachment: fixed;
  padding: 2rem 0;
  &__title {
    @include colorGradient(#1b9f89, #55d999, 45deg);
  }

  &__container {
    width: 80%;
    max-width: 1360px;
    margin: 6rem auto;
  }
}
.vacancies-list {
  list-style: none;
  width: 1024px;
  margin: 0 auto;

  &__item {
    margin-bottom: 4rem;
  }
}
.card-header {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>