import React from 'react';
import styled from 'styled-components';

const TitleUI = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  color: var(--primary-blue-color);
  text-align: center;
  margin: 10px 0px 40px 0px;

  @media only screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

const Title = ({ text }) => {
  return <TitleUI>{text}</TitleUI>;
};

export { Title };
