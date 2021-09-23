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
          "<p>E-Z-GO is a global manufacturer of golf cars, utility vehicles and personal transportation vehicles. E-Z-GO is part of Textron Inc. a global multi-industry Fortune 500 company. Their website features engaging photography, interactive product detail pages, a vehicle builder tool as well as multiple different page type and other features. In addition the website is actually two websites in one. One website who's content is tailored to personal users and another who's content is tailored to golf courses. These modes can be switched between by the user at will using links in the header navigation.</p><p>I was the lead developer from the projects inception and continued to add features and provide support throughout it's existance. The primary team for the initial development consisted of myself, a fellow back end developer, a front end developer and a producer. The CMS is Drupal and the front end was built using atomic design principles.</p><p>The website was very well received by the client and sees high engagement from users.</p>",
        roles: ['Developer'],
        tools: ['Javascript', 'SCSS', 'PHP', 'Drupal', 'Vue.js', 'Twig'],
        checkmark: {
          width: '9px',
          height: '14px',
          backgroundColor: '#1A4382'
        },
        works: [
          {
            title: 'Personal and Fleet Sites',
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
            title: 'Vehicle Builder',
            description:
              "The Vehicle Builder was a pre-existing tool from another client project that they wanted to continue to use but with major changes and improvements. These changes included a major restructuring of the front end and very significant changes in how the accessory and vehicle selection logic worked. This entailed working in a large code base that had already undergone a good amount of work done by a variety of different developers. This was a tool was a key feature of the site and all client expectations where meet. In the end the retrofit of this tool was so successful it was taken and used as a basis for other similar tools on the client's parent companies other sites.",
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
