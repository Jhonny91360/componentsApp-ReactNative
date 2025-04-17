import React, {useContext, useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {RefreshControl, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {colors} = useContext(ThemeContext);

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 4000);
  };
  const {top} = useSafeAreaInsets();
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'yellow']}
          onRefresh={onRefresh}
          progressBackgroundColor={colors.cardBackground}
        />
      }>
      <CustomView>
        <Title text="PullToRefreshScreen" safe />
      </CustomView>
    </ScrollView>
  );
};
