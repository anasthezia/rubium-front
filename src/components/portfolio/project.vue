<template>
  <div class="project" :class="{ opened: isProjectOpen }" @click="toggleProject">
    <div class="project__image">
      <img :src=" require('../../assets/images/projects/' + project.image)" alt />
    </div>
  </div>
</template>

<script>
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
  methods: {
    toggleProject() {
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
    height: inherit;
  }
}
</style>