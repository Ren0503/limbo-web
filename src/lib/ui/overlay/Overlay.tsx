import { FC } from "react";
import { Root } from "./Overlay.styled";

export interface OverlayProps {
  transparency?: string;
  children: React.ReactNode;
}

export const Overlay: FC<OverlayProps> = ({ children, transparency }) => {
  return <Root transparency={transparency}> {children} </Root>;
};