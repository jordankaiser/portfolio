/* eslint-disable */
import Vue from 'vue'
import {TweenLite, CSSPlugin, TimelineLite} from "gsap/all";
import 'script-loader!~ScrollMagic';
import 'script-loader!~animation.gsap';

const GSAPScrollMagic = {
  install(Vue, options) {
    // GSAP
    Vue.prototype.$GSAP = {
      TweenLite,
      TimelineLite,
      CSSPlugin,
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
