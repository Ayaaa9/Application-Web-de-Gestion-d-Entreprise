import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { IconPhone, IconMapPin, IconUser } from '@tabler/icons';

const ContactContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  textAlign: 'center',
}));

const ContactGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
}));

const ContactInfo = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  border: '2.3px solid #00aaff',
  borderRadius: '10px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  height: '100%', 
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.3), 0 12px 40px 0 rgba(0, 0, 0, 0.2)',
  },
  '& svg': {
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(1),
  },
  '& h6': {
    color: theme.palette.text.secondary,
    fontSize: '1.4rem',
    marginBottom: theme.spacing(1),
  },
  '& p': {
    fontSize: '1.125rem',
    color: theme.palette.text.secondary,
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: '#00aaff',
  fontSize: '3rem',
  fontFamily: 'Helvetica',
  marginBottom: theme.spacing(2),
}));

const ContactPage: React.FC = () => {
  return (
    <ContactContainer maxWidth="md">
      <Title variant="h2" gutterBottom>
        Contactez-Nous
      </Title>
      <ContactGrid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <ContactInfo
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <IconUser size={50} />
            <Typography variant="h6">ADRESSE EMAIL</Typography>
            <Typography>contact@digiup.ma</Typography>
          </ContactInfo>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ContactInfo
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <IconPhone size={50} />
            <Typography variant="h6">TÉLÉPHONE (FIXE)</Typography>
            <Typography>+212 5 37 70 47 88</Typography>
          </ContactInfo>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ContactInfo
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <IconMapPin size={50} />
            <Typography variant="h6">EMPLACEMENT</Typography>
            <Typography>
              Angle Patrice Lumumba et Rue Figuig Imm9 Appt 5 Hassan Rabat
            </Typography>
          </ContactInfo>
        </Grid>
      </ContactGrid>
    </ContactContainer>
  );
};

export default ContactPage;
