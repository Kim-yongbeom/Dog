import React from "react";
import styled from "@emotion/styled/macro";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  margin: 0.5rem 0 0 0;
  padding: 0;
  font-size: 1rem;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

const Item: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="https://img.hankyung.com/photo/202109/99.26479073.1.jpg" />
      </ImageWrapper>
      <Info>
        <Title>웰시코기</Title>
        <Description>다리가 짧다...</Description>
      </Info>
    </Container>
  );
};

export default Item;
