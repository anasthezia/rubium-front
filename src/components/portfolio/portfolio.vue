<template>
  <div class="portfolio-page page">
    <div class="portfolio-page__container">
      <h2 class="portfolio-page__title page__title">Портфолио</h2>
      <div class="portfolio-page__filters filters">фильтры</div>
    </div>
    <Slider :slickOptions="slickOptions">
      <div class="project" v-for="project in projects" :key="project.title">
        <div class="project__image">
          <img :src=" require('../../assets/images/projects/' + project.image)" alt />
        </div>
      </div>
    </Slider>
  </div>
</template>

<script>
import Slider from "../common/slider";
export default {
  name: "portfolo",
  components: { Slider },

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
    height: calc(100vw/3 - 2rem);
  }

  .slick-slide {
    height: inherit;
    margin: 0 1rem;
  }
}
.project {
  display: flex;
  flex-wrap: nowrap;
  background: $white;
  height: inherit;
  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
  }
}
</style>