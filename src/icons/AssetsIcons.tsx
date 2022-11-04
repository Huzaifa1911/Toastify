import React from 'react';
import {Image, ImageProps, ImageSourcePropType} from 'react-native';

const ImageIconsProvider = (source: ImageSourcePropType) => ({
  toReactElement: (props: ImageProps) => <Image {...props} source={source} />,
});

export const AssetIconsPack = {
  name: 'assets',
  icons: {
    // import your iamges here.
    toast: ImageIconsProvider(require('../assets/images/toast')),
  },
};
