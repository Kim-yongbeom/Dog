import React from "react";
import styled from "@emotion/styled/macro";

const Base = styled.div`
  margin-top: 10rem;
  font-size: 3rem;
  text-align: center;
`;

const Text = styled.div``;

const NotFound: React.FC = () => {
  return (
    <Base>
      <Text>주소를 찾을수 없어요</Text>
    </Base>
  );
};

export default NotFound;
