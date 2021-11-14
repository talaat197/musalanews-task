import React, {useEffect, useState} from 'react';
import {
  NativeBaseProvider,
  Text,
  Box,
  AspectRatio,
  Image,
  Stack,
  Heading,
  HStack,
  ScrollView,
} from 'native-base';
import {StyleSheet, useColorScheme} from 'react-native';
import {useTranslation} from 'react-i18next';
import {IArticle, INewsProps} from '../interfaces/News';
import {getDetailedDate} from '../utilities/helper';
import BaseContainer from '../components/NewsItem/BaseContainer/BaseContainer';
import {DARK_COLOR, LIGHT_COLOR} from '../styles';

const ArticleDetails = ({item}: INewsProps) => {
  const {t} = useTranslation();
  const theme = useColorScheme();

  const {
    author,
    title,
    urlToImage,
    publishedAt,
    description,
    content,
  }: IArticle = item;
  return (
    <BaseContainer>
      <ScrollView>
        <Box
          rounded="lg"
          overflow="hidden"
          borderColor={theme == 'dark' ? 'coolGray.600' : 'coolGray.200'}
          backgroundColor={theme == 'dark' ? 'gray.700' : 'gray.50'}
          borderWidth="1">
          <Box>
            <AspectRatio ratio={16 / 9}>
              <Image
                source={{
                  uri: urlToImage,
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading
                color={theme == 'dark' ? LIGHT_COLOR : DARK_COLOR}
                size="md"
                ml="-1">
                {title}
              </Heading>
              <Text
                fontSize="xs"
                color={theme == 'dark' ? 'violet.400' : 'violet.500'}
                fontWeight="500"
                ml="-0.5"
                mt="-1">
                {author}
              </Text>
            </Stack>
            <Text
              fontWeight="400"
              color={theme == 'dark' ? LIGHT_COLOR : DARK_COLOR}>
              {description}
            </Text>
            <Text
              fontWeight="400"
              color={theme == 'dark' ? LIGHT_COLOR : DARK_COLOR}>
              {content}
            </Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Text
                  color={theme == 'dark' ? 'warmGray.200' : 'coolGray.600'}
                  fontWeight="400">
                  {getDetailedDate(publishedAt)}
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </ScrollView>
    </BaseContainer>
  );
};

const styles = StyleSheet.create({});

export default ArticleDetails;
