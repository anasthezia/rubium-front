<template>
  <div class="project" :class="{ opened: project.title==SELECTED_PROJECT }" 
  @click=SELECT_PROJECT(project.title)>
    <div class="project__image">
      <img :src=" require('../../assets/images/projects/' + project.image)" alt />
    </div>
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
    ...mapGetters([
      'SELECTED_PROJECT'
    ])
  },
  methods: {
 ...mapActions(["SELECT_PROJECT"]) ,

    selectProject() {
      this.isProjectOpen = !this.isProjectOpen;
    }
  }
};
</script>

<style lang="scss">
.project {
  display: flex;
  flex-wrap: nowrap;
  background: $white;
  height: inherit;
  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
}
</style>