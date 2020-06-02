<template>
  <div
    class="project"
    :class="{ opened: project.id==SELECTED_PROJECT }"
    @click="SELECT_PROJECT(project.id)"
  >
    <div class="project__image">
      <img :src=" require('../../assets/images/projects/' + project.image)" alt />
    </div>
    <transition name="prj">
      <div class="project__content" v-if="project.id==SELECTED_PROJECT">
        <div class="project__title">
          {{project.title}}
          <div class="project__date">
            <ul class="tags-list">
              <li class="tags-list__item tag" v-for="tag in project.tags" :key="tag.title" :class="tag.style">{{tag.title}}</li>
            </ul>
            <p class="project__date">
              Дата запуска: <span>
              {{project.date}}

              </span>
              </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Project",
  props: {
    project: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data: function() {
    return {
      isProjectOpen: false
    };
  },
  computed: {
    ...mapGetters(["SELECTED_PROJECT"])
  },
  methods: {
    ...mapActions(["SELECT_PROJECT"]),

    selectProject() {
      this.isProjectOpen = !this.isProjectOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.project {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: $white;
  height: inherit;
  cursor: pointer;
  position: relative;
  // transform: scale(1);
  transition: all 0.5s ease;
  overflow: hidden;
  &__image {
    // position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    transition: all 1s ease;
    // top: 50%

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }

  &:not(.opened):hover &__image {
    transform: translateY(-20px);
  }

  &.opened &__image {
    height: 25%;
    width: 25%;
  }
  &__content {
    box-sizing: border-box;
    height: 75%;
    padding: 2rem 4rem;
  }
  &__title {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0 0 1.2rem;
  }
  &__date {
    font-size: 1.4rem;
    font-weight: 600;
    span{
      font-weight: 400;
    }
  }
  .tag {
    margin-bottom: 1.2rem;
  }
}
.prj-enter-active {
  animation: push-in 1s;
}

.prj-leave-active {
  animation: push-in 1s reverse;
}
@keyframes push-in {
  0% {
    transform: scale(.2) rotateX(-180deg);
  }

  100% {
    transform: scale(1)  rotateX(0);
  }
}
</style>