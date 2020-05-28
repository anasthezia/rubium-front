<template>
  <footer clsaa="footer">
    <div class="job">
      <h4 class="footer__title">Работа у нас</h4>
      <ul class="footer-menu">
        <li class="footer-menu__link" @click="CLOSEDRAWER">
          <router-link :to="{name: 'vacancies'}">Вакансии</router-link>
        </li>
        <li class="footer-menu__link">
          <a href="#">Стажировка</a>
        </li>
      </ul>
    </div>
    <div class="contacts">
      <h4 class="footer__title">Контакты</h4>
      <div class="contacts__address">
        <p>г. Таганрог, Гоголевский, 27, оф. 27</p>
        <p>8-928-322-223</p>
        <p>hello@rubium.ru</p>
      </div>
    </div>
    <div class="foore__social">
      <ul class="social-links">
        <li class="social-links__item">
          <a href="#">
            <img src="./../../assets/images/vk-icon.svg" alt />
          </a>
        </li>
        <li class="social-links__item">
          <a href="#">
            <img src="./../../assets/images/hh-icon.svg" alt />
          </a>
        </li>
        <li class="social-links__item">
          <a href="#">
            <img src="./../../assets/images/in-icon.svg" alt />
          </a>
        </li>
      </ul>
    </div>
    <div class="footer__actions">
      <button class="btn footer__actions-btn">Написать</button>
    </div>
  </footer>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Footer",
  methods: { ...mapActions(["CLOSEDRAWER"]) }
};
</script>

<style lang="scss" scoped>
.footer {
  &__title {
    font-size: 3.6rem;
    line-height: 1;
    color: #434345;
    margin: 0 0 2.8rem;
  }
  &__actions {
    margin: 6.4rem 0 0;
    display: flex;
    justify-content: space-around;
  }
  &__actions-btn {
    font-size: 2.4rem;
    padding: 1rem 3.5rem;
  }
}
.footer-menu {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  &__link {
    margin-bottom: 2rem;
    a {
      color: #434345 !important;
      font-size: 2.4rem;
      text-decoration: none;
    }
  }
}
.job {
  margin-bottom: 6rem;
}
.social-links {
  margin-top: 4rem;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  &__item {
    width: 40px;
    height: 40px;
  }
}
</style>