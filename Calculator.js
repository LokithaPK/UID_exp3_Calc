import React, { useState } from 'react';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px; /* Adjusted width for more buttons */
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(248, 249, 250, 0.9); 
  background-size: cover;
  background-image: url('https://png.pngtree.com/thumb_back/fw800/background/20231027/pngtree-hexagonal-abstract-background-with-a-black-textured-surface-image_13704307.png');
`;

const Display = styled.div`
  width: 100%;
  height: 80px; 
  background-color: rgba(233, 236, 239, 0.8); 
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2.5em; 
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px; 
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Adjusted to 5 columns */
  gap: 15px; 
`;

const Button = styled.button`
  width: 100%;
  height: 60px; 
  font-size: 1.4em; 
  border-radius: 10px; 
  background-color: #ff7f50; /* Changed button color to Coral (orange shade) */
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ff6347; /* Darker shade of Coral */
  }
`;

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay('');
      setIsResultDisplayed(false);
    } else if (value === '=') {
      try {
        const evaluatedResult = eval(display);
        setDisplay(evaluatedResult.toString());
        setIsResultDisplayed(true);
      } catch {
        setDisplay('Error');
        setIsResultDisplayed(true);
      }
    } else if (['sin', 'cos', 'tan', 'log', 'sqrt'].includes(value)) {
      try {
        let result;
        if (value === 'sin') result = Math.sin(eval(display));
        if (value === 'cos') result = Math.cos(eval(display));
        if (value === 'tan') result = Math.tan(eval(display));
        if (value === 'log') result = Math.log10(eval(display));
        if (value === 'sqrt') result = Math.sqrt(eval(display));
        setDisplay(result.toString());
        setIsResultDisplayed(true);
      } catch {
        setDisplay('Error');
        setIsResultDisplayed(true);
      }
    } else {
      if (isResultDisplayed) {
        if (!isNaN(value)) {
          setDisplay(value); 
        } else {
          setDisplay(display + value); 
        }
        setIsResultDisplayed(false);
      } else {
        setDisplay(display + value);
      }
    }
  };

  return (
    <CalculatorContainer>
      <Display>{display}</Display>
      <ButtonGrid>
        {['7', '8', '9', '/', 'sin'].map((item) => (
          <Button key={item} onClick={() => handleButtonClick(item)}>{item}</Button>
        ))}
        {['4', '5', '6', '*', 'cos'].map((item) => (
          <Button key={item} onClick={() => handleButtonClick(item)}>{item}</Button>
        ))}
        {['1', '2', '3', '-', 'tan'].map((item) => (
          <Button key={item} onClick={() => handleButtonClick(item)}>{item}</Button>
        ))}
        {['0', '.', '=', '+', 'log'].map((item) => (
          <Button key={item} onClick={() => handleButtonClick(item)}>{item}</Button>
        ))}
        <Button onClick={() => handleButtonClick('sqrt')}>√</Button>
        <Button onClick={() => handleButtonClick('C')}>C</Button>
      </ButtonGrid>
    </CalculatorContainer>
  );
};

export default Calculator;
