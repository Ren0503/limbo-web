import { Spacing as SpacingType } from "@/lib/theme";
import { FC } from "react";
import { Root } from "./Spacing.styled";

export interface SpacingProps {
  children?: React.ReactNode;
  top?: SpacingType;
  right?: SpacingType;
  bottom?: SpacingType;
  left?: SpacingType;
  inline?: boolean;
  hideOnSm?: boolean;
}

export const Spacing: FC<SpacingProps> = ({ children, ...props }) => {
  return <Root {...props}>{children}</Root>;
};
