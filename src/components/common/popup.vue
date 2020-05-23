<template>
    <div class="popup-wrapper" ref="popup-wrapper">
        <div class="v-popup">
            <div class="v-popup__close" @click="closePopup"></div>
            <div class="v-popup__header">
                <h3>{{popupTitle}}</h3>
            </div>
            <div class="v-popup__content">
                <slot></slot>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    name: "v-popup",
    props: {
        popupTitle: {
            type: String,
            default: "Обратная связь",
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        closePopup() {
        this.$emit ('closePopup')
      },
    },
    mounted() {
        let vm = this;
        document.addEventListener('click', function(item) {
            if(item.target === vm.$refs['popup-wrapper']) {
                console.log(vm);
                vm.closePopup();
            }
        }
        )
    }
}
</script>

<style lang="scss" scoped>
.popup-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(64, 64, 64, .15) ;
    z-index: 100;
}
.v-popup {
  width: 702px;
  min-height: 200px;
  background: $white;
  padding: 40px;
  left: 50%;
  top:50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 100;
  box-shadow: (0 0 40px) rgba(0, 0, 0, .25);
    &__close{
    position: absolute;
    top: 20px;
    right: 20px;
    width: 28px;
    height: 28px;
    background: url('./../../assets/images/close-btn.svg') no-repeat 0 0 transparent;
  }
}

</style>