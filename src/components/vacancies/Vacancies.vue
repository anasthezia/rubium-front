

<template>
  <div class="vacancies-page page">
    <div class="vacancies-page__container">
      <h2 class="page__title vacancies-page__title">Вакансии</h2>
      <div class="vacancies-list">
        <Vacancy
          class="vacancies-list__item"
          :class="item.style"
          v-for="item in vacancies"
          :key="item.title"
          :vacancy_data="item"
          @sentVacancy="openPopup"
        />
      </div>
    </div>
    <Popup v-if="isPopupOpen" @closePopup="closePopup" popupTitle="Отклик на вакансию">
      <vacancyForm :selectedVacancy=selectedVacancy />
    </Popup>
  </div>
</template>

<script>
import Popup from "../../components/common/popup";
import vacancyForm from "../../components/forms/vacancy-form";
import Vacancy from "./vacancy";

export default {
  data: function() {
    return {
      isPopupOpen: false,
      selectedVacancy: '',
      vacancies: [
        {
          title: "Junior frontend developer",
          tags: ["html", "css", "js", "webpack", "gulp", "git"],
          style: "style-1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi."
        },
        {
          title: "Middle backend developer",
          tags: ["php", "laravel", "MySql", "docker", "Postgress", "git"],
          style: "style-2",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi."
        },
        {
          title: "Sales manager",
          tags: ["english", "переговоры", "деловая переписка", "продажи"],
          style: "style-3",
          content:
            "<div class='1111'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.</div>"
        }
      ]
    };
  },
  name: "Vacancies",
  computed: {},
  methods: {
    openPopup(data) {
      this.isPopupOpen = true;
      this.selectedVacancy = data
    },
    closePopup() {
      this.isPopupOpen = false;
      this.selectedVacancy = ""
    },
    showChild(data) {
      console.log(data);
    }
  },
  components: {
    Popup,
    vacancyForm,
    Vacancy
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
    @include colorGradient( #1B9F89, #55D999, 45deg);
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