import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

const HeroSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #5b1a80; // Example purple shade
  height: 80vh;
  color: white;
  text-align: center;
`;

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <h2>Welcome to Algorizon</h2>
      <h1>Digital Marketing Services</h1>
      <p>We act as a partner with whom you can collaborate to take advantage of new marketing opportunities.</p>
      <Button variant="contained" color="primary">Contact</Button>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
