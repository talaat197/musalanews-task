import {Navigation} from 'react-native-navigation';
import {getAppRoot, registerScreens} from './src/navigation/navigation';
import {statusBarTheme, topBarTheme} from './src/styles'
import { Appearance } from 'react-native';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

registerScreens();

Navigation.setDefaultOptions({
  statusBar: statusBarTheme(Appearance.getColorScheme()),
  topBar: topBarTheme(Appearance.getColorScheme()),
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      ...getAppRoot(Appearance.getColorScheme() == 'dark')
    },
  });
});
