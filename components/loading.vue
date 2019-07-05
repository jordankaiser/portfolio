<template>
  <div
    class="loading-page"
    :class="{
      'loading-page--start': loading,
      'loading-page--finish': !loading
    }"
  >
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    progress: 1
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  font-size: 30px;
  z-index: 100;
  transition: all 1.2s;
  pointer-events: none;

  &--start {
    visibility: visible;
    opacity: 1;
  }
  &--finish {
    visibility: hidden;
    opacity: 0;
  }
}
</style>
