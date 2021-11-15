import {Box, NativeBaseProvider} from 'native-base';
import React from 'react';
import {Appearance} from 'react-native';
import { DARK_COLOR, LIGHT_COLOR } from '../../styles';

const BaseContainer: React.FC = ({children}) => {

  const colorScheme = Appearance.getColorScheme();
  return (
    <NativeBaseProvider>
      <Box width={'full'} minWidth={"full"} height={"full"} bg={colorScheme == 'dark' ? DARK_COLOR : LIGHT_COLOR}>{children}</Box>
    </NativeBaseProvider>
  );
};

export default BaseContainer;
