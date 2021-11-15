import {
  Select,
  VStack,
  CheckIcon,
  HStack,
  FormControl,
} from 'native-base';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {getSupportedLanguages} from '../lang/lang';
import BaseContainer from '../components/BaseContainer/BaseContainer';
import {DARK_COLOR, LIGHT_COLOR} from '../styles';
import {useColorScheme} from 'react-native';

const Settings = () => {
  const {t, i18n} = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const theme = useColorScheme();

  const handleChangeLang = async (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };

  const renderSelectLanguage = () => {
    return (
      <Select
        selectedValue={lang}
        minWidth="250"
        placeholder="Choose Service"
        bg={LIGHT_COLOR}
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={handleChangeLang}>
        {getSupportedLanguages().map((value, index) => (
          <Select.Item
            label={value.label}
            value={value.value}
            key={index.toString()}
          />
        ))}
      </Select>
    );
  };

  return (
    <BaseContainer>
      <VStack space={4} padding={'4'}>
        <HStack justifyContent="space-between">
          <FormControl.Label
            _text={{
              color: theme == 'dark' ? LIGHT_COLOR : DARK_COLOR,
              fontWeight: 'bold',
            }}
            justifyContent="center"
            textAlign="center"
            alignItems="center">
            {t('language')}
          </FormControl.Label>
          {renderSelectLanguage()}
        </HStack>
      </VStack>
    </BaseContainer>
  );
};

export default Settings;
