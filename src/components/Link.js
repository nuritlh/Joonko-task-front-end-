import React from 'react';
import styled from 'styled-components';

const ALink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  margin: 11px;
`;

const Link = ({ data }) => {
  const { href, logoSrc, text } = data;
  return (
    <div>
      <ALink href={href} target="blank">
        <img src={logoSrc} alt="link-logo"/>
        {text}
      </ALink>
    </div>
  )
};

export default Link;