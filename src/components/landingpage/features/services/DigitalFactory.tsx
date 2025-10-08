// src/services/DigitalFactoty.tsx
import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import img3 from 'src/assets/images/landingpage/services/digiatlFactory.jpg';
import { motion } from 'framer-motion';

const DigitalFactoty: React.FC = () => {
  const serviceDetails = {
    image: img3, 
    title: 'Digital Factory',
    description: 'En plus de ces 4 services, DIGIUP assure aussi la mise à disposition de Ressources Humaines hautement qualifiées et avec leurs compétences multidisciplinaires au profit de nos clients.'
  };

  return (
    <Container>
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <img
                src={serviceDetails.image}
                alt={serviceDetails.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            >
              <Typography
                variant="h1"
                align="center"
                gutterBottom
                style={{ color: '#4eb7f3', fontSize: '3rem', fontFamily:'Helvetica'}}
              >
                {serviceDetails.title}
                <br></br>
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
            >
              <Typography variant="body1">{serviceDetails.description}</Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DigitalFactoty;
