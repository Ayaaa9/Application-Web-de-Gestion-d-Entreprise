import React, { useState } from 'react';
import { Box, Button, Divider, styled, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigations = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: '16px',
    color: theme.palette.text.secondary,
    textTransform: 'none',
    padding: '12px 16px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  }));

  const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box display="flex" alignItems="center">
      <a href="/banner">
        <StyledButton color="inherit" variant="text">
          Acceuil
        </StyledButton>
      </a>

      <a href="/frameworks">
        <StyledButton color="inherit" variant="text">
          À propos
        </StyledButton>
      </a>

      <Box
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ position: 'relative' }}
      >
        <StyledButton color="inherit" variant="text">
          Nos Services
        </StyledButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMouseLeave}
          MenuListProps={{
            onMouseLeave: handleMouseLeave,
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem component={StyledLink} to="/services/digital-factory">
            Digital Factory
          </MenuItem>
          <MenuItem component={StyledLink} to="/services/cybersecurite">
            Cybersécurité
          </MenuItem>
          <MenuItem component={StyledLink} to="/services/developpement-informatique">
            Développement Informatique
          </MenuItem>
          <MenuItem component={StyledLink} to="/services/etude-et-conseils">
            Étude et Conseils
          </MenuItem>
          <MenuItem component={StyledLink} to="/services/transformation-digital">
            Transformation Digital
          </MenuItem>
        </Menu>
      </Box>


      <a href="/projects">
        <StyledButton color="inherit" variant="text">
          No Projets
        </StyledButton>
      </a>

      <Divider orientation="vertical" flexItem />
      <a href="/contact">
        <StyledButton color="secondary" variant="contained">
          Contactez-nous
        </StyledButton>
      </a>
    </Box>
  );
};

export default Navigations;
