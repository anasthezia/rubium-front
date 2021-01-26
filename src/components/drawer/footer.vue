<template>
  <footer class="footer">
    <div class="job">
      <h4 class="footer__title">Работа у нас</h4>
      <ul class="footer-menu">
        <li class="footer-menu__link" @click="CLOSE_DRAWER">
          <router-link :to="{ name: 'vacancies' }">Вакансии</router-link>
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
    <div class="footer__social">
      <ul class="social-links">
        <li class="social-links__item">
          <a href="https://vk.com/rubium" target="_blank">
            <img src="./../../assets/images/vk-icon.svg" alt />
          </a>
        </li>
        <li class="social-links__item">
          <a href="https://taganrog.hh.ru/employer/4585130" target="_blank">
            <img src="./../../assets/images/hh-icon.svg" alt />
          </a>
        </li>
        <li class="social-links__item">
          <a href="https://www.linkedin.com/company/rubium-web" target="_blank">
            <img src="./../../assets/images/in-icon.svg" alt />
          </a>
        </li>
        <li class="social-links__item">
          <a
            title="Участник проекта CMS Magazine"
            href="//cmsmagazine.ru/creators/rubium/?_type_jump=by_our_banner"
            target="_blank"
          >
            <img
              alt="Участник проекта CMS Magazine"
              title="Участник проекта CMS Magazine"
            src="./../../assets/images/cms-icon.svg"
            />
          </a>
        </li>
      </ul>
    </div>
    <div class="footer__actions">
      <button class="btn footer__actions-btn" @click="openPopup">
        Написать
      </button>
    </div>
    <Popup
      v-if="isPopupOpen"
      @closePopup="closePopup"
      popupTitle="Обсудить проект"
    >
      <contactForm />
    </Popup>
  </footer>
</template>

<script>
import { mapActions } from "vuex";
import Popup from "../../components/common/popup";
import contactForm from "../../components/forms/contact-form";

export default {
  name: "Footer",
  components: {
    Popup,
    contactForm,
  },
  methods: {
    ...mapActions(["CLOSE_DRAWER"]),
    openPopup() {
      this.isPopupOpen = true;
      // this.selectedVacancy = data;
    },
    closePopup() {
      this.isPopupOpen = false;
      // this.selectedVacancy = "";
    },
  },
  data: function () {
    return {
      isPopupOpen: false,
      // selectedVacancy: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  @include for-mobile {
    width: 100%;
  }
  &__title {
    font-size: 3.6rem;
    line-height: 1;
    color: $black;
    font-weight: 500;
    margin: 0 0 2.8rem;
    @include for-mobile {
      font-size: 2.8rem;
    }
    @include for-tablet {
      font-size: 2.8rem;
    }
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
    font-size: 2.4rem;
    @include for-mobile {
      padding-left: 2rem;
      font-size: 1.8rem;
      margin-bottom: 1.8rem;
    }
    @include for-tablet {
      font-size: 2.2rem;
      margin-bottom: 1.8rem;
      padding-left: 2rem;
    }
    a {
      color: $black;
      text-decoration: none;
    }
  }
}

.job {
  margin-bottom: 6rem;
  @include for-mobile {
    border-bottom: 1px solid lighten($black, 50%);
    width: 100%;
  }
}

.contacts {
  &__address {
    p {
      font-size: 2.2rem;
      padding: 0;
      margin-top: 0;
      margin-bottom: 1.8rem;
      @include for-mobile {
        font-size: 1.4rem;
        padding-left: 2rem;
        margin-bottom: 1.2rem;
      }
      @include for-tablet {
        font-size: 1.8rem;
        padding-left: 2rem;
        margin-bottom: 1.5rem;
      }
    }
  }
}

.social-links {
  margin-top: 4rem;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  &__item {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
}
</style>