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
          "<p>MemorialCare is a health system serving Los Angeles County and Orange County in California. It is composed of four hospitals, two medical groups and numberous  imaging centers, surgical centers, and more.</p><p>The website was heavily used by both hospital staff and patients and as such  the client needed direct access to the team responsible for adding new features and maintaining it. To faciliate this need we meet directly with the client multiple times per week to discuss needs, features in progress, and plan new capabilities for the website. We used an agile process to put structure around this work. The client was very complimentary of this process and the work we produced.</p><p>Personally I was the primary back end developer for this website over the majority of the it's existence. I worked closely with a front end developer and a digital strategist to plan feature additions and maintence. Specifically, when we would produce a new feature I would write out implementation documentation, then build out the back end while working with and providing support to the front end developer. I would also step in as both front end developer and back end developer for specific features as needed.</p>",
        roles: ['Developer'],
        tools: ['Javascript', 'SCSS', 'PHP', 'Drupal', 'Vue.js', 'Twig'],
        checkmark: {
          width: '9px',
          height: '14px',
          backgroundColor: '#fff'
        },
        works: [
          {
            title: 'Euismod leo suscipit vivamus tempus',
            description:
              'Vitae senectus orci phasellus magnis suspendisse risus duis, ante parturient dictumst amet nostra tincidunt lectus, velit maecenas morbi imperdiet placerat malesuada.',
            image: 'mc-new/mc-detail-one.jpeg',
            link: {
              text: 'Non sociis',
              href: '/',
              target: '_blank'
            }
          },
          {
            title: 'Euismod leo suscipit vivamus tempus',
            description:
              'Vitae senectus orci phasellus magnis suspendisse risus duis, ante parturient dictumst amet nostra tincidunt lectus, velit maecenas morbi imperdiet placerat malesuada.',
            image: 'mc-new/mc-detail-one.jpeg',
            link: {
              text: 'Non sociis',
              href: '/',
              target: '_blank'
            }
          },
          {
            title: 'Euismod leo suscipit vivamus tempus',
            description:
              'Vitae senectus orci phasellus magnis suspendisse risus duis, ante parturient dictumst amet nostra tincidunt lectus, velit maecenas morbi imperdiet placerat malesuada.',
            image: 'mc-new/mc-detail-one.jpeg',
            link: {
              text: 'Non sociis',
              href: '/',
              target: '_blank'
            }
          }
        ],
        scrollArt: [
          {
            className: 'work-detail__scroll-art__one',
            imageSrc: 'mc-new/pill.png',
            imageAlt: 'Pill'
          },
          {
            className: 'work-detail__scroll-art__two',
            imageSrc: 'mc-new/pill.png',
            imageAlt: 'Pill'
          },
          {
            className: 'work-detail__scroll-art__three',
            imageSrc: 'mc-new/pill.png',
            imageAlt: 'Pill'
          },
          {
            className: 'work-detail__scroll-art__four',
            imageSrc: 'mc-new/pill.png',
            imageAlt: 'Pill'
          }
        ]
      }
    }
  }
}
</script>
