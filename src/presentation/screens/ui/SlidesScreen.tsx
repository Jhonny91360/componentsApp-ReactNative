import React, {useContext, useRef, useState} from 'react';
import {
  View,
  Text,
  ImageSourcePropType,
  useWindowDimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {Button} from '../../components/ui/Button';
import {useNavigation} from '@react-navigation/native';
import {CustomView} from '../../components/ui/CustomView';
import {ThemeContext} from '../../context/ThemeContext';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];

export const SlidesScreen = () => {
  const [currenSlideIndex, setCurrenSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();
  const {colors} = useContext(ThemeContext);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    setCurrenSlideIndex(slide > 0 ? slide : 0);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <CustomView
      style={{
        flex: 1,
        //backgroundColor: colors.background,
      }}>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({item}) => <SlideItem item={item} key={item.title} />}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        onScroll={onScroll}
        style={{backgroundColor: colors.background}}
      />

      {currenSlideIndex === items.length - 1 ? (
        <Button
          text="Finalizar"
          style={{position: 'absolute', bottom: 60, right: 30, width: 100}}
          onPress={() => navigation.goBack()}
        />
      ) : (
        <Button
          text="Siguiente"
          style={{position: 'absolute', bottom: 60, right: 30, width: 100}}
          onPress={() => scrollToSlide(currenSlideIndex + 1)}
        />
      )}
    </CustomView>
  );
};

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({item}: SlideItemProps) => {
  const {width} = useWindowDimensions();
  const {title, img, desc} = item;
  const {colors} = useContext(ThemeContext);

  return (
    <CustomView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
        width: width,
      }}>
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          ...globalStyles.title,
          color: colors.primary,
        }}>
        {' '}
        {title}{' '}
      </Text>

      <Text
        style={{
          marginTop: 20,
          color: colors.text,
        }}>
        {desc}
      </Text>
    </CustomView>
  );
};
