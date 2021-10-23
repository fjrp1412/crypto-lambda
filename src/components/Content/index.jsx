import React from 'react';
import styled from 'styled-components';

const ContentUI = styled.main`
  display: flex;
  width: calc(100% - 100px);
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  margin-top: 80px;
`;

const Content = ({ children }) => {
  return <ContentUI>{children}</ContentUI>;
};

export { Content };
