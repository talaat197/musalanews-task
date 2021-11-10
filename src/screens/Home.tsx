import React from 'react';
import {VStack, Input, Icon , NativeBaseProvider  , Heading} from 'native-base';
import Ionicons from 'react-native-ionicons'
import {StyleSheet} from 'react-native';

const Home = () => {
  return (
    <NativeBaseProvider>
      <VStack width="100%" space={5} alignItems="center">
        <Input
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
