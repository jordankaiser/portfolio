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
          "<p>E-Z-GO is a global manufacturer of golf cars, utility vehicles and personal transportation vehicles. E-Z-GO is part of Textron Inc. a global multi-industry Fortune 500 company. Their website features engaging photography, interactive product detail pages, a vehicle builder tool as well as multiple different page types among other features. In addition the website is actually two websites in one. One website who's content is tailored to a personal use audience and another who's content is tailored to golf course use. These modes can be switched betweeen by using the links in the top left of the header navigation.</p><p>I was the lead developer from the projects inception and continued to add features and provide support throughout it's existance. The primary team for the initial development consisted of myself, a fellow back end developer, a front end developer and a producer. The CMS is Drupal and the front end was built using atomic design principles.</p><p>The website was very well received by the client and sees high engagement from users.</p>",
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
              'The E-Z-GO website is actually two seperate websites. When a visitor first comes to the site they are asked to choose between the Personal site and the Fleet site. Each of these sites features seperate content tailored to the visitors choice. On subsequent visits the site will remember the visitors last choice and automatically send them there. The visitor can also switch sites at any time using links in the header navigation.',
            image: 'ezgo/ezgo-detail-one.jpg'
          },
          {
            title: 'Vehicle Builder',
            description:
              "The Vehicle Builder was a pre-existing Vue.js tool from another client project that they wanted to continue to use but with major changes and improvements. These changes included a major restructuring of the front end and very significant changes in how the accessory and vehicle selection logic worked. The data for the tool is pulled from a combination of a google spreadsheets and data contained in the CMS. This allows the CMS user a large amount of freedom to update the tool without the need for a developer's assistance. In the end the retrofit of this tool was so successful it was taken and used as a basis for different vehicle builders on the client's parent companies other sites. A trade show version of the application was also built. This version did not have the header or footer of the site and was made more touch friendly for very large screens.",
            image: 'ezgo/ezgo-detail-two.jpg'
          },
          {
            title: 'Vehicle Detail',
            description:
              "The marquee of the Vehicle Detail page allows the user to switch the color of the vehicle. The available colors are completely controllable by the CMS user and can be changed as needed. The vehicle page contains a number of high impact visual layout segments all of which are also controlled by the CMS. The See Specs callout opens in a model who's content is populated by a google spreadsheet. The vehicle detail page also includes integration points that link to the builder both in the marquee and and in the Build and Price sections.",
            image: 'ezgo/ezgo-detail-three.jpg'
          }
        ],
        scrollArt: [
          {
            className: 'work-detail__scroll-art__one',
            imageSrc: 'ezgo/golf-bag.png',
            imageAlt: 'Golf Bag'
          },
          {
            className: 'work-detail__scroll-art__two',
            imageSrc: 'ezgo/flag.png',
            imageAlt: 'Flag'
          }
        ],
        pattern: 'ezgo/wheel-pattern.png'
      }
    }
  }
}
</script>
