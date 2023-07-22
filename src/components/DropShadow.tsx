import React, { ReactNode } from "react";
import { styled } from "styled-components/native";
import { Layout } from "@ui-kitten/components";

type DropShadowProps = {
  children: JSX.Element;
  borderRadius?: number;
  width?: number;
  height?: number;
};

const DropShadow = ({
  children,
  borderRadius,
  width,
  height
}: DropShadowProps) => {
  return (
    <Container borderRadius={borderRadius} width={width} height={height}>
      {children}
    </Container>
  );
};

const Container = styled(Layout)<{
  borderRadius?: number;
  width?: number;
  height?: number;
}>`
  elevation: 5;
  shadow-color: #030002;
  shadow-opacity: 0.25;
  shadow-radius: 5px;
  margin-vertical: 10px;
  border-radius: ${p => p.borderRadius}px;
  width: ${p => p.width ?? 0}px;
  height: ${p => p.height ?? 0}px;
`;

export default DropShadow;
