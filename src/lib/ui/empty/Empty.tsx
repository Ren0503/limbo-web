import { FC, ReactNode } from "react";
import { EmptyIcon } from "../icons";
import { Spacing } from "../spacing";
import { Root } from "./Empty.styled";

interface EmptyProps {
  children: ReactNode;
}

export const Empty: FC<EmptyProps> = ({ children }) => {
  return (
    <Root>
      <EmptyIcon width="80" />
      <Spacing top="md" />
      {children}
    </Root>
  );
};
