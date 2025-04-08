import React from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    fadeIn,
    fadeOut,
    animatedTop,
    animatedOpacity,
    startMovingTopPosition,
  } = useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            top: 0,
            transform: [{translateY: animatedTop}],
          },
        ]}
      />
      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 1000,
          });
        }}
        style={{marginTop: 20}}>
        <Text>Fade in</Text>
      </Pressable>
      <Pressable onPress={() => fadeOut({})} style={{marginTop: 20}}>
        <Text>Fade out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
