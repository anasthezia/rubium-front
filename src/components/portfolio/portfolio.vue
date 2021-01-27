<template>
  <div class="portfolio-page page">
    <div class="portfolio-page__container">
      <h2 class="portfolio-page__title page__title">Портфолио</h2>
    </div>

    <div class="projects-list">
      <Project
        class="projects-list__item"
        v-for="project in PROJECTS"
        :key="project.title"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import Project from "./project";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "portfolo",
  components: {
    Project,
  },

  data: function () {
    return {
      slider: null,

      slickOptions: {
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        dots: false,
        customPaging: function () {
          return '<div class="slick-dot"/>';
        },
        prevArrow: '<div class="slick-prev"/>',
        nextArrow: '<div class="slick-next"/>',
      },
    };
  },
  methods: {
    ...mapActions(["GET_PROJECTS_FROM_API"]),
  },
  computed: {
    ...mapGetters(["PROJECTS"]),
  },
  mounted() {
    this.GET_PROJECTS_FROM_API();
  },
};
</script>

<style lang="scss">
.portfolio-page {
  min-height: 100vh;
  background: #C5CAE9;
  background-attachment: fixed;
  padding: 2rem 0;
  &__title {
    background: url("../../assets/images/h-icon-1.png") no-repeat 0 0
      transparent;
    margin-top: 12rem;
    color: #1565c0;
    padding: 10px 0 10px 164px;
    line-height: 1;
  }
  &__container {
    width: 80%;
    max-width: 1360px;
    margin: 6rem auto;
  }
  .projects-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: center;
    &__item {
      width: 30vw;
      height: 30vw;
      margin: 40px 20px;
      @include for-tablet {
        width: calc(50vw - 40px);
        height: calc(50vw - 40px);
      }
      @include for-mobile {
        width: 90vw;
        height: 90vw;
      }
    }
  }
  .slick-list {
    height: calc(100vw / 3 - 2rem);
  }

  .slick-slide {
    height: inherit;
    margin: 0 1rem;
  }
}
</style>