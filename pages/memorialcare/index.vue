<template>
  <work-detail :work-details="workDetails" />
</template>
<script>
import WorkDetail from '~/components/work-details/WorkDetail.vue'

export default {
  components: {
    WorkDetail
  },
  data: function() {
    return {
      workDetails: {
        roles: ['Developer', 'Another']
      }
    }
  }
}
</script>
