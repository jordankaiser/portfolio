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

## ScrollMagic setup.

When attemping to import the library as normal I got an error, `window not defined`. The issue was we needed this JS library to run before instatiating the root of the Vue application. See [The Plugins Directory](https://nuxtjs.org/guide/plugins#vue-plugins). The key thing is is when importing a libary via the plugin object in nuxt.config.js we're laoding the plugin before mounting the app, thus the plugin now know what `window` is.

I got this setup while looking at libraries to solve this issue. This person describes how to get ScrollMagic and GSAP working without any libaries. [How to avoid this plugin in Nuxt 2.0+](https://github.com/pirony/ks-vue-scrollmagic/issues/13).

Things I want to look at adjusting.

- Look at seperating out GSAP and ScrollMagic into seperate plugin imports.

## Misc

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

## Notes
Learning project. Working on recreating https://avocode.com/design-report-2018.
