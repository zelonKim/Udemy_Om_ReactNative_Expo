import { ImageStyle, StyleProp } from 'react-native';
import { Image as ExpoImage } from 'expo-image';

type ImageProps = {
  source: string;
  style?: StyleProp<ImageStyle>;
};

const defaultStyles: ImageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 16,
};

const Image = ({ source, style }: ImageProps) => {
  return (
    <ExpoImage
      source={source}
      style={[defaultStyles, style]}
      contentFit="cover"
      transition={1000}
    />
  );
};

export default Image;
