import React, { useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import Placeholder from "./Placeholder";
import Item from "./item";

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

type ImageReqType = {
  id: string;
  url: string;
};

interface SearchImageProps {
  image: (reqData: ImageReqType) => void;
}

const SearchImage: React.FC<SearchImageProps> = ({ image }) => {
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
