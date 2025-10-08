import React from 'react';
import { Typography, Box, Button, Stack, styled, useMediaQuery, Theme } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '13px 48px',
  fontSize: '16px',
  color: '#fff',
  border: '1px solid #fff',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main, 
    borderColor: theme.palette.secondary.main,
  },
}));

const BannerContent = () => {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  const navigate = useNavigate(); 


  return (
    
    <Box 
      mt={lgDown ? 8 : 0} 
      textAlign="center" 
      color="#fff" 
      position="relative" 
      zIndex={2}
    >
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 30,
        }}
      >
        <Typography
          variant="h2"
          fontWeight={900}
          sx={{
            fontSize: {
              md: '55px',
              xs: '40px',
            },
            lineHeight: {
              md: '60px',
            },
          }}
        >
          THINK{' '}
          <Typography component={'span'} variant="inherit" color={'secondary'}>
            OUTSIDE
          </Typography>{' '}
          THE BOX
        </Typography>
      </motion.div>
      <Box pt={4} pb={3}>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 30,
            delay: 0.2,
          }}
        >
          <Typography variant="h5" fontWeight={300}>
            Avec DIGIUP, vous allez gagner la bataille du digital !
          </Typography>
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 30,
          delay: 0.4,
        }}
      >
        <Stack direction="row" justifyContent="center" mt={3}>
          <StyledButton 
            variant="outlined" 
            onClick={() => navigate('postuler')} 
          >
            Postuler
          </StyledButton>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default BannerContent;
