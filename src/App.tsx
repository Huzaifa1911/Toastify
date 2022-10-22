import {Appearance, View} from 'react-native';
import React from 'react';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import AppWrapper from './AppWrapper';
import {ToastifyCustomTheme} from './assets';

const App = () => {
  const defaultTheme = Appearance.getColorScheme() === 'dark' ? eva.dark : eva.light;
  return (
    <ApplicationProvider {...eva} theme={{...defaultTheme, ...ToastifyCustomTheme}}>
      <View>
        <AppWrapper />
      </View>
    </ApplicationProvider>
  );
};

export default App;
