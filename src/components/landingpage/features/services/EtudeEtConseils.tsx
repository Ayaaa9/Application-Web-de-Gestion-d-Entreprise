import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import img5 from 'src/assets/images/landingpage/services/etudeEtConseils.jpg';
import { motion } from 'framer-motion';

const EtudeEtConseils: React.FC = () => {
  const serviceDetails = {
    title: 'Etude et conseils',
    image: img5,
    description: `Animés par nos convictions, DIGIUP intervient au présent dans le conseil, transfert de compétences et formations de nos clients tout en étant force de proposition pour regarder vers l’avenir et élaborer des orientations stratégiques ainsi que d’assurer la conduite au changement en vue de lever les défis à venir.

    <br /><br />

    Dans ce cadre-là, nous accompagnons nos clients depuis l’étude stratégique d’ensemble, jusqu’au diagnostic organisationnel, recherche d’opportunité de développement, étude de performance, planification stratégique et élaboration de feuille de route, définition du schéma directeur sectoriel et thématique, proposition de solutions adaptées et accompagnement de programmes ou projets de développement du digital.`
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
                style={{ color: '#4eb7f3', fontSize: '3rem', fontFamily: 'Helvetica' }}
              >
                {serviceDetails.title}
                <br />
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
            >
              <Typography variant="body1">
                <span dangerouslySetInnerHTML={{ __html: serviceDetails.description }} />
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EtudeEtConseils;
