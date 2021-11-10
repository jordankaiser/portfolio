<template>
  <work-details :content="content" />
</template>
<script>
import WorkDetails from '~/components/work-details/work-details.vue'

export default {
  components: {
    WorkDetails
  },
  data: () => {
    return {
      content: {
        id: 'mc',
        title: 'MemorialCare',
        description:
          "<p>MemorialCare is a health system serving Los Angeles County and Orange County in California. It is composed of four hospitals, two medical groups and multiple imaging centers, surgical centers, and more.</p><p>We meet directly with the client multiple times per week to discuss needs, features in progress, and plan new capabilities for the website. We used an agile process to put structure around this work. The client was very complimentary of this process and the work we produced.</p><p>I was the primary back end developer for this website over the majority of the it's existence. I worked closely with a front end developer and a digital strategist to plan feature additions and maintence.</p>",
        roles: ['Developer'],
        tools: ['Javascript', 'SCSS', 'PHP', 'Drupal', 'Vue.js', 'Twig'],
        checkmark: {
          width: '9px',
          height: '14px',
          backgroundColor: '#fff'
        },
        works: [
          {
            title: 'Home Page',
            description:
              'The home page of the website features a marquee emphasizeing search which was heavily utilized. The Featured Content section of the home page is a high impact visual that allowed the client to emphasize other content on the site at their discretion.',
            image: 'mc/mc-detail-one.jpeg',
            link: {
              text: 'View Home Page',
              href: '/',
              target: '_blank'
            }
          },
          {
            title: 'Service Lines',
            description:
              'The Service Line page type for MemorialCare  contained information on services like cancer care or joint care.  The user can switch their location using the tool in the top left of the header or directly below the in-page navigation. Switching locations will display specialized content tailored specifically to that location. The Servie Line page also offered robust referential content that could be controled using the CMS. Examples of this are the Specialites, Locations, Blog, Events and other sections on the page.',
            image: 'mc/mc-detail-two.jpg',
            link: {
              text: 'View Service Line Page',
              href: '/',
              target: '_blank'
            }
          },
          {
            title: 'Hospitals',
            description:
              'The Hospital page type supports a variety of customisable layout segments, the ability to display related locations as either a list of cards or an interactive map similar to the one on the Locations page. This page also supports a variety of referential content which is both populated by choosing specific content in the CMS and automatically by utilizing related taxonomy terms.',
            image: 'mc/mc-detail-three.jpeg',
            link: {
              text: 'View Hospital Page',
              href: '/',
              target: '_blank'
            }
          }
        ],
        scrollArt: [
          {
            className: 'work-detail__scroll-art__one',
            imageSrc: 'mc/pill.png',
            imageAlt: 'Pill'
          },
          {
            className: 'work-detail__scroll-art__two',
            imageSrc: 'mc/pill.png',
            imageAlt: 'Pill'
          }
        ],
        pattern: 'mc/pill-pattern.png',
        addendum:
          '<p>The MemorialCare website was built using Drupal\'s Domain Access module. This allowed for the content from the CMS to be used on multiple different websites such as <a target="_blank" href="https://www.beachfamilydoctors.net/">beachfamilydoctors.net</a> and <a target="_blank" href="https://memorialcareaconetwork.org">memorialcareaconetwork.org</a>.</p><p>Content was imported and exported from the site using custom Drupal modules. The Providers on the website where a typical target for data importing and exporting.</p><p>Drupal module update audits where conducted monthly. Updated modules, as well as general website updates and features, where then deployed from the development environment to staging and then the live site using Drupal\'s configuration management.</p>'
      }
    }
  }
}
</script>
