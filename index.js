import {Navigation} from 'react-native-navigation';
import {getAppRoot, registerScreens} from './src/navigation/navigation';
import {bottomTabTheme , statusBarTheme, topBarTheme} from './src/styles'
import { Appearance } from 'react-native';

registerScreens();

Navigation.setDefaultOptions({
  statusBar: statusBarTheme(Appearance.getColorScheme()),
  topBar: topBarTheme(Appearance.getColorScheme()),
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      ...getAppRoot()
    },
  });
});
