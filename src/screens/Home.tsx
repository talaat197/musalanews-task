import React, {useEffect, useState} from 'react';
import {Input, Icon, NativeBaseProvider, FlatList, Text} from 'native-base';
import Ionicons from 'react-native-ionicons';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {fetchNewsAPI} from '../api/fetchNewsAPI';
import {IArticle, INewsProps} from '../interfaces/News';
import NewsItem from '../components/NewsItem/NewsItem';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  const {t} = useTranslation();
  const [search, setSearch] = useState('');
  const [articlesData, setArticlesData] = useState<[IArticle] | []>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const articles: [IArticle] = await fetchNewsAPI(search);
      setArticlesData(articles);
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

  const renderNewsItem = ({item}: INewsProps) => <NewsItem item={item} />;

  const doSearch = () => {
    fetchNews();
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
      />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default Home;
