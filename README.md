# vue-feather-icons

[![NPM version](https://img.shields.io/npm/v/vue-feather-icons.svg?style=flat)](https://npmjs.com/package/vue-feather-icons) [![NPM downloads](https://img.shields.io/npm/dm/vue-feather-icons.svg?style=flat)](https://npmjs.com/package/vue-feather-icons) [![CircleCI](https://circleci.com/gh/egoist/vue-feather-icons/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vue-feather-icons/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add vue-feather-icons
```

## Usage

```js
// Only import what you need!
import { AirplayIcon, AtSignIcon, ... } from 'vue-feather-icons'
```

See all icons and usage here: https://vue-feather-icons.netlify.com

### Sizing

By default, icons will be sized based on the font size of the parent element.

You can set a custom size using the `size` attribute. 
For multiple based sizing, pass the desired multiple followed by an `x`.

```html
<activity-icon size="1.5x" class="custom-class"></activity-icon> 
```

You can also set a `px` size directly by just passing an integer

```html
<activity-icon size="25" class="custom-class"></activity-icon> 
```

## Tree shaking

By using ES imports like `import { AirplayIcon } from 'vue-feather-icons'` with [webpack + minifier](https://webpack.js.org/guides/tree-shaking/#minify-the-output) or Rollup, unused exports in this module will be automatically eliminated.

To make webpack tree shaking work without using any minifier, you can use the per-file icons from [`icons`](https://unpkg.com/vue-feather-icons/icons/) directory, e.g. `import AirplayIcon from 'vue-feather-icons/icons/AirplayIcon'`.

## Related

- [vue-bytesize-icons](https://github.com/egoist/vue-bytesize-icons)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vue-feather-icons** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/vue-feather-icons/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
