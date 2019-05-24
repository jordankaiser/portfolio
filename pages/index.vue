<template>
  <div>
    <h1>Hello</h1>
    <div class="logo"></div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import '~/assets/scss/main.scss';
.logo {
  width: 200px;
  height: 200px;
  background-color: chocolate;
  background-image: url('~assets/img/logo.png');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
