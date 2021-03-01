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
        id: 'mc',
        headerModifiers: {
          id: 'mc-header',
          revealOffset: 0.7
        },
        roles: ['Developer', 'Another'],
        title: 'MemorialCare',
        description:
          'Introduction of work tortor ultricies malesuada viverra leo amet etiam feugiat senectus curabitur in felis himenaeos, a potenti libero eget pretium donec conubia nunc netus litora faucibus.',
        screenshotOne: {
          id: 'one',
          image: 'mc/work-cash-pricing.jpg',
          alt: 'MemorialCare Home Page',
          placeholderConfig: {
            initial: null,
            width: '1000',
            height: '1000'
          },
          animationConfig: {
            id: 'mc-screenshot-one',
            revealOffset: 0.75,
            initialDelay: '+=0',
            triggerEl: '.screenshot--one'
          }
        },
        screenshotOneCaption: {
          id: 'mc',
          uniqueId: 'one',
          cta: '.screenshot--one .cta-secondary'
        },
        screenshotOneCaptionText:
          '<p>The Cash Pricing tool allows the user to specifiy a medical procedure and medical facility. The cash price of that procedure is then given.</p><p>This tool was built with Vue.js and utilizes Vuex for state management.</p>',
        screenshotOneLink: {
          text: 'Cash Pricing',
          href: 'https://memorialcare.org/cash-pricing',
          target: '_blank'
        },
        screenshotTwo: {
          id: 'two',
          image: 'mc/work-small-service-line.jpg',
          placeholderConfig: {
            initial: null,
            width: '582',
            height: '570'
          },
          animationConfig: {
            id: 'mc-screenshot-two',
            revealOffset: 0.75,
            initialDelay: '+=0',
            triggerEl: '.screenshot--two'
          }
        },
        screenshotTwoCaption: {
          id: 'mc',
          uniqueId: 'two',
          cta: '.screenshot--two .cta-secondary'
        },
        screenshotTwoCaptionText:
          '<p>One of the objectives for the project was allow the user to specify a particular medical location. Once chosen the user sees specific content for that location throughout the site. The Cancer Care service page is one example of this.</p>',
        screenshotTwoLink: {
          text: 'Cancer Care Service',
          href: 'https://www.memorialcare.org/services/cancer-care',
          target: '_blank'
        },
        toolsModifiers: {
          id: 'mc-tools',
          revealOffset: 0.8,
          initialDelay: '+=1',
          triggerEl: '.mc-hero'
        },
        tools: ['Drupal', 'Javascript', 'PHP', 'Vue.js', 'Twig', 'SCSS'],
        hero: {
          revealOffset: 0.75
        },
        ctaHero: {
          id: 'mc',
          text: 'Visit Website',
          link: 'https://wwww.memorialcare.org',
          linkTarget: '_blank'
        },
        footerPills: {
          id: 'mc',
          revealOffset: 1,
          triggerEl: '.work-details__sub-segment .pill-footer',
          initialDelay: '+=0.5'
        }
      }
    }
  }
}
</script>
