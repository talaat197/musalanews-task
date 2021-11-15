import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface IArticle {
  source: IArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IArticleSource {
  id: string;
  name: string;
}

type IArticleParams = {
  item: IArticle;
}

type IArticleDetailsProps = {
  params : IArticleParams
};

export type IArticlesProps = {
  item : IArticle
};

export type ArticleDetailsProps = NativeStackScreenProps<IArticleDetailsProps , 'params'>;
