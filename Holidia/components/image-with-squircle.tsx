import { Canvas, Image as SkiaImage, useImage } from '@shopify/react-native-skia';
import { View } from 'react-native';

type ImageWithSquircleProps = {
  image: string;
  width?: number;
  height?: number;
  borderRadius?: number;
};

const ImageWithSquircle = ({
  image,
  height = 280,
  width = 296,
  borderRadius = 40,
}: ImageWithSquircleProps) => {
  const imageUrl = useImage(image);
  return (
    <Canvas
      style={{
        width,
        height,
        marginHorizontal: 4,
      }}>
      <SkiaImage width={width} height={height} image={imageUrl} />
    </Canvas>
  );
};

export default ImageWithSquircle;
