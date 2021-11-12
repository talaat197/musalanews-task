import React, {useEffect, useState} from 'react';
import {
  Input,
  Icon,
  NativeBaseProvider,
  FlatList,
  Text,
  Heading,
  Center,
} from 'native-base';
import Ionicons from 'react-native-ionicons';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {fetchNewsAPI} from '../api/fetchNewsAPI';
import {IArticle, INewsProps} from '../interfaces/News';
import NewsItem from '../components/NewsItem/NewsItem';
import {APIResponse} from '../interfaces/API';
import {Navigation} from 'react-native-navigation';
import {IHomeProps} from '../interfaces/Props';

const Home = (props: IHomeProps) => {
  const {t} = useTranslation();
  const [search, setSearch] = useState('');
  const [articlesData, setArticlesData] = useState<[IArticle] | []>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const {articles, totalResults}: APIResponse = await fetchNewsAPI(
        search,
        page,
      );
      setArticlesData(articles);
      setTotalResults(totalResults);
    } catch (error) {
      console.log(error, 'error happened');
    } finally {
      setLoading(false);
    }
  };

  const onReferesh = () => {
    setLoading(true);
    fetchNews();
  };
  const handlePressNewsItem = (item: IArticle) => {
    Navigation.push(props.componentId, {
      component: {
        name: 'ArticleDetails',
        options: {
          bottomTab: {
            text: t('article'),
          },
          topBar: {
            title: {
              text: t('article'),
            },
          },
        },
        passProps: {
          item,
        },
      },
    });
  };

  const renderNewsItem = ({item}: INewsProps) => (
    <TouchableOpacity onPress={() => handlePressNewsItem(item)}>
      <NewsItem item={item} />
    </TouchableOpacity>
  );

  const doSearch = () => {
    if (search) {
      fetchNews();
    }
  };

  const allowNextPage = (): boolean => {
    return page * 10 < totalResults;
  };

  const handleLoadMore = async () => {
    setLoading(true);
    if (allowNextPage()) {
      const newPage = page + 1;
      setPage(newPage);
      try {
        const {articles, totalResults}: APIResponse = await fetchNewsAPI(
          search,
          newPage,
        );
        let newArticlesData: any = articlesData;
        newArticlesData.push(...articles);
        setArticlesData(newArticlesData);
        setTotalResults(totalResults);
      } catch (error) {
        console.log(error, 'error happened during load more data');
      } finally {
        setLoading(false);
      }
    }
  };

  const renderSearchInput = () => (
    <Input
      value={search}
      onChangeText={text => setSearch(text)}
      placeholder={t('search')}
      variant="filled"
      width="100%"
      bg="gray.200"
      borderRadius="10"
      placeholderTextColor="gray.500"
      _hover={{bg: 'gray.300', borderWidth: 0}}
      borderWidth="0"
      marginBottom={'1'}
      InputLeftElement={
        <Icon
          ml="2"
          size="6"
          color="gray.500"
          onPress={() => doSearch()}
          as={<Ionicons name="search" />}
        />
      }
      InputRightElement={
        <TouchableOpacity onPress={doSearch}>
          <Text color={'blue.500'} marginRight="2">
            {t('search')}
          </Text>
        </TouchableOpacity>
      }
    />
  );
  return (
    <NativeBaseProvider>
      <FlatList
        padding={'1'}
        data={articlesData}
        renderItem={renderNewsItem}
        keyExtractor={(item, index) => index.toString()}
        refreshing={loading}
        onRefresh={() => onReferesh()}
        ListHeaderComponent={renderSearchInput}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListEmptyComponent={
          <Center>
            <Heading size="md" mt="4">{t('no_news')}</Heading>
          </Center>
        }
      />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default Home;
