const path = require('path')
const feather = require('feather-icons')
const pascalCase = require('pascal-case')
const fs = require('fs-extra')

const componentTemplate = (name, svg) => `
export default {
  name: '${name}',

  functional: true,

  render(h, ctx) {
    return ${svg.replace(/<svg([^>]+)>/, '<svg$1 {...ctx.data}>')}
  }
}
`.trim()

const icons = Object.keys(feather.icons).map(name => ({
  name,
  componentName: `${name}-icon`,
  pascalCasedComponentName: pascalCase(`${name}-icon`)
}))

Promise.all(icons.map(icon => {
  const svg = feather.toSvg(icon.name)
  const component = componentTemplate(icon.componentName, svg)
  const filepath = `./src/components/${icon.pascalCasedComponentName}.js`
  return fs.ensureDir(path.dirname(filepath))
    .then(() => fs.writeFile(filepath, component, 'utf8'))
})).then(() => {
  const main = icons
    .map(icon => `export { default as ${icon.pascalCasedComponentName} } from './components/${icon.pascalCasedComponentName}'`)
    .join('\n\n')
  return fs.writeFile('./src/index.js', main, 'utf8')
})
