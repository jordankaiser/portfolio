<template>
  <div>the template: {{ title }}</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'default title'
    }
  },
  mounted: function() {
    console.log('receiving mounted')
  }
}
</script>
