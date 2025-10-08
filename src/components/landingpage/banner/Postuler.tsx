import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const jobListings = [
  {
    title: 'Développeur Full Stack Senior - 5 Postes Disponibles!',
    location: 'Casablanca',
    category: 'Informatique',
    type: 'CDI',
    time: 'Il y a 1 mois',
    id: '1',
  },
  {
    title: 'Chef de Projet IT - 3 Postes À Pourvoir!',
    location: 'Casablanca',
    category: 'Informatique',
    type: 'CDI',
    time: 'Il y a 2 mois',
    id: '2',
  },
  {
    title: 'Ingénieur DevOps - 4 Postes Disponibles!',
    location: 'Casablanca',
    category: 'Informatique',
    type: 'CDI',
    time: 'Il y a 3 mois',
    id: '3',
  },
];

const Postuler = () => {
  return (
    <Container>
      <Box pt={5} pb={3} textAlign="center">
        <Typography variant="h2" fontWeight={700} sx={{ fontSize: { lg: '37px', xs: '25px' }, lineHeight: { lg: '50px', xs: '40px' } }}>
          Trouver le bon poste
          <Typography variant="h2" fontWeight={700} sx={{ fontSize: { lg: '37px', xs: '25px' }, lineHeight: { lg: '50px', xs: '40px' } }} component="span" color="secondary"> au bon endroit.</Typography>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {jobListings.map((job, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ backgroundColor: 'white', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {job.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.location} • {job.category} • {job.type} • {job.time}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  sx={{ ml: 'auto', mt: -2, mb: 1 }}
                  component={RouterLink}
                  to={`/postuler/${index + 1}`}
                >
                  VOIR L'OFFRE
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Postuler;
