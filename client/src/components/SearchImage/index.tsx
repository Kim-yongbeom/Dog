import React, { useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import Skeleton from "../Skeleton";

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.75rem;
  row-gap: 1.5rem;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.5rem;
    row-gap: 1rem;
  }
`;

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

const SearchImage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Base>
      {loading
        ? Array.from({ length: 20 }).map((_, idx) => <Placeholder key={idx} />)
        : Array.from({ length: 20 }).map((_, idx) => <Item key={idx} />)}
    </Base>
  );
};

export default SearchImage;
