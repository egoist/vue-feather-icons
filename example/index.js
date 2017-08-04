import Vue from 'vue'
import * as icons from '../src'

new Vue({
  el: '#app',
  render() {
    return <div>
    {Object.keys(icons).map(name => {
      const Icon = icons[name]
      return <Icon class="lol" key={name} />
    })}
    </div>
  }
})
