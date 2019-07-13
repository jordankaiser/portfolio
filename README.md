# designreport

> Project to get familiar with Nuxt.js

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## ScrollMagic setup.

When attemping to import the library as normal I got an error, `window not defined`. The issue was we needed this JS library to run before instatiating the root of the Vue application. See [The Plugins Directory](https://nuxtjs.org/guide/plugins#vue-plugins). The key thing is is when importing a libary via the plugin object in nuxt.config.js we're laoding the plugin before mounting the app, thus the plugin now know what `window` is.

I got this setup while looking at libraries to solve this issue. This person describes how to get ScrollMagic and GSAP working without any libaries. [How to avoid this plugin in Nuxt 2.0+](https://github.com/pirony/ks-vue-scrollmagic/issues/13).

Things I want to look at adjusting.

- Adjust `gsap-scrollmagic.js` so we're not using TweenMax and TimelineMax. The ScrollMagic library says it support to so should be possible.
- Look at seperating out GSAP and ScrollMagic into seperate plugin imports. 

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

## References

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Notes
Learning project. Working on recreating https://avocode.com/design-report-2018.
