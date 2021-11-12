import {Navigation} from 'react-native-navigation';
import ArticleDetails from '../screens/ArticleDetails';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

export const registerScreens = () => {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Settings', () => Settings);
  Navigation.registerComponent('ArticleDetails', () => ArticleDetails);
};

export const setNavigationScreenNames = (componentId: string, text: string) => {
  Navigation.mergeOptions(componentId, {
    bottomTab: {
      text,
    },
    topBar: {
      title: {
        text,
      },
    },
  });
};
