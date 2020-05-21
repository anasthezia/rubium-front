<template>
  <div class="services">
    <slick
      ref="slick"
      :options="slickOptions"
      @afterChange="handleAfterChange"
      @beforeChange="handleBeforeChange"
      @breakpoint="handleBreakpoint"
      @destroy="handleDestroy"
      @edge="handleEdge"
      @init="handleInit"
      @reInit="handleReInit"
      @setPosition="handleSetPosition"
      @swipe="handleSwipe"
      @lazyLoaded="handleLazyLoaded"
      @lazyLoadError="handleLazeLoadError"
    >
      <div class="service" v-for="service in services" :key="service.title">
        <div class="service__container">
          <div class="service__image" href="./../../assets/images/services/webdevelopment.svg">
            <img :src=" require('../../assets/images/services/' + service.image)" alt />
          </div>
          <div class="service__content">{{service.title}}</div>
        </div>
      </div>
    </slick>
  </div>
</template>

<script>
import Slick from "vue-slick";
export default {
  name: "Services",

  components: { Slick },
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
    },

    handleAfterChange(event, slick, currentSlide) {
      console.log("handleAfterChange", event, slick, currentSlide);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      console.log("handleBeforeChange", event, slick, currentSlide, nextSlide);
    },
    handleBreakpoint(event, slick, breakpoint) {
      console.log("handleBreakpoint", event, slick, breakpoint);
    },
    handleDestroy(event, slick) {
      console.log("handleDestroy", event, slick);
    },
    handleEdge(event, slick, direction) {
      console.log("handleEdge", event, slick, direction);
    },
    handleInit(event, slick) {
      console.log("handleInit", event, slick);
    },
    handleReInit(event, slick) {
      console.log("handleReInit", event, slick);
    },
    handleSetPosition(event, slick) {
      console.log("handleSetPosition", event, slick);
    },
    handleSwipe(event, slick, direction) {
      console.log("handleSwipe", event, slick, direction);
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      console.log("handleLazyLoaded", event, slick, image, imageSource);
    },
    handleLazeLoadError(event, slick, image, imageSource) {
      console.log("handleLazeLoadError", event, slick, image, imageSource);
    }
  }
};
</script>

<style lang="scss">
.services {
  height: 100vh;
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
    padding: 0  4rem 0 0;
  }
}

/* Slider */

.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.slick-list {
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  padding: 0;
  width: calc(100vw - 180px);
  &:focus {
    outline: none;
  }

  &.dragging {
    cursor: pointer;
    cursor: hand;
  }
}
.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  left: 0;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:before,
  &:after {
    content: "";
    display: table;
  }

  &:after {
    clear: both;
  }

  .slick-loading & {
    visibility: hidden;
  }
}
.slick-slide {
  float: left;
  height: calc(100vh - 120px);
  min-height: 1px;
  [dir="rtl"] & {
    float: right;
  }
  &.slick-loading img {
    display: none;
  }

  display: none;

  &.dragging img {
    pointer-events: none;
  }

  .slick-initialized & {
    display: block;
  }

  .slick-loading & {
    visibility: hidden;
  }

  .slick-vertical & {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  & > div {
    height: inherit;
  }
}
.slick-arrow.slick-hidden {
  display: none;
}
.slick-dots {
  list-style: none;
  display: flex;
  justify-content: center;
  li {
    margin: 0 0.4rem;
    width: 6.4rem;
    padding: 4px 0;
    cursor: pointer;
    .slick-dot {
      background: #0e278380;
      height: 4px;
      overflow: hidden;
      width: 100%;
      margin: 0;
      padding: 0;
      border: none;
      transition: all 0.5s;
    }
    &.slick-active > .slick-dot {
      background: #0e2783;
    }
  }
}
.slick-prev,
.slick-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(0.95);
  width: 38px;
  height: 72px;
  z-index: 10;
  cursor: pointer;
  opacity: 0.75;
  transition: all 0.45s;
  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
}
.slick-prev {
  left: 40px;
  background: url("../../assets/images/prev.svg") no-repeat center / contain
    transparent;
  &:hover {
    left: 50px;
  }
}
.slick-next {
  right: 40px;
  background: url("../../assets/images/next.svg") no-repeat center / contain
    transparent;
  &:hover {
    right: 50px;
  }
}
</style>