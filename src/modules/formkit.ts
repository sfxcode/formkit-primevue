import type {UserModule} from '@/types';

import {defaultConfig, plugin} from '@formkit/vue';

import {de, en} from '@formkit/i18n'
import {primeInputs} from "@/formkit";


export const install: UserModule = ({app, router, isClient}) => {
    app.use(plugin, defaultConfig({
        locales: {de, en},
        // Define the active locale
        locale: 'de',
        inputs: primeInputs,
    }));
};

export {}

