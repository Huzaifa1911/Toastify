import {Appearance, View} from 'react-native';
import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import AppWrapper from './AppWrapper';
import {ToastifyCustomTheme} from './assets';
import {AssetIconsPack, VectorIconsPack} from './Icons';

const App = () => {
  const defaultTheme = Appearance.getColorScheme() === 'dark' ? eva.dark : eva.light;
  return (
    <>
      <IconRegistry icons={[EvaIconsPack, VectorIconsPack, AssetIconsPack]} />
      <ApplicationProvider {...eva} theme={{...defaultTheme, ...ToastifyCustomTheme}}>
        <View>
          <AppWrapper />
        </View>
      </ApplicationProvider>
    </>
  );
};

export default App;
