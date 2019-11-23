<template>
  <div class="corn-hero">
    <img
      src="~/assets/img/corn-1.png"
      alt="Corn Illustration"
      class="corn-hero__1"
    />
    <img
      src="~/assets/img/corn-2.png"
      alt="Corn Illustration"
      class="corn-hero__2"
    />
    <img
      src="~/assets/img/corn-3.png"
      alt="Corn Illustration"
      class="corn-hero__3"
    />
    <div class="corn-hero__circle"></div>
  </div>
</template>
<script>
export default {
  mounted: function() {
    const TimelineLite = this.$GSAP.TimelineLite
    const timeline = new TimelineLite({
      paused: true,
      onComplete: timelineComplete
    })
    const cornEl = {
      container: document.querySelector('.corn-hero'),
      cob: document.querySelector('.corn-hero__1'),
      leftLeaf: document.querySelector('.corn-hero__2'),
      rightLeaf: document.querySelector('.corn-hero__3'),
      circle: document.querySelector('.corn-hero__circle')
    }

    timeline
      .from(cornEl.container, 1, {
        scale: 0
      })
      .from(
        cornEl.circle,
        1,
        {
          scale: 0
        },
        '-=1'
      )
      .from(
        cornEl.cob,
        0.5,
        {
          x: 30,
          y: 30
        },
        '-=1'
      )
      .from(
        cornEl.leftLeaf,
        1,
        {
          rotation: 7
        },
        '-=0.5'
      )
      .from(
        cornEl.rightLeaf,
        1,
        {
          rotation: -7
        },
        '-=1'
      )

    timeline.play()

    // Clear inline styles incase of browser resize.
    function timelineComplete() {
      Object.values(cornEl).forEach(element => {
        /* eslint-disable-next-line no-undef */
        TweenLite.set(element, { clearProps: 'all' })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';
.corn-hero {
  position: relative;
  padding-bottom: 10px;

  // &:after {
  //   content: '';
  //   position: absolute;
  //   left: 50%;
  //   top: 50%;
  //   width: 3px;
  //   height: 3px;
  //   background-color: red;
  //   z-index: 100;
  // }
  &__1 {
    position: relative;
    width: 161px;
    height: auto;
    left: 1px;
    top: 1px;
    transform-origin: 54% 50%;
    z-index: 1;
  }
  &__2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 161px;
    height: auto;
    transform-origin: 74% 84%;
    z-index: 1;
  }
  &__3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 161px;
    height: auto;
    transform-origin: 76% 83%;
    z-index: 1;
  }
  &__circle {
    position: absolute;
    width: 140px;
    height: 140px;
    top: 55%;
    left: 99%;
    transform: translate(-50%, -50%);
    background-color: $color-orange;
    border-radius: 100%;

    @include breakpoint($small) {
      top: 50%;
      left: 50%;
      width: 125px;
      height: 125px;
    }
  }
}
</style>
