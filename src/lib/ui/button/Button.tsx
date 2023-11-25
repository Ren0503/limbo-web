import { FontSize, FontWeight, GeneralColors, Radius } from "@/lib/theme";
import { FC } from "react";
import { Root } from "./Button.styled";

export interface ButtonProps {
  children: React.ReactNode;
  size?: FontSize;
  weight?: FontWeight;
  disabled?: boolean;
  radius?: Radius;
  text?: boolean;
  ghost?: boolean;
  fullWidth?: boolean;
  color?: GeneralColors;
  textColor?: GeneralColors;
  inline?: boolean;
  [x: string]: any;
}

export const Button: FC<ButtonProps> = ({ children, ...otherProps }) => {
  return <Root {...otherProps}>{children}</Root>;
};