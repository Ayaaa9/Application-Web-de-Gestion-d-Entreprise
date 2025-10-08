import React from 'react';
import { Button, Box, Stack } from '@mui/material';
import Logo from "src/layouts/full/shared/logo/Logo"


const MobileSidebar = () => {
    
    return (
        <>
            <Box px={3}>
                <Logo />
            </Box>
            <Box p={3}>

                <Stack direction="column" spacing={2} >
                    <Button color="inherit" href='#banner'
                        sx={{
                            justifyContent: 'space-between'
                        }}>
                        Acceuil
                    </Button>
                    <Button color="inherit" href="#frameworks"
                        sx={{
                            justifyContent: 'space-between'
                        }}>
                        A propos
                    </Button>

                    <Button color="inherit" href="#features" sx={{
                        justifyContent: 'start'
                    }}>Nos services
                    </Button>

                    <Button color="inherit" href="#projects" sx={{
                        justifyContent: 'start'
                    }}>Nos Projet
                    </Button>

                    <Button color="secondary" variant="contained" href="\contact">Contactez-Nous</Button>
                    
                    
                </Stack>
            </Box>
        </>


    );
};

export default MobileSidebar;
