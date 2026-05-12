import { Text as RNText, TextProps } from "react-native";
import { twMerge } from "tailwind-merge";

type TypographyVariant =
  | "title"
  | "subtitle"
  | "body"
  | "caption"
  | "button"
  | "display"
  | "caption-primary"
  | "body-primary"
  | "subtitle-primary"
  | "subtitle-secondary"
  | "body-secondary";

interface TextComponentProps extends TextProps {
  className?: string;
  variant?: TypographyVariant;
}

const variantStyles: Record<TypographyVariant, string> = {
  title: "text-2xl font-bold",
  subtitle: "text-xl font-semibold",
  "subtitle-primary": "text-xl font-semibold text-primary",
  "subtitle-secondary": "text-xl font-semibold text-secondary text-white",
  body: "text-base",
  "body-primary": "text-base text-primary",
  "body-secondary": "text-base text-secondary",
  caption: "text-sm font-medium text-white",
  "caption-primary": "text-sm text-primary font-medium",
  button: "text-xl font-semibold text-white text-center",
  display: "text-3xl font-bold",
};

const Text = ({
  variant = "body",
  children,
  className,
  ...props
}: TextComponentProps) => {
  const textStyle = twMerge(
    "text-foreground",
    variantStyles[variant],
    className
  );
  return (
    <RNText className={textStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;

