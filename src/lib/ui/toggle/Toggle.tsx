import { FC } from "react";
import { CheckBox, Label, Root } from "./Toggle.styled";

export interface ToogeProps {
  name: string;
  [x: string]: any;
}

export const Toggle: FC<ToogeProps> = ({ name, ...props }) => {
  return (
    <Root>
      <CheckBox id={name} name={name} type="checkbox" {...props} />
      <Label htmlFor={name} />
    </Root>
  );
};