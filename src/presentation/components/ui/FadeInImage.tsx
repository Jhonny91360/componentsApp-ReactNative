import React, {useState} from 'react';
import {
  View,
  Text,
  ImageStyle,
  StyleProp,
  Image,
  Animated,
  ActivityIndicator,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}
export const FadeInImage = ({uri, style}: Props) => {
  const {animatedOpacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          size={30}
          color="grey"
        />
      )}

      <Animated.Image
        source={{uri}}
        style={[style, {opacity: animatedOpacity}]}
        onLoadEnd={() => {
          fadeIn({toValue: 1, duration: 1000});
          setIsLoading(false);
        }}></Animated.Image>
    </View>
  );
};
