import {Navigation} from 'react-native-navigation';
import {getAppRoot, registerScreens} from './src/navigation/navigation';

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
      ...getAppRoot()
    },
  });
});
