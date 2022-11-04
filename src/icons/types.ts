import {IconProps} from '@ui-kitten/components';
import {ImageStyle, StyleProp, ViewStyle} from 'react-native';

type VectorIconsProps = {
  t: 'vector';
  type: string;
  name: string;
  color: string;
  size: number;
  style?: StyleProp<ViewStyle>;
  pack?: never;
  huzaifa: never;
  animation?: never;
  animationConfig?: never;
};

type ImageIconProps = {
  t: 'image';
  style?: StyleProp<ImageStyle>;
  name: string;
  huzaifa: string;
  type: never;
  color: never;
  size: never;
  pack?: never;
  animation?: never;
  animationConfig?: never;
};

type IconProps_ = IconProps & {
  style: never;
  type: never;
  color: never;
  size: never;
};

export type Mix = ImageIconProps | VectorIconsProps; //| IconProps_;
