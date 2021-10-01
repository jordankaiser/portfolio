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
              'The E-Z-GO website is actually two seperate websites. When a visitor first comes to the site they are asked to choose between the Personal site and the Fleet site. Each of these sites features seperate content tailored to the visitors choice. On subsequent visits the site will remember the visitors last choice and automatically send them there. The visitor can also switch sites at any time using links in the header navigation.',
            image: 'ezgo-new/ezgo-detail-one.jpg',
            link: {
              text: 'View Home Page',
              href: 'https://ezgo.txtsv.com/',
              target: '_blank'
            }
          },
          {
            title: 'Vehicle Builder',
            description:
              "The Vehicle Builder was a pre-existing Vue.js tool from another client project that they wanted to continue to use but with major changes and improvements. These changes included a major restructuring of the front end and very significant changes in how the accessory and vehicle selection logic worked. The data for the tool is pulled from a combination of a google spreadsheets and data contained in the CMS. This allows the CMS user a large amount of freedom to update the tool without the need for a developer's assistannce. The tool was a key feature of the site and all client expectations where meet. In the end the retrofit of this tool was so successful it was taken and used as a basis for different vehicle builders on the client's parent companies other sites.",
            image: 'ezgo-new/ezgo-detail-two.jpg',
            link: {
              text: 'View Vehicle Builder',
              href: 'https://ezgo.txtsv.com/personal/build#/',
              target: '_blank'
            }
          },
          {
            title: 'Vehicle Detail',
            description:
              "The marquee of the Vehicle Detail page allows the user to switch the color of the vehicle. The available colors are completely controllable by the CMS user and can be changed as needed. The vehicle page contains a number of high impact visual layout segments all of which are also controlled by the CMS. The See Specs callout opens in a model who's content is populated by another google spreadsheet. The vehicle detail page also includes integration points that link to the builder both in the marquee and and in the Build and Price sections.",
            image: 'ezgo-new/ezgo-detail-three.jpg',
            link: {
              text: 'View Vehicle Detail',
              href: 'https://ezgo.txtsv.com/personal/golfcarts/express-l6',
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
          }
        ],
        pattern: 'ezgo-new/wheel-pattern.png'
      }
    }
  }
}
</script>
