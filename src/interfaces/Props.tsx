import {NavigationAction} from '@react-navigation/routers';
import {StackScreenProps} from '@react-navigation/stack';
import {IArticle} from './News';
export interface IHomeProps {
  navigation: NavigationAction;
}

export interface ISettingsProps {
  componentId: string;
}

export type RootStackParamList = {
  Home: {searchText?: string};
  ArticleDetails: {item: IArticle};
  HomeTabs: undefined;
};

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
