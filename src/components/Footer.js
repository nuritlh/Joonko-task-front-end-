import React from 'react';
import styled from 'styled-components';
import Link from './Link'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  // bottom: 0;
  // position: absolute;
  background-color: #010A60;
  color: #ffffff;
  font-size: 10px;
  height: 86px;
  align-items: center;
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  const joonko = {
    href: 'https://joonko.co/',
    logoSrc: '/images/joonko-logo.svg'
  };
  const facebook = {
    href: 'https://www.facebook.com/JoonkoHQ',
    logoSrc: '/images/facebook.svg'
  };
  const linkedIn = {
    href: 'https://www.linkedin.com/company/joonkohq',
    logoSrc: '/images/linkedIn.svg'
  };
  return (
    <Wrapper>
      <Link data={joonko}/>
      <RightWrapper>
        <Link data={facebook}/>
        <Link data={linkedIn}/>
      </RightWrapper>
    </Wrapper>
  )
};

export default Footer;