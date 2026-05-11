import { Text as RNText, TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

type TypographyVariant =
  | 'display'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'body-secondary'
  | 'caption'
  | 'caption-secondary'
  | 'button'
  | 'note';

interface TextComponentProps extends TextProps {
  className?: string;
  variant?: TypographyVariant;
}

const variantStyles: Record<TypographyVariant, string> = {
  display: 'text-[34px] font-bold ',
  title: 'text-[28px] font-bold ',
  subtitle: 'text-xl font-semibold ',
  body: 'text-base ',
'body-secondary': 'text-base ',
  caption: 'text-sm ',
  'caption-secondary': 'text-sm ',
  button: 'text-base font-semibold ',
  note: 'font-caveat text-2xl ',
};

const Text = ({
  variant = 'body',
  children,
  className,
  ...props
}: TextComponentProps) => {
  const textStyle = twMerge(variantStyles[variant], className);

  return (
    <RNText className={textStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;

