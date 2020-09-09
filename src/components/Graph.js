import React, { useState } from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

const Wrapper = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 9px 16px #0000001C;
  padding: 20px;
  margin-bottom: 97PX;
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
  text-align: center;
`;

const GraphWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const DoughnutWrapper = styled.div`

`;
const GraphInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const GraphInput = styled.input`
  width: 42px;
  height: 26px;
  border: 0.5px solid #040464;
  border-radius: 5px;
  margin-bottom: 36px;
  margin-right: 5px;
`;

const Error = styled.div`
`;


// move text to JSON for data text and import
const TitleText = 'Representation at PayPal';
const paragraphText = 'Display the representation across your organization, from race and gender, to pride and service.';

const Graph = () => {
  const [male, setMale] = useState(30);
  const [female, setFemale] = useState(50);
  const [blank, setBlank] = useState(100-male-female);
  const [inputError, setErrorInput] = useState('');

  const data = {
    labels: ['male', 'female', ''],
    datasets: [{
      data: [male, female, blank],
      backgroundColor: [
        'rgb(123, 63, 242)',
        'rgb(255,165,46)',
        'rgba(255, 255, 255, 255)',
      ]
    }]
  };

  const options = {
    maintainAspectRatio : true,
    responsive: true,
    legend: {
      display: false
    }
  };

  const inputChanged = (e) => {
    if (+e.target.value < 0 || +e.target.value > 100) {
      setErrorInput('Invalid Input')
    } else {
      if(inputValidation(+e.target.value, e.target.name)) {
        if (e.target.name === 'male') {
          setMale(+e.target.value);
          setBlank(100 - +e.target.value - female);
        } else {
          setFemale(+e.target.value);
          setBlank(100 - +e.target.value - male);
        }
        setErrorInput('')
      } else {
        setErrorInput('Oops… looks like you got the numbers wrong')
      }
    }
  };

  const inputValidation = (val, name) => {
    if (name === 'male') {
    return (val + female <= 100);
    } else {
      return (val + male <= 100);
    }
  };

  return (
    <Wrapper>
      <Title>{TitleText}</Title>
      <Paragraph>{paragraphText}</Paragraph>
      <GraphWrapper>
        <DoughnutWrapper >
          <Doughnut data={data} options={options}/>
        </DoughnutWrapper>
        <GraphInputWrapper>
          <div>
            <GraphInput type="number" name="male" onBlur={inputChanged} min="0" max="100"/>
            <span style={{color:'#7B3FF2' }} >% Male</span>
          </div>
          <div>
            <GraphInput type="number" name="female" onBlur={inputChanged} min="0" max="100"/>
            <span style={{color:'#FFA52E' }}>% Female</span>
          </div>
          <Error>{inputError}</Error>
        </GraphInputWrapper>
      </GraphWrapper>
    </Wrapper>
  )
};

export default Graph;