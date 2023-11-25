import { GeneralColors, Radius, Shadows, Spacing, ZIndex } from "@/lib/theme";
import { ForwardRefRenderFunction } from "react";
import { Root } from "./Container.styled";

export interface ContainerProps {
  children: React.ReactNode;
  marginTop?: Spacing;
  maxWidth?: Screen;
  padding?: Spacing;
  paddingVertical?: Spacing;
  paddingHorizontal?: Spacing;
  zIndex?: ZIndex;
  radius?: Radius;
  bordered?: boolean;
  bgColor?: GeneralColors;
  shadow?: Shadows;
  centered?: boolean;
}

export const Container: ForwardRefRenderFunction<HTMLDivElement, ContainerProps> = ({ children, ...props }, ref) => {
  return (
    <Root {...props} ref={ref}>
      {children}
    </Root>
  );
};
