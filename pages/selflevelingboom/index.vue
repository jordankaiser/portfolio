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
        id: 'slb',
        title: 'JLG Self-Leveling Boom',
        description:
          '<p>JLG is a global producer of aerial work platforms and telehandlers. The Self-Leveling Boom site was created to promote the new 670SJ Self-Leveling Boom. This project was a collaboration between myself and another developer. I handled setting up the Next.js framework, site structure, and the majority of the site\'s pages while the other developer focused on the <a href="https://www.selflevelingboom.com/masteryourterrain/" target="_blank" rel="nofollow">Master Your Terrain</a> component. After the initial site launched I started on a second phase of development to add Spanish and Portuguese translations.</p>',
        roles: ['Developer'],
        tools: ['Next.js', 'React', 'next-translate'],
        checkmark: {
          width: '9px',
          height: '14px',
          backgroundColor: '#F49E1E'
        },
        works: [
          {
            title: 'Home Page',
            description:
              "The home page features a full-bleed looping background video. Both the background video and the primary graphic switch out depending on the user's viewport width.",
            image: 'slb/slb-detail-one.jpeg',
            link: {
              text: 'View Site',
              href: 'https://www.selflevelingboom.com/',
              target: '_blank'
            }
          },
          {
            title: 'Translation',
            description:
              "Translation support is currently being added to the site. For tooling I used the Next.js internationalized routing system to handle page URLs and detecting the user's preferred language. For translating the site's content I choose next-translate. Using those two tools I was able to produce a robust and flexible translation system.",
            image: 'mc/mc-detail-two.jpg',
            link: {
              text: 'View Site',
              href: 'https://www.selflevelingboom.com/',
              target: '_blank'
            }
          }
        ],
        scrollArt: [
          {
            className: 'work-detail__scroll-art__one',
            imageSrc: 'slb/shovel.png',
            imageAlt: 'Shovel'
          }
        ],
        pattern: 'slb/nut-pattern.png'
      }
    }
  }
}
</script>
