import React, {useContext} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={{
        alignSelf: 'center',
        width: '80%',
        height: 1,
        backgroundColor: colors.text,
        opacity: 0.2,
        marginVertical: 8,
      }}></View>
  );
};
