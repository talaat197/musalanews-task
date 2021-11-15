import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack';
require("./src/lang/initLang")

export default function App() {
  return (
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
  );
}
