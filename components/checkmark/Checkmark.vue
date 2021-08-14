<template>
  <div
    class="checkmark"
    :style="{
      width: checkmark.width,
      height: checkmark.height
    }"
  >
    <div
      class="checkmark__long"
      :style="{ backgroundColor: checkmark.backgroundColor }"
    ></div>
    <div
      class="checkmark__short"
      :style="{ backgroundColor: checkmark.backgroundColor }"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    checkmark: {
      type: Object,
      default: () => {
        return {}
      },
      width: '9px',
      height: '14px',
      backgroundColor: '#fff'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.checkmark {
  position: inherit;
  width: 9px;
  height: 14px;
  transform: rotate(38deg);

  &__long {
    position: absolute;
    right: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: green;
  }
  &__short {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: orange;
  }
}
</style>
