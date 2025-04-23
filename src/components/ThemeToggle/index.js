import React from 'react';
import styled from 'styled-components';
import { DarkMode, LightMode } from '@mui/icons-material';

const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 6px;
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  margin-left: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.primary + '20'};
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <ThemeToggleContainer>
      <ToggleButton onClick={toggleDarkMode} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
        {darkMode ? <LightMode style={{ fontSize: '20px' }} /> : <DarkMode style={{ fontSize: '20px' }} />}
      </ToggleButton>
    </ThemeToggleContainer>
  );
};

export default ThemeToggle; 