import React, {useContext, useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {Switch} from 'react-native';
import {CustomSwitch} from '../../components/ui/CustomSwitch';
import {Separator} from '../../components/Separator';
import {ThemeContext} from '../../context/ThemeContext';

export const SwitchScreen = () => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {colors} = useContext(ThemeContext);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: false,
  });

  return (
    <CustomView style={{marginTop: 20, paddingHorizontal: 20}}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => setState({...state, isActive: value})}
          text="Esta activo?"
        />
        <Separator />

        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => setState({...state, isHungry: value})}
          text="Está hambriento?"
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => setState({...state, isHappy: value})}
          text="Está feliz?"
        />
      </Card>
    </CustomView>
  );
};
