import React, {useContext} from 'react';
import {globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
}
export const Subtitle = ({text, safe = false, backgroundColor}: Props) => {
  const {top} = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);

  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        backgroundColor: backgroundColor
          ? backgroundColor
          : colors.cardBackground,
        marginBottom: 10,
        color: colors.text,
      }}>
      {text}
    </Text>
  );
};
