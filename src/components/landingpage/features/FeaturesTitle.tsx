import React from 'react';
import { Grid, Typography , Link} from '@mui/material';


const FeaturesTitle = () => {

    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={10} lg={6}>
               <Typography variant='h2' fontWeight={700} textAlign="center" sx={{
                    fontSize: {
                        lg: '50px',
                        xs: '35px'
                    },
                    lineHeight: {
                        lg: '50px',
                        xs: '40px'
             }
                }}>Ce qui nous 
                <Link href="#" color="secondary" underline='none'> faisons</Link>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default FeaturesTitle;
