import React from 'react';
import styled from 'styled-components';

const ContentUI = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
`;

const Content = ({ children }) => {
  return <ContentUI>{children}</ContentUI>;
};

export { Content };
