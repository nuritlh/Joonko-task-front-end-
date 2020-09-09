import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  letter-spacing: 0px;
  font-size: 1.875rem;
  text-align: center;
  letter-spacing: 0px;
  padding-bottom: 22px;
  font-weight: bold;

`;

const Input = styled.input`
  width: 520px;
  text-align: center;
`;

const Button = styled.button``;

const TitleText = 'Ready to accelerate your diversity recruiting efforts?';

const Email = () => {
  return(
    <Wrapper>
      <Title>{TitleText}</Title>
      <div>
        <Input/>
        <Button>Schedule a call</Button>
      </div>
    </Wrapper>
  )

};

export default Email;