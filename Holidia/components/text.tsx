import { TextProps } from 'react-native';
import { Text as RNText } from 'react-native';
import { twMerge } from 'tailwind-merge';

type TypographyVariant =
  | 'title'
  | 'subtitle'
  | 'subtitle-primary'
  | 'body'
  | 'caption'
  | 'button'
  | 'display'
  | 'caption-primary'
  | 'body-primary';

interface TextComponentProps extends TextProps {
  variant?: TypographyVariant;
  className?: string;
}

const variantStyles: Record<TypographyVariant, string> = {
  title: 'text-4xl font-bold',
  subtitle: 'text-xl font-semibold',
  'subtitle-primary': 'text-lg font-semibold text-primary',
  body: 'text-base font-semibold',
  'body-primary': 'text-base text-primary',
  caption: 'text-sm font-medium',
  'caption-primary': 'text-sm text-primary font-medium',
  button: 'text-xl text-primary font-semibold text-white text-center',
  display: 'text-3xl font-bold',
};

const Text = ({ variant='title', className, children, ...props }: TextComponentProps) => {
  const textStyle = twMerge('text-black', variantStyles[variant], className);
  return (
    <RNText className={textStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
