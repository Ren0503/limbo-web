import { FC } from "react";
import { UserIcon } from "../icons";
import { Spacing } from "../spacing";
import { Typography } from "../typography";
import { Container, Image, ImageContainer, Online, Root } from "./Avatar.styled";

interface AvatarProps {
  size?: number;
  image?: string;
  fullName?: string;
  isOnline?: boolean;
  isActive?: boolean;
}

export const Avatar: FC<AvatarProps> = ({ size, image, fullName, isOnline, isActive }) => {
  return (
    <Root>
      <Container size={size}>
        <ImageContainer>{image ? <Image alt={fullName} src={image} /> : <UserIcon width="100%" />}</ImageContainer>
        {isOnline && <Online />}
      </Container>
      {fullName && (
        <Spacing left="xs">
          <Typography size="sm" color={isActive ? 'primary' : 'text'}>
            {fullName}
          </Typography>
        </Spacing>
      )}
    </Root>
  );
};
