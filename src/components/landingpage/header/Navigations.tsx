import React from 'react';
import { Box, Button, Divider, styled } from '@mui/material';

const Navigations = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: '16px',
    color: theme.palette.text.secondary,
    textTransform: 'none',
    padding: '12px 16px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  }));

  return (
    <Box display="flex" alignItems="center">
      <a href='#banner'>
        <StyledButton color="inherit" variant="text">
          Acceuil
        </StyledButton>
        </a>

      <a href="#frameworks">
        <StyledButton color="inherit" variant="text">
          À propos
        </StyledButton>
      </a>

      <a href="#features">
        <StyledButton color="inherit" variant="text">
          Nos Services
        </StyledButton>
      </a>
      <a href="#projects">
        <StyledButton color="inherit" variant="text">
          Nos Projets
        </StyledButton>
      </a>
      
      <Divider orientation="vertical" flexItem />
      <a href="/contact">
        <StyledButton color="secondary" variant="contained">
          Contactez-nous
        </StyledButton>
      </a>
    </Box>
  );
};

export default Navigations;
