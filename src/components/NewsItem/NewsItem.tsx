import React from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  HStack,
  Stack,
} from 'native-base';

import {IArticle, INewsProps} from '../../interfaces/News';
import moment from 'moment';

const NewsItem = ({item}: INewsProps) => {
  
    const getPublishedDate = (publishedAt: string) => {
    return moment(publishedAt).format('MMMM DD');
  };

  const {author, title, urlToImage, publishedAt}: IArticle = item;
  return (
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
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
              fontWeight="400">
              {getPublishedDate(publishedAt)}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default NewsItem;
