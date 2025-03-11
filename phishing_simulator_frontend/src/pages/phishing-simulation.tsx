import { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';
import { dispatch } from 'src/redux/hooks';
import { sendPhishingEmailThunk } from 'src/redux/phishing/thunk';
import { UtilsProvider } from 'src/@core/utils';
import { customToast } from 'src/@core/styles/libs/react-toastify';

const PhishingSimulation = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading ] = useState(false);

  const handleSendPhishingEmail = async () => {
    setIsLoading(true)
    dispatch(sendPhishingEmailThunk({ authToken: UtilsProvider.getStoredToken(), email }))
      .unwrap()
      .then(() => {
        customToast.success('Phishing email successfully sent');
      })
      .catch((err) => {
        customToast.error(err.message || 'Failed to send phishing email');
      })
      .finally(() => {
        setIsLoading(false)
      })
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40vh',
        padding: '2rem',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Phishing Simulation
      </Typography>
      <TextField
        label="Email Address"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSendPhishingEmail}
        disabled={isLoading}
      >
        {isLoading ? <CircularProgress size={24} color="secondary" /> : 'Send Phishing Email'}
      </Button>
    </Box>
  );
};

export default PhishingSimulation;
