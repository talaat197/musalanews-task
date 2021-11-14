import React from 'react';
import { Appearance } from 'react-native';
import Icon from 'react-native-ionicons';
import {Navigation} from 'react-native-navigation';
import i18n from '../lang/initLang';
import ArticleDetails from '../screens/ArticleDetails';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { bottomTabsTheme, LIGHT_COLOR, statusBarTheme, topBarTheme } from '../styles';

export const registerScreens = () => {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Settings', () => Settings);
  Navigation.registerComponent('ArticleDetails', () => ArticleDetails);
};

export const getAppRoot = (isDark : boolean) => {
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
                      icon : require('../assets/icons/news-outline.png'),
                      selectedIcon : require('../assets/icons/news-fill.png'),
                      iconWidth : 50,
                      iconHeight : 50,
                      iconColor : isDark ? LIGHT_COLOR : '',
                      selectedIconColor : isDark ? LIGHT_COLOR : ''
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
                      icon : require('../assets/icons/settings-outline.png'),
                      selectedIcon : require('../assets/icons/settings-fill.png'),
                      iconWidth : 50,
                      iconHeight : 50,
                      iconColor : isDark ? LIGHT_COLOR : '',
                      selectedIconColor : isDark ? LIGHT_COLOR : ''
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
      options: {
        bottomTabs: bottomTabsTheme(Appearance.getColorScheme())
    },
    },
  };
};

export const setNavigationDefaultOptions = (theme : string  |null | undefined) => {
  console.info('top bar color' , theme)
  Navigation.setDefaultOptions({
    statusBar: statusBarTheme(theme),
    topBar: topBarTheme(theme),
  });
} 

