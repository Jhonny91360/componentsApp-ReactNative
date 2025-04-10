import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {globalStyles} from '../../../config/theme/theme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <ScrollView>
      <CustomView margin>
        <Title safe text="TextInputScreen"></Title>

        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="Nombre completo"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={value => setForm({...form, name: value})}
          />

          <TextInput
            style={globalStyles.input}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={value => setForm({...form, email: value})}
          />

          <TextInput
            style={globalStyles.input}
            placeholder="Telefono"
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
