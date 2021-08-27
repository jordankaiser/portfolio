<template>
  <!-- <work-detail :work-details="workDetails" /> -->
  <work-details-new :content="content" />
</template>
<script>
import WorkDetailsNew from '~/components/work-details-new/work-details-new.vue'

export default {
  components: {
    WorkDetailsNew
  },
  data: () => {
    return {
      content: {
        id: 'mc',
        title: 'MemorialCare',
        description:
          '<p>Tempus malesuada himenaeos blandit tristique volutpat dictum duis, interdum placerat velit cras feugiat est fringilla, dictumst natoque nisl justo metus pulvinar. Sociosqu odio fames imperdiet aliquet nulla nullam mus consequat nisi, proin vivamus convallis faucibus varius at placerat praesent blandit id, nascetur aptent laoreet iaculis torquent potenti sollicitudin sem.</p><p>At fusce quis elementum dolor etiam ac scelerisque consequat, est lectus ante eu vel placerat nec, facilisis enim himenaeos ullamcorper sociosqu semper inceptos.</p>',
        roles: ['Developer'],
        tools: ['Javascript', 'SCSS', 'PHP', 'Drupal', 'Vue.js', 'Twig'],
        works: [
          {
            title: 'Euismod leo suscipit vivamus tempus',
            description:
              'Vitae senectus orci phasellus magnis suspendisse risus duis, ante parturient dictumst amet nostra tincidunt lectus, velit maecenas morbi imperdiet placerat malesuada.',
            image: '~/assets/img/work/mc-new/mc-detail-one.jpeg',
            link: {
              text: 'Non sociis',
              href: '/',
              target: '_blank'
            }
          }
        ]
      }
    }
  }
}
</script>
