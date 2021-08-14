<template>
  <div class="work-detail">
    <h1 class="work-detail__headline">MemorialCare</h1>
    <div ref="animatedDivWrapper" class="work-detail__animated-div">
      <div ref="animatedDiv" class="work-detail__animated-div__animator"></div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      lastScrollTop: 0,
      patternYTransform: 0
    }
  },
  mounted() {
    this.attachScrollDetection()
  },
  methods: {
    animateDiv() {
      // Distance scrolled from the top.
      const scrolledTop =
        window.pageYOffset || document.documentElement.scrollTop
      console.log('check')
      if (scrolledTop > this.lastScrollTop) {
        // Translate the element on the Y axis by the patternYTransform.
        this.patternYTransform = this.patternYTransform - 1
        this.$refs.animatedDiv.style.transform = `translateY(calc(${this.patternYTransform}px - 50%))`
      } else {
        this.patternYTransform = this.patternYTransform + 1
        this.$refs.animatedDiv.style.transform = `translateY(calc(${this.patternYTransform}px - 50%))`
      }
      this.lastScrollTop = scrolledTop <= 0 ? 0 : scrolledTop
    },
    attachScrollDetection() {
      window.onscroll = event => {
        window.requestAnimationFrame(() => {
          this.animateDiv(event)
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
    top: 0;
    right: 0;
    height: 100%;
    width: 200px;
    background-color: rgba(34, 193, 195, 1);

    &__animator {
      position: absolute;
      top: 50%;
      right: 0;
      width: 100%;
      height: calc(100% + 300px);
      transform: translateY(-50%);
      // background: linear-gradient(
      //   0deg,
      //   rgba(34, 193, 195, 1) 0%,
      //   rgba(253, 187, 45, 1) 100%
      // );
      background-image: url('~assets/img/work/mc-new/pill-pattern.png');
      background-repeat: repeat;
      background-size: 94px;
      // background-image: url('~assets/img/loader-bender.png');
    }
  }
}
</style>
