import React from "react";
import styled from "@emotion/styled/macro";

const Image = styled.img`
  width: 10rem;
  height: 10rem;
`;

const SearchImage: React.FC = () => {
  return (
    <div>
      <Image src="https://cdn2.thedogapi.com/images/_q5yhP_X_.jpg" alt="사진" />
    </div>
  );
};

export default SearchImage;
