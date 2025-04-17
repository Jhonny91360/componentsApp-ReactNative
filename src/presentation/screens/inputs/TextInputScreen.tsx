import React, {useContext, useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {globalStyles} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const {colors} = useContext(ThemeContext);

  return (
    <ScrollView>
      <CustomView margin>
        <Title safe text="TextInputScreen"></Title>

        <Card>
          <TextInput
            style={{
              ...globalStyles.input,
              color: colors.text,
              borderColor: colors.text,
            }}
            placeholder="Nombre completo"
            placeholderTextColor={colors.text}
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={value => setForm({...form, name: value})}
          />

          <TextInput
            style={{
              ...globalStyles.input,
              color: colors.text,
              borderColor: colors.text,
            }}
            placeholder="Email"
            placeholderTextColor={colors.text}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={value => setForm({...form, email: value})}
          />

          <TextInput
            style={{
              ...globalStyles.input,
              color: colors.text,
              borderColor: colors.text,
            }}
            placeholder="Telefono"
            placeholderTextColor={colors.text}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="phone-pad"
            onChangeText={value => setForm({...form, phone: value})}
          />
        </Card>

        <View style={{height: 100}}>
          <Text>{JSON.stringify(form, null, 4)}</Text>
        </View>
        <View style={{height: 100}}>
          <Text>{JSON.stringify(form, null, 4)}</Text>
        </View>
        <View style={{height: 100}}>
          <Text>{JSON.stringify(form, null, 4)}</Text>
        </View>
        <View style={{height: 100}}>
          <Text>{JSON.stringify(form, null, 4)}</Text>
        </View>
        <View style={{height: 100}}>
          <Text>{JSON.stringify(form, null, 4)}</Text>
        </View>
        <View style={{height: 100}}>
          <Text>{JSON.stringify(form, null, 4)}</Text>
        </View>
      </CustomView>
    </ScrollView>
  );
};
