import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {VectorIconsProps} from './types';

const VectorIcons = ({name, color, size, type, style}: VectorIconsProps) => {
  switch (type) {
    case 'FontAwesome':
      return <FontAwesome name={name} color={color} size={size} style={style} />;
    case 'Ionicons':
      return <Ionicons name={name} color={color} size={size} style={style} />;
    case 'AntDesign':
      return <AntDesign name={name} color={color} size={size} style={style} />;
    case 'EvilIcons':
      return <EvilIcons name={name} color={color} size={size} style={style} />;
    case 'Entypo':
      return <Entypo name={name} color={color} size={size} style={style} />;
    case 'Feather':
      return <Feather name={name} color={color} size={size} style={style} />;
    case 'MaterialIcons':
      return <MaterialIcons name={name} color={color} size={size} style={style} />;
    default:
      return <></>;
  }
};

const VectorIconProvider = (name: string, type: string) => ({
  toReactElement: (props: Omit<VectorIconsProps, 'name' | 'type'>) => VectorIcons({type, name, ...props}),
});

export const VectorIconsPack = {
  name: 'vector',
  icons: new Proxy(
    {},
    {
      get(target, name: string, type: string) {
        return VectorIconProvider(name, type);
      },
    },
  ),
};
