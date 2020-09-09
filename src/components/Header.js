import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Header = () => {
  return (
    <div>
      <Image src="/images/home-page-header.png" alt="home-page-header"/>
    </div>
  )
};

export default Header;