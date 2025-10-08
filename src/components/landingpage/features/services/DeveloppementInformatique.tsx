import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import img1 from 'src/assets/images/landingpage/services/developpementInformatique.jpg';
import { motion } from 'framer-motion';

const DeveloppementInformatique: React.FC = () => {
  const serviceDetails = {
    title: 'Developpement Informatique',
    image: img1,
    description:
      "DIGIUP dispose d'ingénieurs chevronnés, expérimentés, de haut niveau, aux compétences polyvalentes et à l'esprit créatif, capables d'intervenir avec une réactivité étonnante, en développant des logiciels système spécifiques sous différentes plateformes, en réalisant des applications clés en main allant du conseil à la production de projets numériques, pour répondre aux besoins des clients sous différentes plateformes : Oracle, J2E, .Net. .., automatisation industrielle, dématérialisation des processus et procédures, gestion intégrée incluant ERP, CRM et Data Mining, Internet/Intranet…",
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

export default DeveloppementInformatique;