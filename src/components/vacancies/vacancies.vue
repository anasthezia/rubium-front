

<template>
  <div class="vacancies-page page">
    <div class="page__container vacancies-page__container">
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
    <Popup
      v-if="isPopupOpen"
      @closePopup="closePopup"
      popupTitle="Отклик на вакансию"
    >
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
    Vacancy,
  },
  data: function () {
    return {
      isPopupOpen: false,
      selectedVacancy: "",
    };
  },
  computed: {
    ...mapGetters(["VACANCIES"]),
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
    },
  },
  mounted() {
    this.GET_VACANCIES_FROM_API();
  },
};
</script>

<style lang="scss" scoped>
.vacancies-page {
  min-height: 100vh;
  padding: 2rem 0;
  @include bgGradient(transparent, $green-light, 135deg);

  &__container {
    width: 80%;
    max-width: 1360px;
    margin: 6rem auto;
    @include for-mobile {
      width: 100vw;
    }
  }
}
.vacancies-list {
  list-style: none;
  margin: 0 auto;
  @include for-desktop {
    width: 1024px;
  }

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