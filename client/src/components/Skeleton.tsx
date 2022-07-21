import React, { useMemo } from "react";
import styled from "@emotion/styled/macro";
import { keyframes, css } from "@emotion/react";

interface Props {
  width?: number;
  height?: number;
  circle?: boolean;
  rounded?: boolean;
  count?: number;
  unit?: string;
  animation?: boolean;
  color?: string;
  style?: React.CSSProperties;
}

const pulseKeyframe = keyframes`
  0% {
    opacity: 1
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1
  }
`;

const pulseAnimation = css`
  animation: ${pulseKeyframe} 1s ease-in-out infinite;
`;

const Base = styled.div<Props>`
  ${({ color }) => color && `background-color: ${color}`};
  ${({ rounded }) => rounded && "border-radius: 8px"};
  ${({ circle }) => circle && "border-radius: 50%"};
  ${({ width, height }) => (width || height) && "display: block"};
  ${({ animation }) => animation && pulseAnimation};
  width: ${({ width, unit }) => width && unit && `${width}${unit}`};
  padding-bottom: ${({ height, unit }) => height && unit && `${height}${unit}`};
`;

const Content = styled.span`
  opacity: 0;
`;

const Skeleton: React.FC<Props> = ({
  animation = true,
  width,
  height,
  circle,
  rounded,
  count,
  unit = "%",
  color = "#DDD",
  style,
}) => {
  const content = useMemo(
    () => [...Array({ length: count })].map(() => "-").join(""),
    [count]
  );
  return (
    // prop들을 전달 해줘야한다
    <Base
      style={style}
      rounded={rounded}
      circle={circle}
      width={width}
      height={height}
      animation={animation}
      unit={unit}
      color={color}
    >
      <Content>{content}</Content>
    </Base>
  );
};

export default Skeleton;
