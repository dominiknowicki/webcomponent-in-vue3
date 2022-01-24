import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.compilerOptions.isCustomElement = tag => (tag.startsWith('wc-') || ['wc-webcomponent'].includes(tag))
app.mount('#app')
