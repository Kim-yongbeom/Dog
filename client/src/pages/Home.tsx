import styled from "@emotion/styled/macro";
import React from "react";
import SearchImage from "../components/SearchImage";

const Base = styled.div`
  padding-top: 5rem;
`;

const Home: React.FC = () => {
  return (
    <Base>
      <SearchImage />
    </Base>
  );
};

export default Home;
