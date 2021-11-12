/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import i18n from './src/lang/initLang';
import {registerScreens} from './src/navigation/navigation';

registerScreens();

Navigation.setDefaultOptions({
  bottomTab: {
    textColor: 'grey',
    selectedTextColor: 'blue',
    selectedFontSize: 18,
    fontSize: 16,
  },
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                    options: {
                      bottomTab: {
                        text: i18n.t('home'),
                      },
                      topBar: {
                        title: {
                          text: i18n.t('home'),
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Settings',
                    options: {
                      bottomTab: {
                        text: i18n.t('settings'),
                      },
                      topBar: {
                        title: {
                          text: i18n.t('settings'),
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
