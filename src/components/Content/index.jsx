import React from 'react';
import styled from 'styled-components';

const ContentUI = styled.main`
  display: flex;
  width: calc(100% - 70px);
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  margin: 80px 0px 50px;
  padding: 10px 15px;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const Content = ({ children }) => {
  return <ContentUI>{children}</ContentUI>;
};

export { Content };
