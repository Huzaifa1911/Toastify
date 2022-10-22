import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const AppWrapper = ({}) => {
  useEffect(() => SplashScreen.hide(), []);
  return (
    <View>
      <Text>AppWrapper</Text>
    </View>
  );
};

export default AppWrapper;
