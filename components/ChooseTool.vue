<template>
  <div>
    <section class="choose-tool">
      <div class="choose-tool__description">
        <h5>
          LET’S START BY PICKING YOUR DESIGN TOOL OF CHOICE
        </h5>
      </div>
      <div class="choose-tool__icons">
        <nuxt-link
          class="choose-tool__icons__wrap choose-tool__icons__wrap--sketch"
          to="#"
        >
          <img
            class="choose-tool__icon"
            src="~/assets/img/logo-sketch.svg"
            alt="icon"
          />
          <img
            class="choose-tool__icon-hover choose-tool__icon-hover--sketch"
            src="~/assets/img/logo-sketch-hover.svg"
            alt="icon"
          />
        </nuxt-link>
        <nuxt-link
          class="choose-tool__icons__wrap choose-tool__icons__wrap--sketch"
          to="#"
        >
          <img
            class="choose-tool__icon"
            src="~/assets/img/logo-sketch.svg"
            alt="icon"
          />
          <img
            class="choose-tool__icon-hover choose-tool__icon-hover--sketch"
            src="~/assets/img/logo-sketch-hover.svg"
            alt="icon"
          />
        </nuxt-link>
        <nuxt-link
          class="choose-tool__icons__wrap choose-tool__icons__wrap--sketch"
          to="#"
        >
          <img
            class="choose-tool__icon"
            src="~/assets/img/logo-sketch.svg"
            alt="icon"
          />
          <img
            class="choose-tool__icon-hover choose-tool__icon-hover--sketch"
            src="~/assets/img/logo-sketch-hover.svg"
            alt="icon"
          />
        </nuxt-link>
        <nuxt-link
          class="choose-tool__icons__wrap choose-tool__icons__wrap--sketch"
          to="#"
        >
          <img
            class="choose-tool__icon"
            src="~/assets/img/logo-sketch.svg"
            alt="icon"
          />
          <img
            class="choose-tool__icon-hover choose-tool__icon-hover--sketch"
            src="~/assets/img/logo-sketch-hover.svg"
            alt="icon"
          />
        </nuxt-link>
        <nuxt-link
          class="choose-tool__icons__wrap choose-tool__icons__wrap--sketch"
          to="#"
        >
          <img
            class="choose-tool__icon"
            src="~/assets/img/logo-sketch.svg"
            alt="icon"
          />
          <img
            class="choose-tool__icon-hover choose-tool__icon-hover--sketch"
            src="~/assets/img/logo-sketch-hover.svg"
            alt="icon"
          />
        </nuxt-link>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.choose-tool {
  display: flex;
  align-items: center;
  position: relative;
  background-color: $tan;
  padding: 100px 0;

  &__description {
    display: flex;
    justify-content: flex-end;
    flex: 0 1 auto;
    width: 50%;
    padding: 0 30px;

    h5 {
      margin-bottom: 0;
      max-width: 370px;
      text-align: right;
    }
  }
  &__icons {
    display: flex;
    justify-content: space-between;
    flex: 0 1 auto;
    width: 50%;
    padding: 0 30px;

    &__wrap {
      position: relative;

      &:hover {
        .choose-tool {
          &__icon {
            opacity: 0;
          }
          &__icon-hover {
            transform: translate(-50%, -50%) scale(1.2, 1.2);
            opacity: 1;
          }
        }
      }
    }
  }
  &__icon {
    position: relative;
    transition: opacity $t;
  }
  &__icon-hover {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: auto;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: transform $t, opacity $t;

    &--sketch {
      top: calc(50% - 3px);
    }
  }
}
</style>
