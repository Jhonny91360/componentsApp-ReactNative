import React from 'react';
import {colors, globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
}
export const Subtitle = ({
  text,
  safe = false,
  backgroundColor = colors.background,
}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        backgroundColor,
        marginBottom: 10,
      }}>
      {text}
    </Text>
  );
};
