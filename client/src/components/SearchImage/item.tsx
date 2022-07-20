import React from "react";
import styled from "@emotion/styled/macro";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 4%) 0rem 1rem 0rem
  border-radius: 0.25rem;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  padding: 0
  font-size: 1rem;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

const Item: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg" />
      </ImageWrapper>
      <Info>
        <Title>sea</Title>
        <Description>hi</Description>
      </Info>
    </Container>
  );
};

export default Item;
