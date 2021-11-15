import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArticleDetails from '../screens/ArticleDetails';
import {useColorScheme} from 'react-native';
import {useTranslation} from 'react-i18next';
import {DARK_COLOR, LIGHT_COLOR} from '../styles';
import { RootStackParamList } from '../interfaces/Props';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
  const theme = useColorScheme();
  const {t} = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={BottomTabs}
        options={{
          headerShown: false,
          title: t('article'),
          headerTintColor: theme == 'dark' ? LIGHT_COLOR : DARK_COLOR,
          headerStyle: {
            backgroundColor: theme == 'dark' ? DARK_COLOR : LIGHT_COLOR,
          },
        }}
      />
      <Stack.Screen
        name="ArticleDetails"
        component={ArticleDetails}
        options={{
          title: t('article'),
          headerTintColor: theme == 'dark' ? LIGHT_COLOR : DARK_COLOR,
          headerStyle: {
            backgroundColor: theme == 'dark' ? DARK_COLOR : LIGHT_COLOR,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
