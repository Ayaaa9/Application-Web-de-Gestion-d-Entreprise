import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import img2 from 'src/assets/images/landingpage/services/cybersecurite.jpg';

const Cybersecurite: React.FC = () => {
  const serviceDetails = {
    title: 'Cybersécurité',
    image: img2,
    description:`Bien que les systèmes puissent être conçus avec la sécurité à l'esprit, leur sécurité est devenu aujourd'hui un véritable domaine d'expertise qui nécessite une approche holistique et une compréhension profonde de l'environnement à protéger. A cet effet, DIGIUP embrasse la mission de tenir compte des entraves techniques et fonctionnelles pour créer une frontière de sécurité renforcée contre l'ensemble des menaces et devenir votre partenaire de cybersécurité actif et engagé : 
      
      <br /><br />

      - Audit sécurité Système d'information en matière d'accès (Firewall, NAC, sonde de détection d'intrusion, VPN, authentification forte…). Ainsi qu'au niveau du contenu (Antivirus, filtrage de contenu et d'URL…)
      <br />
      - Audit réseau <br />
      - Framework Cybersécurité <br />
      - Mise en place de référentiels et de procédures informatiques 
      <br />
      - Gestion des risques SI.`
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
                style={{ color: '#4eb7f3', fontSize: '3rem', fontFamily:'Helvetica' }}
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

export default Cybersecurite;