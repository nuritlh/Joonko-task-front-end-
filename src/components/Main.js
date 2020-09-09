import React from 'react';
import styled from 'styled-components';
import Graph from './Graph';
import Email from './Email';

const Wrapper = styled.div`
  max-width: 999px;
  padding: 36px;
`;

const Title = styled.div`
  letter-spacing: 0px;
  font-size: 1.875rem;
  text-align: center;
  letter-spacing: 0px;
  padding-bottom: 22px;
  font-weight: bold;
`;

const Paragraph = styled.div`
  font-size: 0.875rem;
  padding-bottom: 53px;
`;


// move text to JSON for data text and import
const titleText = 'A little bit about us and why we care about diversity';
const paragraphText = `At PayPal, our mission is to ignite opportunity by setting the world in motion.
We see direct parallels between how we ignite opportunity through our company and how we ignite it within our company.
But we also know that a solely data-driven approach will never be sufficient, because D&I is more than a box to check or a 
target to hit. The numbers matter, but they’re only a starting point; acommitment to diversity and inclusion has to run much deeper. 
That’s why we’ve set an audacious goal: to make Uber the most diverse, equitable, and inclusive workplace on the planet. And we’re not 
just setting high expectations for our own good. We’re aiming sky-high because we know from experience that reducing and eliminating 
inequity is hard to do if all you shoot for is incremental change.`

const Main = () => {
  return (
    <Wrapper>
      <Title>{titleText}</Title>
      <Paragraph>{paragraphText}</Paragraph>
      <Graph/>
      <Email/>
    </Wrapper>
  )
};

export default Main;