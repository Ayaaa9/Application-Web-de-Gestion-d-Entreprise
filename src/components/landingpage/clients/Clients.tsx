import React from 'react';
import { Box, styled } from '@mui/material';
import './Clients.css'; 
import logo1 from 'src/assets/images/logos/logo1.png';
import logo2 from 'src/assets/images/logos/logo2.png';
import logo3 from 'src/assets/images/logos/logo3.png';
import logo4 from 'src/assets/images/logos/logo4.png';
import logo5 from 'src/assets/images/logos/logo5.png';
import logo6 from 'src/assets/images/logos/logo6.png';
import logo7 from 'src/assets/images/logos/logo7.png';
import logo8 from 'src/assets/images/logos/logo8.png';
import logo9 from 'src/assets/images/logos/logo9.png';
import logo10 from 'src/assets/images/logos/logo10.png';
import logo11 from 'src/assets/images/logos/logo11.png';
import logo12 from 'src/assets/images/logos/logo12.png';
import logo13 from 'src/assets/images/logos/logo13.png';

const clientLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7,
  logo8, logo9, logo10, logo11, logo12, logo13,
  logo1, logo2, logo3, logo4, logo5, logo6, logo7,
  logo8, logo9, logo10, logo11, logo12, logo13,
  logo1, logo2, logo3, logo4, logo5, logo6, logo7,
  logo8, logo9, logo10, logo11, logo12, logo13,
];


const ScrollContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100px', 
    zIndex: 2,
  },
  '&::before': {
    left: 0,
    background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
  },
  '&::after': {
    right: 0,
    background: 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
  },
}));

const ScrollingContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  animation: 'scroll 250s linear infinite',
  width: 'max-content',
  padding: theme.spacing(5, 0),
}));

const ClientLogo = styled('img')(({ theme }) => ({
  height: '70px',
  margin: theme.spacing(0, 2),
}));

const Clients = () => {
  return (
    <ScrollContainer>
      <ScrollingContent>
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <ClientLogo src={logo} alt={`Client ${index + 1}`} key={index} />
        ))}
      </ScrollingContent>
    </ScrollContainer>
  );
};

export default Clients;
