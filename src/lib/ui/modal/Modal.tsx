import { useClickOutside } from "@/lib/hooks";
import { Spacing } from "@/lib/theme";
import { FC, useRef } from "react";
import { Overlay } from "..";
import { Button } from "../button";
import { Container } from "../container";
import { CloseIcon } from "../icons";
import { H2 } from "../typography";
import { Heading, Root } from "./Modal.styled";

export interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  close: () => void;
  title?: string;
  hideTitleBorder?: boolean;
  maxWidth?: Screen;
  hideCloseButton?: boolean;
  padding?: Spacing;
  hideHeading?: boolean;
  noBorder?: boolean;
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  title,
  hideTitleBorder,
  close,
  maxWidth,
  hideCloseButton,
  padding,
  hideHeading,
  noBorder,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useClickOutside(contentRef, () => {
    close();
  });

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Root>
        <Container padding={padding} bgColor="white" bordered={!noBorder} maxWidth={maxWidth}>
          {!hideHeading && (
            <Heading hideTitleBorder={hideTitleBorder}>
              <div />
              <H2>{title}</H2>

              {!hideCloseButton && (
                <Button ghost onClick={close}>
                  <CloseIcon />
                </Button>
              )}
            </Heading>
          )}
          {children}
        </Container>
      </Root>
    </Overlay>
  );
};