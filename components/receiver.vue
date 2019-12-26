<template>
  <div>the template: {{ title }}</div>
</template>
<script>
// TODO: I think this file can be deleted.
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
