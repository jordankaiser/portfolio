# Portfolio

> Portfolio website documentation.

## Build Setup

```bash
# install dependencies.
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# push to heroku staging site
$ git push heroku-staging master

# push to heroku live site
$ git push heroku master

```

## Code Editor setup.

The link at the end is generally how to set things up. Things to pay attention to.

Make sure you're pulling in the necessary npm packages.

```bash
eslint
babel-eslint
eslint-config-prettier
eslint-plugin-prettier
eslint-plugin-vue
eslint-loader
prettier
```

Make sure you've got all the extensions installed.

```bash
Vetur
ESLint
Prettier
```

Make sure you've created the `.vscode/settings.json` file. This will be a project specific settings file.

```json
// .vscode/settings.json file contents.
{
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    }
  ],
  "eslint.autoFixOnSave": true,
  "editor.formatOnSave": false,
  "vetur.validation.template": false,
  "workbench.colorCustomizations": {
    "activityBar.background": "#472133",
    "titleBar.activeBackground": "#632F47",
    "titleBar.activeForeground": "#FCF9FA"
  }
}
```

Make sure the `.eslintrc.js` file in the project root is being used. 

- [How to properly set up Nuxt with ESLint and Prettier in VSCode](https://medium.com/@gogl.alex/how-to-properly-set-up-eslint-with-prettier-for-vue-or-nuxt-in-vscode-e42532099a9c)

## GSAP + Bonus plugin setup.

To get GSAP working you currently need to use the UMD versions of the plugin. This can be done like a standard import in whatever file you want.

```
import TweenLite from 'gsap/umd/TweenLite'
```

If you want to use one of the bonus GSAP plugins then you'll need to make sure they are only used on the client side. Otherwise you'll get errrors. That can ben done by setting up the code like the following. You can put this along with your `import` from above.

```
if (process.client) {
  /* eslint-disable-next-line */
  const MorphSVGPlugin = require('~/assets/vendor/MorphSVGPlugin');
}
```

### Reference Links.

https://greensock.com/forums/topic/17888-importing-plugins-in-nuxtjs/?do=findComment&comment=94614

https://github.com/dipscom/nuxt-gsap-plugins

## ScrollMagic setup.

When attemping to import the library as normal I got an error, `window not defined`. The issue was we needed this JS library to run before instatiating the root of the Vue application. See [The Plugins Directory](https://nuxtjs.org/guide/plugins#vue-plugins). The key thing is is when importing a libary via the plugin object in nuxt.config.js we're laoding the plugin before mounting the app, thus the plugin now know what `window` is.

I got this setup while looking at libraries to solve this issue. This person describes how to get ScrollMagic and GSAP working without any libaries. [How to avoid this plugin in Nuxt 2.0+](https://github.com/pirony/ks-vue-scrollmagic/issues/13).

Things I want to look at adjusting.

- Look at seperating out GSAP and ScrollMagic into seperate plugin imports.

## Breakpoint

Used for generating CSS media queries.

[Breakpoint Documentation](https://github.com/at-import/breakpoint)


## Lazy loading images.

Using [lazyimages](https://github.com/aFarkas/lazysizes). In order to use the `data-src` method when defining the image path it needs to be done like `:data-src="require('~/assets/img/work/nsf/work-small.jpg')"`

## Deployment

Followed the [How to deploy on Heroku?](https://nuxtjs.org/faq/heroku-deployment/) documentation to deploy to heroku.

`git push heroku master`

For custom domain name setup followed the [Custom Domain Names for Apps](https://devcenter.heroku.com/articles/custom-domains) documentation.

https://nuxtjs-portfolio.herokuapp.com/

## Misc

### Hiding initial flicker of animated elements on page load.

This is keyed off a class called `.animated`. First `.animated: visible !important;` is set in `default.vue`. This makes sure the element is visible with javascript disabled. Then `@include animated` is set in the components SCSS. This hides the initial flicker of the element when JS is enabled. Finally in javascript we use TweenLite so set the visibility of the element to `visible` which is done as an inline style so has precendence over every other style.

You would think that you wouldn't need to use the mixin. What is happening is gsap is setting `visibility: visible;` on the element but behind the scenes it's setting to `visible` _from_ something. The _from_ is why we need to do the mixin, so it can come _from_ being hidden.

Note that that the animated class is not applied to the actual elements that are being animated but instead to a container element of the animated elements.

### Lodash import

Import lodash modules without import the whole thing and keeping it small.

```javascript
// index.vue. Doing it this simple way didn't seem to bloat the bundle size or anything. I think that may be because I'm using recent versions of webpack/babel?
import debounce from 'lodash/debounce'
```

### Webpack analyzer

To analyze the webpack bundle run `npm run analyze`. That will generate a report at `.nuxt/stats/client.html`.

## References

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## TODOs

* Look at setting up lazy loading for all images. Currently just setup on work screenshots.
