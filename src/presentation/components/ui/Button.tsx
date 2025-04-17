import React, {useContext} from 'react';
import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;

  onPress: () => void;
}
export const Button = ({text, style, onPress}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        style,
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
      ]}>
      <Text
        style={[globalStyles.btnPrimaryText, {color: colors.buttonTextColor}]}>
        {text}
      </Text>
    </Pressable>
  );
};
