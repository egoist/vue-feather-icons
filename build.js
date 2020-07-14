const path = require('path')
const feather = require('feather-icons')
const pascalCase = require('pascal-case')
const fs = require('fs-extra')

const componentTemplate = (name, svg) => `
export default {
    name: '${name}',

    props: {
        size: {
            type: String,
            default: '16',
            validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
        }
    },

    setup(props, ctx) {
        const size = props.size.slice(-1) === 'x'
            ? props.size.slice(0, props.size.length -1) + 'em'
            : parseInt(props.size) + 'px';

        const attrs = { ...ctx.attrs };
        attrs.width = attrs.width || size;
        attrs.height = attrs.height || size;

        return () => ${svg.replace(/<svg([^>]+)>/, '<svg$1 {...attrs}>')}
    }
}
`.trim()

const handleComponentName = name => name.replace(/\-(\d+)/, '$1')

const icons = Object.keys(feather.icons).map(name => ({
    name,
    pascalCasedComponentName: pascalCase(`${handleComponentName(name)}-icon`)
}))

Promise.all(icons.map(icon => {
    const svg = feather.icons[icon.name].toSvg()
    const component = componentTemplate(icon.pascalCasedComponentName, svg)
    const filepath = `./src/components/${icon.pascalCasedComponentName}.js`

    return fs.ensureDir(path.dirname(filepath)).then(() => fs.writeFile(filepath, component, 'utf8'))
})).then(() => {
    const main = icons
        .map(icon => `export { default as ${icon.pascalCasedComponentName} } from '../icons/${icon.pascalCasedComponentName}'`)
        .join('\n\n');

    return fs.outputFile('./src/index.js', main, 'utf8')
})
