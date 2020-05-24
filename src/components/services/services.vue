<template>
  <div class="services">
    <Slider :slickOptions="slickOptions">
      <div class="service" v-for="service in services" :key="service.title">
        <div class="service__container">
          <div class="service__image" href="./../../assets/images/services/webdevelopment.svg">
            <img :src=" require('../../assets/images/services/' + service.image)" alt />
          </div>
          <div class="service__content">{{service.title}}</div>
        </div>
      </div>
    </Slider>
  </div>
</template>
<script>
// import Slick from "vue-slick";
import Slider from "../common/slider";

export default {
  name: "Services",

  components: { Slider },
  data() {
    return {
      services: [
        {
          image: "webdevelopment.svg",
          title: "Веб-разработка"
        },
        {
          image: "integrations.svg",
          title: "Интеграция сайтов с CRM и ERP"
        },
        {
          image: "monitoring.svg",
          title: "Техподдержка и мониторинг"
        },
        {
          image: "parcers.svg",
          title: "Парсеры"
        },
        {
          image: "highload.svg",
          title: "Сложные и нетиповые решения"
        }
      ],
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        customPaging: function() {
          return '<div class="slick-dot"/>';
        },
        prevArrow: '<div class="slick-prev"/>',
        nextArrow: '<div class="slick-next"/>'
      }
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  }
};
</script>

<style lang="scss" >
.services {
  height: 100vh;
   .slick-list {
    width: calc(100vw - 180px);
  }
  .slick-slide {
    height: calc(100vh - 120px);
  }
}
.service {
  width: 100%;
  height: 100%;
  &__container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
    height: inherit;
  }
  &__image {
    width: 65%;
    text-align: center;
  }
  &__content {
    width: 35%;
    text-align: left;
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1.5;
    padding: 0 4rem 0 0;
  }
 
}
</style>