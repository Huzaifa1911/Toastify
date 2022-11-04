import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Button, IconProps} from '@ui-kitten/components';

import {Icons} from './Icons';

const FacebookIcon = (props: IconProps) => <Icons {...props} name="home-repair-service" pack="vector" type="MaterialIcons" color="red" size={20} />;

const AppWrapper = () => {
  useEffect(() => SplashScreen.hide(), []);
  return (
    <SafeAreaView>
      <View>
        <Text>AppWrapper</Text>
        <Button accessoryLeft={FacebookIcon}>Hello</Button>
      </View>
      <Icons t="image"   />
    </SafeAreaView>
  );
};

export default AppWrapper;
