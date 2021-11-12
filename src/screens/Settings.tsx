import {
  NativeBaseProvider,
  Select,
  VStack,
  CheckIcon,
  HStack,
  FormControl,
} from 'native-base';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {getSupportedLanguages} from '../lang/lang';
import {Navigation} from 'react-native-navigation';
import {getAppRoot} from '../navigation/navigation';

const Settings = () => {
  const {t, i18n} = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const handleChangeLang = async (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
    Navigation.setRoot({
      root: {
        ...getAppRoot(),
      },
    });
  };

  const renderSelectLanguage = () => {
    return (
      <Select
        selectedValue={lang}
        minWidth="250"
        placeholder="Choose Service"
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
    <NativeBaseProvider>
      <VStack space={4} padding={'4'}>
        <HStack justifyContent="space-between">
          <FormControl.Label
            justifyContent="center"
            textAlign="center"
            alignItems="center">
            {t('language')}
          </FormControl.Label>
          {renderSelectLanguage()}
        </HStack>
      </VStack>
    </NativeBaseProvider>
  );
};

export default Settings;
