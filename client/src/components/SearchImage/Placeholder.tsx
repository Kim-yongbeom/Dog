import React from "react";
import styled from "@emotion/styled/macro";
import Skeleton from "../Skeleton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 4%) 0rem 1rem 0rem
  border-radius: 0.25rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Placeholder: React.FC = () => (
  <Container>
    <ImageWrapper>
      <Skeleton width={100} height={69} />
    </ImageWrapper>
    <Info>
      <Skeleton width={100} height={3} rounded />
      <div style={{ height: "0.5rem" }} />
      <Skeleton width={100} height={3} rounded />
    </Info>
  </Container>
);

export default Placeholder;
