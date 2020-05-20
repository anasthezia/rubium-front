

<template>
  <div class="vacanciespage">
    <h2>Вакансии</h2>
      <ul class="vacancies-list">
  <li class="vacancies-list__item" v-for="item in vacancies" :key="item.title">
    <!-- {{ item.title }} -->

    <md-card class="vacancy" v-bind:class=item.style>
      <md-card-header class="card-header">
        <div class="vacancy__header">
          <div class="md-title">{{item.title}}</div>
          <ul class="tags-list">
              <li class="tags-list__item tag" v-for="tag in item.tags" :key="tag">{{tag}}</li>
          </ul>
          </div>
          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <img alt="menu" src="../assets/collapse-btn.svg">
            </md-button>
          </md-card-expand-trigger>
      </md-card-header>

      <md-card-expand>
        <md-card-expand-content>
          <md-card-content>
            <div class="vacancy__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </div>
            <button class="btn btn-1" v-bind:class=item.style @click="openPopup">
              Откликнуться
            </button>
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </li>
</ul>
<Popup v-if="isPopupOpen" @closePopup="closePopup" popupTitle="Отклик на вакансию">      
<vacancyForm/>
</Popup>
  </div>
</template>

<script>
  import Popup from '../components/popup/popup';
  import vacancyForm from '../components/forms/vacancy-form'

  export default {

    data:function(){
      return {
              isPopupOpen: false,
              vacancies: [
      {
        title: 'Junior frontend developer',
        tags: ['html', 'css', 'js', 'webpack', 'gulp', 'git'],
        style:'style-1'
      },
      {
        title: 'Middle backend developer',
        tags: ['php', 'laravel', 'MySql', 'docker', 'Postgress', 'git'],
        style:'style-2'
      },
      {
        title: 'Sales manager',
        tags: ['english', 'переговоры', 'деловая переписка', 'продажи'],
        style:'style-3'
      }
    ]
          }
      },
    name: 'Vacancies',
    computed: {},
    methods: {
      openPopup() {
        this.isPopupOpen = true;
        console.log(this)
      },
      closePopup() {
        this.isPopupOpen = false;
      },
    },
    components: {
      Popup, 
      vacancyForm
    }
  }
</script>

<style lang="scss" scoped>
.vacanciespage{
    min-height: 100vh;
    background: url('./../assets/bg.png') no-repeat 0 0 /cover transparent;
    background-attachment: fixed;
}
.vacancies-list {
    list-style: none;
    width: 1024px;
    margin: 0 auto;

      &__item {
        margin-bottom: 2rem;
      }
    }
.card-header {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between
}

.btn {
  border-radius: 2px;
  border-width: 1px;
  padding: 8px 16px;
  font-size: 1.4rem; 
  text-transform: uppercase; 
  border-style: solid;
  display: flex;
  cursor: pointer;
  background: none;
  margin: 20px auto;
  &.style-1 {
      color: #0E2783;
      border-color:  #0E2783;
  }
  &.style-2 {
    color: #6A1B9A;
    border-color: #6A1B9A;
  }
  &.style-3 {
    color: #00903a;
    border-color: #00903a;
  }
}
.tags-list {
  list-style: none;
  margin: 1.2rem 0;
  padding: 0;

  &__item {
    display: inline-block;
    margin-right: 1.2rem;
  }
}
.tag {
  padding: 2px 8px;
  font-size: 1.2rem;
}

.vacancy {width: 100%;}
  .card-expansion {
    height: 480px;
  }

  .style-1 {
    .tag {
      color: #0E2783;
      background: rgba($color: #2196F3, $alpha: .2)
    }
  }
  .style-2 {
    .tag {
      color: #6A1B9A;
      background: rgba($color: #E040FB, $alpha: .2)
    }
  }
  .style-3 {
    .tag {
      color: #00903a;
      background: rgba($color: #00E676, $alpha: .2)
    }
  }

  .md-card {
    // width: 320px;
    margin: 4px;
    display: block;
    vertical-align: top;
  }
</style>