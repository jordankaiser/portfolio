<template>
  <div class="LogoMark">
    <nuxt-link to="/">
      <img
        src="~/assets/img/logo-mark.svg"
        alt="Design Report"
        class="logo-mark"
      />
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.LogoMark {
  position: fixed;
  width: 100%;
  z-index: 2;
  padding: 15px 15px 0px 15px;

  img {
    width: 40px;
  }
}
</style>
