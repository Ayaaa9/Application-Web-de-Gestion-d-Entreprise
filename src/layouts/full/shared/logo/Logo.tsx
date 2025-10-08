import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/images/logos/logo.jpeg';

const Logo = () => {
  if (!logo) {
    console.error('Failed to import logo image');

    return null;
  }

  
  return (

    <Link to="/" style={{ display: 'flex', alignItems: 'center', height: '60px', width: '180px', overflow: 'hidden' }}>
      <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
    </Link>
  );
};

export default Logo;
