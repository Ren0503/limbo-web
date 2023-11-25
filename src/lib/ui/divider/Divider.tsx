import { GreyColors, Spacing } from "@/lib/theme";
import { FC } from "react";
import { Root } from "./Divider.styled";

export interface DividerProps {
  spacing?: Spacing;
  backgroundColorTone?: GreyColors;
}

export const Divider: FC<DividerProps> = (props) => {
  return <Root {...props} />;
};
