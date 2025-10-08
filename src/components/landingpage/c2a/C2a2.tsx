import React from 'react';
import { Grid, Typography, Box, Container, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const C2a2 = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <PhoneIcon sx={{ color: 'background.paper' }} />
              <Typography variant="body1" color="background.paper">
                Tél : 05 37 70 47 88
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <EmailIcon sx={{ color: 'background.paper' }} />
              <Typography variant="body1" color="background.paper">
                contact@digiup.ma
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <LocationOnIcon sx={{ color: 'background.paper' }} />
              <Typography variant="body1" color="background.paper">
                Angle Patrice Lumumba et Rue Figuig Imm 9 Appt 5 Hassan, Rabat
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default C2a2;
