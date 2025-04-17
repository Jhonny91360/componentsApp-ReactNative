import React, {useContext, useState} from 'react';
import {View, Modal} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {ThemeContext} from '../../context/ThemeContext';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {colors} = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title text="Modal" safe />

      <Button text="Show Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="fade">
        <View style={{flex: 1, backgroundColor: colors.cardBackground}}>
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
