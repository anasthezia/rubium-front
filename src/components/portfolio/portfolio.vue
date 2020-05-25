<template>
  <div class="portfolio-page page">
    <div class="portfolio-page__container">
      <h2 class="portfolio-page__title page__title">Портфолио</h2>
      <div class="portfolio-page__filters filters">фильтры</div>
    </div>
    <Slider :slickOptions="slickOptions">
      <Project 
      v-for="project in projects" 
      :key="project.title" 
      :project=project />
    </Slider>
  </div>
</template>

<script>
import Slider from "../common/slider";
import Project from "./project";
export default {
  name: "portfolo",
  components: { Slider, Project },

  data: function() {
    return {
      projects: [
        {
          title: "iGuides",
          image: "iguides.png",
          tags: [
            "bitrix",
            "frontend",
            "backend",
            "медиаиздание",
            "новостной портал"
          ],
          date: "2016"
        },
        {
          title: "Digger",
          image: "digger.png",
          tags: [
            "bitrix",
            "frontend",
            "backend",
            "медиаиздание",
            "новостной портал"
          ],
          date: "2016"
        },
        {
          title: "Yandex maps plugin",
          image: "ya.png",
          tags: [
            "bitrix",
            "frontend",
            "backend",
            "медиаиздание",
            "новостной портал"
          ],
          date: "2016"
        },
        {
          title: "Qood",
          image: "qood.png",
          tags: [
            "bitrix",
            "frontend",
            "backend",
            "медиаиздание",
            "новостной портал"
          ],
          date: "2016"
        }
      ],
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
  }
};
</script>

<style lang="scss">
.portfolio-page {
  height: 100vh;
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
  .slick-list {
    height: calc(100vw / 3 - 2rem);
  }

  .slick-slide {
    height: inherit;
    margin: 0 1rem;
  }
}
</style>