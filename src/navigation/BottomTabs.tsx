import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';
import Ionicons from 'react-native-ionicons';
import {useColorScheme} from 'react-native';
import {DARK_COLOR, LIGHT_COLOR} from '../styles';
import {useTranslation} from 'react-i18next';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const theme = useColorScheme();
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        let tabBarLabel = t('article');
        let headerShown = true;
        switch (route.name) {
          case 'Home':
            tabBarLabel = t('article');
            break;
          case 'Settings':
            tabBarLabel = t('settings');
            break;
        }
        return {
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={focused ? 'document' : 'clipboard'}
                  size={size}
                  color={theme == 'dark' ? LIGHT_COLOR : DARK_COLOR}
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name={focused ? 'settings' : 'aperture'}
                  size={size}
                  color={theme == 'dark' ? LIGHT_COLOR : DARK_COLOR}
                />
              );
            }
          },
          tabBarLabel,
          tabBarStyle: {
            backgroundColor: theme == 'dark' ? DARK_COLOR : LIGHT_COLOR,
          },
          headerStyle: {
            backgroundColor: theme == 'dark' ? DARK_COLOR : LIGHT_COLOR,
          },
          headerShown
        };
      }}>
      <Tab.Screen
        name="Home"
        component={Home} 
        initialParams={{t}}
        options={{
          title: t('article'),
          headerTintColor: theme == 'dark' ? LIGHT_COLOR : DARK_COLOR,
          headerStyle: {
            backgroundColor: theme == 'dark' ? DARK_COLOR : LIGHT_COLOR,
          },
        }}
        />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: t('settings'),
          headerTintColor: theme == 'dark' ? LIGHT_COLOR : DARK_COLOR,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
