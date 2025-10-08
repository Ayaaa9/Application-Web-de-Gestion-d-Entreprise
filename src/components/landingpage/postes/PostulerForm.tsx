import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Modal,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const PostulerForm: React.FC<{ open: boolean; handleClose: () => void }> = ({ open, handleClose }) => {
  const [formData, setFormData] = useState<{
    name: string;
    address: string;
    city: string;
    postalCode: string;
    email: string;
    phone: string;
    gender: string;
    selectedJob: string;
    cv: File | null;
  }>({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    email: '',
    phone: '',
    gender: '',
    selectedJob: '',
    cv: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, files } = e.target as HTMLInputElement;

    if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : null,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    const submissionData = new FormData();
    submissionData.append('name', formData.name);
    submissionData.append('address', formData.address);
    submissionData.append('city', formData.city);
    submissionData.append('postalCode', formData.postalCode);
    submissionData.append('email', formData.email);
    submissionData.append('phone', formData.phone);
    submissionData.append('gender', formData.gender);
    submissionData.append('selectedJob', formData.selectedJob);
    if (formData.cv) {
      submissionData.append('cv', formData.cv);
    }
  
    try {
      await axios.post('http://localhost:3001/submit', submissionData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Form submitted successfully');
      handleClose(); 
      setFormData({
        name: '',
        address: '',
        city: '',
        postalCode: '',
        email: '',
        phone: '',
        gender: '',
        selectedJob: '',
        cv: null,
      });
    } catch (error) {
      console.error('Error submitting form', error);
      alert('There was an error submitting the form');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
        }}
      >
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Formulaire de candidature
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                name="name"
                label="Nom complet"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="address"
                name="address"
                label="Adresse"
                variant="outlined"
                fullWidth
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="city"
                name="city"
                label="Ville"
                variant="outlined"
                fullWidth
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="postalCode"
                name="postalCode"
                label="Code Postal"
                variant="outlined"
                fullWidth
                value={formData.postalCode}
                onChange={handleChange}
                inputProps={{ maxLength: 5 }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                name="email"
                label="Adresse E-mail"
                type="email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phone"
                name="phone"
                label="Numéro de téléphone"
                type="tel"
                variant="outlined"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
                inputProps={{ pattern: '[0-9]{10}' }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Sexe</InputLabel>
                <Select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleSelectChange}
                  label="Sexe"
                >
                  <MenuItem value="male">Homme</MenuItem>
                  <MenuItem value="female">Femme</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Offre Choisie</InputLabel>
                <Select
                  id="selectedJob"
                  name="selectedJob"
                  value={formData.selectedJob}
                  onChange={handleSelectChange}
                  label="Offre Choisie"
                >
                  <MenuItem value="Développeur Full Stack Senior">
                    Développeur Full Stack Senior
                  </MenuItem>
                  <MenuItem value="Chef de Projet IT">
                  Chef de Projet IT 
                  </MenuItem>
                  <MenuItem value="Ingénieur DevOps">
                  Ingénieur DevOps
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                component="label"
                color="secondary"
                fullWidth
              >
                Télécharger votre CV
                <input
                  type="file"
                  name="cv"
                  accept=".pdf"
                  hidden
                  onChange={handleChange}
                />
              </Button>
              {formData.cv && (
                <Typography variant="body2" mt={1}>
                  Fichier sélectionné: {formData.cv.name}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button type="submit" variant="contained" color="secondary">
                Soumettre
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default PostulerForm;
