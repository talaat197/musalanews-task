import {Box, Container, NativeBaseProvider, themeTools} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Dimensions, useColorScheme} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {getAppRoot, setNavigationDefaultOptions} from '../../../navigation/navigation';
import { DARK_COLOR, LIGHT_COLOR } from '../../../styles';

const BaseContainer: React.FC = ({children}) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  useEffect(() => {
    console.info('change color schme', colorScheme, theme);
    if (theme !== colorScheme) {
      setTheme(theme);
      setNavigationDefaultOptions(colorScheme);
      Navigation.setRoot({
        root: {
          ...getAppRoot(colorScheme == 'dark'),
        },
      });
    }
  }, [colorScheme]);
  return (
    <NativeBaseProvider>
      <Box width={'full'} minWidth={"full"} height={"full"} bg={theme == 'dark' ? DARK_COLOR : LIGHT_COLOR}>{children}</Box>
    </NativeBaseProvider>
  );
};

export default BaseContainer;
