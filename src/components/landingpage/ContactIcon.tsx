import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const ContactIcon = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        const formData = new FormData(event.target as HTMLFormElement);
        const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        };
      
        try {
          const response = await fetch('http://localhost:3001/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          if (response.ok) {
            alert('Message sent successfully!');
          } else {
            alert(`Failed to send message: ${result.error}`);
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while sending the message.');
        }
        
        handleClose();
      };
      

    return (
        <>
            <FaEnvelope 
                onClick={handleOpen} 
                style={{ 
                    position: 'fixed', 
                    bottom: '20px', 
                    right: '20px', 
                    fontSize: '2rem', 
                    cursor: 'pointer', 
                    color: '#3498db' 
                }} 
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Contactez Nous
                    </Typography>
                    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                        <TextField
                            fullWidth
                            label="Votre Nom"
                            name="name"
                            margin="normal"
                            variant="outlined"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Votre Email"
                            name="email"
                            margin="normal"
                            variant="outlined"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Sujet"
                            name="subject"
                            margin="normal"
                            variant="outlined"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            name="message"
                            margin="normal"
                            variant="outlined"
                            multiline
                            rows={4}
                            required
                        />
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="secondary" 
                            fullWidth 
                            sx={{ marginTop: '10px' }}
                        >
                            Envoyer
                        </Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
};

export default ContactIcon;
