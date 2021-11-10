import {Navigation} from 'react-native-navigation';
import Home from '../screens/Home';
import Settings from '../screens/Settings';


export const registerScreens = () => {
    Navigation.registerComponent('Home', () => Home);
    Navigation.registerComponent('Settings', () => Settings);

}
