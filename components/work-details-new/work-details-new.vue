<template>
  <div class="work-detail">
    <h1 class="work-detail__headline">MemorialCare</h1>
    <div ref="animatedHeadline" class="work-detail__animated-div"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.requestAnimationFrame(this.callback)
  },
  methods: {
    animateDiv() {
      console.log('debounced scroll')

      let verticalPosition = 0
      if (pageYOffset)
        // usual
        verticalPosition = pageYOffset
      else if (document.documentElement.clientHeight)
        // ie
        verticalPosition = document.documentElement.scrollTop
      else if (document.body)
        // ie quirks
        verticalPosition = document.body.scrollTop

      this.$refs.animatedHeadline.style.top = verticalPosition + 1 + 'px'
    },
    callback() {
      window.onscroll = e => {
        window.requestAnimationFrame(() => {
          this.animateDiv()
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.work-detail {
  position: relative;

  &__headline {
    padding-bottom: 200vh;
  }
  &__animated-div {
    position: fixed;
    top: 50vh;
    right: 0;
    width: 200px;
    height: 200px;
    background-color: orangered;
  }
}
</style>
