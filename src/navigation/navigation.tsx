import {Navigation} from 'react-native-navigation';
import i18n from '../lang/initLang';
import ArticleDetails from '../screens/ArticleDetails';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

export const registerScreens = () => {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Settings', () => Settings);
  Navigation.registerComponent('ArticleDetails', () => ArticleDetails);
};

export const getAppRoot = () => {
  return {
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
  };
};
