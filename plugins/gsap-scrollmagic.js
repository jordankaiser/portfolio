/* eslint-disable */
import Vue from 'vue'
import '~gsap/TweenLite';
import '~gsap/TimelineLite';
import '~gsap/plugins/CSSPlugin';

import 'script-loader!~ScrollMagic';
import 'script-loader!~animation.gsap';

const GSAPScrollMagic = {
  install(Vue, options) {
    // GSAP
    Vue.prototype.$GSAP = {
      TweenLite,
      TimelineLite,
    }
    // ScrollMagic
    Vue.prototype.$ScrollMagic = {
      Controller: ScrollMagic.Controller,
      Scene: ScrollMagic.Scene
    }
  }
}

Vue.use(GSAPScrollMagic)
/* eslint-enable */
