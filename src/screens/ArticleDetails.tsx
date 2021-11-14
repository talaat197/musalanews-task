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
import {StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {IArticle, INewsProps} from '../interfaces/News';
import { getDetailedDate } from '../utilities/helper';
import BaseContainer from '../components/NewsItem/BaseContainer/BaseContainer';

const ArticleDetails = ({item}: INewsProps) => {
  const {t} = useTranslation();

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
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: 'coolGray.600',
            backgroundColor: 'gray.700',
          }}
          _light={{
            backgroundColor: 'gray.50',
          }}>
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
              <Heading size="md" ml="-1">
                {title}
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: 'violet.500',
                }}
                _dark={{
                  color: 'violet.400',
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1">
                {author}
              </Text>
            </Stack>
            <Text fontWeight="400">{description}</Text>
            <Text fontWeight="400">{content}</Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
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
