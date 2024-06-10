import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        colors: {
          primary: '#6200ea',
          secondary: '#03dac6',
        },
        variables: {},
      },
    },
  },
  defaults: {
    VAppBar: {
      elevation: 4,
    },
    VCard: {
      elevation: 4,
    },
    VBtn: {
      elevation: 2,
    },
  },
});
