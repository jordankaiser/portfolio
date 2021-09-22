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
        id: 'ezgo',
        title: 'E-Z-GO',
        description:
          "<p>MemorialCare is a health system serving Los Angeles County and Orange County in California. It is composed of four hospitals, two medical groups and multiple imaging centers, surgical centers, and more.</p><p>We meet directly with the client multiple times per week to discuss needs, features in progress, and plan new capabilities for the website. We used an agile process to put structure around this work. The client was very complimentary of this process and the work we produced.</p><p>I was the primary back end developer for this website over the majority of the it's existence. I worked closely with a front end developer and a digital strategist to plan feature additions and maintence.</p>",
        roles: ['Developer'],
        tools: ['Javascript', 'SCSS', 'PHP', 'Drupal', 'Vue.js', 'Twig'],
        checkmark: {
          width: '9px',
          height: '14px',
          backgroundColor: '#1A4382'
        },
        works: [
          {
            title: 'E-Z-GO Home Page',
            description:
              'The E-Z-GO website is actually two seperate websites. When a visitor first comes to the site they are asked to choose between the Personal site and the Fleet site. Each of these sites features seperate content tailored to the visitors choice. On subsequent visits the site will remember the visitors last choice and automatically send them to their previous choice. The visitor can also switch sites at any time using links in the header navigation.',
            image: 'ezgo-new/ezgo-detail-one.jpg',
            link: {
              text: 'View Home Page',
              href: '/',
              target: '_blank'
            }
          },
          {
            title: 'Service Line Page',
            description:
              'The Service Line page for MemorialCare was a page type that contained information on services like cancer care or joint care.  The user can switch their location using the tool in the top left of the header or directly below the in-page navigation. Switching locations will display specialized content tailored specifically to that location. The Servie Line page also offered robust referential content that could be controled using the CMS. Examples of this are the Specialites, Locations, Blog, Events and other sections on the page.',
            image: 'mc-new/mc-detail-two.jpg',
            link: {
              text: 'View Service Line Page',
              href: '/',
              target: '_blank'
            }
          },
          {
            title: 'Hospital Page',
            description:
              'The Hospital supports a variety of customisable layout segments, the ability to display related locations as either a list of cards or an interactive map similar to the one on the Locations page. This page also supports a variety of referential content which is both populated by choosing specific content in the CMS and automatically by utilizing related taxonomy terms.',
            image: 'mc-new/mc-detail-three.jpeg',
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
            imageSrc: 'ezgo-new/golf-bag.png',
            imageAlt: 'Golf Bag'
          },
          {
            className: 'work-detail__scroll-art__two',
            imageSrc: 'ezgo-new/flag.png',
            imageAlt: 'Flag'
          },
          {
            className: 'work-detail__scroll-art__three',
            imageSrc: 'ezgo-new/golf-ball.png',
            imageAlt: 'Golf Ball'
          }
          // {
          //   className: 'work-detail__scroll-art__four',
          //   imageSrc: 'mc-new/pill.png',
          //   imageAlt: 'Pill'
          // }
        ],
        pattern: 'ezgo-new/wheel-pattern.png',
        addendum:
          '<p>The MemorialCare website was built using Drupal\'s Domain Access module. This allowed for the content from the CMS to be used on multiple different websites such as <a target="_blank" href="https://www.beachfamilydoctors.net/">beachfamilydoctors.net</a> and <a target="_blank" href="https://memorialcareaconetwork.org">memorialcareaconetwork.org</a>.</p><p>Content was imported and exported from the site using custom Drupal modules. The Providers on the website where a typical target for data importing and exporting.</p><p>Drupal module update audits where conducted monthly. Updated modules, as well as general website updates and features, where then deployed from the development environment to staging and then the live site using Drupal\'s configuration management.</p>'
      }
    }
  }
}
</script>
