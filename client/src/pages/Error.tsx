import React from "react";
import styled from "@emotion/styled/macro";

const Base = styled.div`
  margin-top: 10rem;
  font-size: 3rem;
  text-align: center;
`;

const Text = styled.div``;

const Error: React.FC = () => {
  return (
    <Base>
      <Text>에러가 발생했어요</Text>
    </Base>
  );
};

export default Error;
