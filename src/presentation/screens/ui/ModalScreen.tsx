import React, {useState} from 'react';
import {View, Text, Modal} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <CustomView margin>
      <Title text="Modal" safe />

      <Button text="Show Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="fade">
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.2)'}}>
          <View style={{padding: 20}}>
            <Title text="Modal content" safe />
          </View>

          <View style={{flex: 1}} />

          <Button
            text="Close Modal"
            onPress={() => setIsVisible(false)}
            style={{height: 40, borderRadius: 0}}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
