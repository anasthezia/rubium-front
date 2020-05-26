<template>
  <div class="portfolio-page page">
    <div class="portfolio-page__container">
      <h2 class="portfolio-page__title page__title">Портфолио</h2>
      <div class="portfolio-page__filters filters">фильтры</div>
    </div>

    <div class="projects-list">
      <Project
        class="projects-list__item"
        v-for="project in PROJECTS"
        :key="project.title"
        :project="project"
      />
    </div>
    <Slider :slickOptions="slickOptions">
      <!-- <Project class="projects-list__item" v-for="project in PROJECTS" :key="project.title" :project="project" /> -->
    </Slider>
  </div>
</template>

<script>
import Slider from "../common/slider";
import Project from "./project";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "portfolo",
  components: {
    Slider,
    Project
  },

  data: function() {
    return {
      slider: null,

      slickOptions: {
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        dots: false,
        customPaging: function() {
          return '<div class="slick-dot"/>';
        },
        prevArrow: '<div class="slick-prev"/>',
        nextArrow: '<div class="slick-next"/>'
      }
    };
  },
  methods: {
    ...mapActions(["GET_PROJECTS_FROM_API"])
  },
  computed: {
    ...mapGetters(["PROJECTS"])
  },
  mounted() {
    this.GET_PROJECTS_FROM_API();
    this.slider = this(".projects-list").slick({
      animation: true
    });
  }
};
</script>

<style lang="scss">
.portfolio-page {
  min-height: 100vh;
  background: url("../../assets/images/portfolio-bg.png") no-repeat 0 0 / cover
    transparent;
  background-attachment: fixed;
  padding: 2rem 0;
  &__title {
    @include colorGradient(#0026ca, #448aff, 45deg);
  }
  &__container {
    width: 80%;
    max-width: 1360px;
    margin: 6rem auto;
  }
  .projects-list {
    display: flex;
    flex-wrap: wrap;
    // width: 900px;
    // overflow-x: scroll;
    &__item {
      width: 30vw;
      height: 30vw;
      margin: 40px 20px;
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