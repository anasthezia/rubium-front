<template>
  <div class="draver">
    <div class="draver__close" @click="closeDraver"></div>
    <div class="draver__content">
      <div class="draver__container">
        <MainMenu />
        <footer class="footer">
          <nav class="footer-menu"></nav>
          <div class="contacts">
            <h4>Контакты</h4>
            <div class="contacts__address">
              <p>г. Таганрог, Гоголевский, 27, оф. 27</p>
              <p>8-928-322-223</p>
              <p>hello@rubium.ru</p>
            </div>
          </div>
          <div class="foore__social">
            <ul class="social-links">
              <li class="social-links__item">vk</li>
              <li class="social-links__item">hh</li>
              <li class="social-links__item">in</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "./main-menu";
export default {
  name: "draver",
  data() {
    return {};
  },
  computed: {},
  methods: {
    closeDraver() {
      this.$emit("closeDraver");
    }
  },
  components: {
    MainMenu
  }
};
</script>

<style lang="scss" scoped>
.draver {
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  background: #ffffff;
  padding: 140px;
  position: fixed;
  box-sizing: border-box;
  z-index: 1000;
  &__close {
    position: absolute;
    right: 58px;
    top: 68px;
    width: 52px;
    height: 40px;
    background: url("./../../assets/close-draver-btn.svg") no-repeat 0 0
      transparent;
  }
    &__container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: flex-start;
    }
}
</style>