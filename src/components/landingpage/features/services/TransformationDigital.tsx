
import React from 'react';
import { Container, Typography, Box , Grid} from '@mui/material';
import img4 from 'src/assets/images/landingpage/services/transformationDigital.jpg';
import { motion } from 'framer-motion';

const TransformationDigital: React.FC = () => {
  const serviceDetails = {
    title: 'Transformation Digital',
    image: img4, 
    description: `DIGIUP accompagne les maitres d’ouvrage aux métiers et secteurs divers dans leur transformation digitale en renforçant l’efficacité des processus métiers par la mise en place de projets SI opérationnels, innovateurs et alignés avec leur stratégie de développement pendant la conduite du projet aussi bien pendant la phase d’étude, gestion de projet, développement et support personnalisé.
    <br />
    Et ce, afin de transformer les données de nos clients en informations précieuses pour répondre à leurs problématiques métiers les plus complexes. 
    <br />
    Pour une mise en place efficace de nos projets digitaux et une création de la valeur client, nous utilisons les méthodes Agiles afin de valoriser les échanges avec chaque client, en le plaçant au centre du projet et tenant ainsi compte de toutes les contraintes métiers et techniques. 
    <br />
    Parmi nos prestations-types :
    <br />

    - Assistance technique à Maitrise d’Ouvrage, Conception et développement de systèmes d’information adapté aux besoins de nos clients
    
    <br />
    - Elaboration du Schéma Directeur des Systèmes d’Information et transformation numérique
    <br />
    - Mise en place de référentiels et de procédures informatiques
    <br />
    - Architecture et urbanisation des SI
    <br />
    - Gestion des risques SI
    <br />
    - Audit et sécurité des Systèmes d’Informations
    <br />
    - Stratégie et Gouvernance des Systèmes d’information.`
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

export default TransformationDigital;
