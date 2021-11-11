import React, {useEffect, useState} from 'react';
import {VStack, Input, Icon, NativeBaseProvider, FlatList} from 'native-base';
import Ionicons from 'react-native-ionicons';
import {StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {fetchNewsAPI} from '../api/fetchNewsAPI';
import {IArticle, INewsProps} from '../interfaces/News';
import NewsItem from '../components/NewsItem/NewsItem';

const Home = () => {
  const {t} = useTranslation();
  const [search, setSearch] = useState('');
  const [articlesData , setArticlesData] =  useState<[IArticle] | []>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const articles: [IArticle] = await fetchNewsAPI(search);
      setArticlesData(articles);
      console.info(articles, 'articles');
    } catch (error) {
      console.log(error, 'error happened');
    }
  };

  const renderNewsItem = ({ item } : INewsProps) => (
    <NewsItem item={item}/>
  );

  return (
    <NativeBaseProvider>
      <VStack width="100%" space={0} alignItems="center">
        <Input
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          variant="filled"
          width="100%"
          bg="gray.100"
          borderRadius="10"
          py="1"
          px="2"
          placeholderTextColor="gray.500"
          _hover={{bg: 'gray.200', borderWidth: 0}}
          borderWidth="0"
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.500"
              as={<Ionicons name="search" />}
            />
          }
        />

        <FlatList
          data={articlesData}
          renderItem={renderNewsItem}
          keyExtractor={(item , index) => index.toString()}
        />
      </VStack>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default Home;
