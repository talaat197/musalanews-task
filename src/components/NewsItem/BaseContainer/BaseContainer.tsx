import {NativeBaseProvider , themeTools} from 'native-base';
import React from 'react';
import { extendTheme } from 'native-base';
import { useColorScheme } from 'react-native';

const BaseContainer: React.FC = ({children}) => {
  const colorScheme = useColorScheme();
  return <NativeBaseProvider>{children}</NativeBaseProvider>;
};

export default BaseContainer;
