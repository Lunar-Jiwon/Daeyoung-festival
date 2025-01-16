import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import { ConfirmationService, ToastService } from 'primevue'
import VueCookies from 'vue-cookies'


const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        }
    }
});

const app = createApp(App)
app.use(VueCookies)
app.use(PrimeVue,{
    theme:{
        preset:MyPreset ,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
})
app.use(ToastService)
app.use(ConfirmationService);
app.use(router)
app.mount('#app')
