import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {colors} from '../../config/theme/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {
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
