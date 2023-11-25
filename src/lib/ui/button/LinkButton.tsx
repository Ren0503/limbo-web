import { FC } from "react";
import { ButtonProps } from "./Button";
import { Link } from "./Button.styled";

export interface LinkButtonProps extends Omit<ButtonProps, 'color' | 'textColor'> { }

export const LinkButton: FC<LinkButtonProps> = ({ children, ...otherProps }) => {
  return <Link {...otherProps}>{children}</Link>;
};

