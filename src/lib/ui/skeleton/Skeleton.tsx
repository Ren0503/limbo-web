import { FC } from "react";
import { Root } from "./Skeleton.styled";

export interface SkeletonProps {
  count?: number;
  width?: number;
  height?: number;
  inline?: boolean;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  radius?: string;
}

export const Skeleton: FC<SkeletonProps> = ({ count, width, height, inline, top, right, bottom, left, radius }) => {
  const loopSkeleton = () => {
    const skeleton = [];
    for (let i = 0; i < (count || 1); i++) {
      skeleton.push(
        <Root
          key={i}
          top={top}
          left={left}
          right={right}
          width={width}
          height={height}
          inline={inline}
          bottom={bottom}
          radius={radius}
        />
      );
    }
    return <>{skeleton}</>;
  };

  return loopSkeleton();
};
