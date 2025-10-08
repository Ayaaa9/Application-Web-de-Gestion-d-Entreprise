import React, { useState } from 'react';
import { Button, Box, Stack, Collapse, List, ListItem, ListItemText } from '@mui/material';
import Logo from 'src/layouts/full/shared/logo/Logo';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const MobileSidebar = () => {
  const [openServices, setOpenServices] = useState(false);

  const handleServicesToggle = () => {
    setOpenServices(!openServices);
  };

  return (
    <>
      <Box px={3}>
        <Logo />
      </Box>
      <Box p={3}>
        <Stack direction="column" spacing={2}>
          <Button color="inherit" href="/" sx={{ justifyContent: 'space-between' }}>
            Accueil
          </Button>
          <Button color="inherit" href="/" sx={{ justifyContent: 'space-between' }}>
            À propos
          </Button>

          <Button
            color="inherit"
            onClick={handleServicesToggle}
            sx={{
              justifyContent: 'space-between',
            }}
          >
            Nos services {openServices ? <ExpandLess /> : <ExpandMore />}
          </Button>

          <Collapse in={openServices} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component="a" href="/services/digital-factory">
                <ListItemText primary="Digital Factory" />
              </ListItem>
              <ListItem button component="a" href="/services/cybersecurite">
                <ListItemText primary="Cybersécurité" />
              </ListItem>
              <ListItem button component="a" href="/services/developpement-informatique">
                <ListItemText primary="Développement Informatique" />
              </ListItem>
              <ListItem button component="a" href="/services/etude-et-conseils">
                <ListItemText primary="Étude et Conseils" />
              </ListItem>
              <ListItem button component="a" href="/services/transformation-digital">
                <ListItemText primary="Transformation Digital" />
              </ListItem>
            </List>
          </Collapse>

          <Button color="inherit"  href="/" sx={{
                        justifyContent: 'start'
                    }}>Nos Projet
           </Button>

          <Button color="secondary" variant="contained" href="/contact">
            Contactez-Nous
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default MobileSidebar;
