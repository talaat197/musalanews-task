import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack';
require('./src/lang/initLang');

const linking: any = {
  prefixes: ['https://musalanews.com', 'musalanews://'],
  config: {
    screens: {
      HomeTabs: {
        screens: {
          Home: 'news/:searchText',
          Settings : 'settings'
        },
      },
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <HomeStack />
    </NavigationContainer>
  );
}
