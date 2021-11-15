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

import {IArticle, IArticlesProps} from '../../interfaces/News';
import {getPublishedDate} from '../../utilities/helper';
import {useColorScheme} from 'react-native';
import {DARK_COLOR, LIGHT_COLOR} from '../../styles';

const NewsItem = ({item}: IArticlesProps) => {
  const theme = useColorScheme();
  
  const {author, title, urlToImage, publishedAt}: IArticle = item;
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      borderWidth="1"
      marginBottom={"2"}
      borderColor={theme == 'dark' ? 'coolGray.600' : 'coolGray.200'}
      backgroundColor={theme == 'dark' ? 'gray.700' : 'gray.50'}>
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
            size="md"
            ml="-1"
            color={theme == 'dark' ? LIGHT_COLOR : DARK_COLOR}>
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
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color={theme == 'dark' ? 'warmGray.200' : 'coolGray.600'}
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
