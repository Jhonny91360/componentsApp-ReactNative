import React, {useState} from 'react';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {colors} from '../../../config/theme/theme';
import {FadeInImage} from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const loadMoreNumbers = () => {
    setTimeout(() => {
      const newArray = [...numbers];
      for (let i = 0; i < 5; i++) {
        newArray.push(newArray.length + 1);
      }
      setNumbers(newArray);
    }, 3000);
  };
  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={numbers}
        onEndReached={loadMoreNumbers}
        onEndReachedThreshold={0.6}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => ListItem({number: item})}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={50} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}
const ListItem = ({number}: ListItemProps) => {
  return (
    // <Image
    //   source={{uri: `https://picsum.photos/id/${number}/200/300`}}
    //   style={{width: '100%', height: 400, marginBottom: 10}}></Image>
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/200/300`}
      style={{width: '100%', height: 400, marginBottom: 10}}
    />
  );
};
