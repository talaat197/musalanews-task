import React, { useEffect, useState } from 'react';
import {VStack, Input, Icon , NativeBaseProvider} from 'native-base';
import Ionicons from 'react-native-ionicons'
import {StyleSheet} from 'react-native';
import { useTranslation } from 'react-i18next';
import { fetchNewsAPI } from '../api/fetchNewsAPI';
import { Article } from '../interfaces/News';

const Home = () => {
  const {t} = useTranslation()
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetchNews();
  } , [])

  const fetchNews = async () => {
    try {
      const articles : [Article] = await fetchNewsAPI(search);
      console.log(articles , 'articles');
    } catch (error) {
      console.log(error , 'error happened')
    }
  }

  return (
    <NativeBaseProvider>
      <VStack width="100%" space={5} alignItems="center">
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
          _hover={{ bg: 'gray.200', borderWidth: 0 }}
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
      </VStack>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default Home;
