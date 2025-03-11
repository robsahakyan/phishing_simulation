import React, { ReactNode, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  InputAdornment,
  IconButton,
  Link,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import SignInLayout from 'src/layouts/SignInLayout';
import { useAuth } from 'src/@core/hooks/useAuth';

const LoginPage = () => {
  const auth = useAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    auth.login({ email, password })
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} sm={8} md={5} lg={4}>
        <Paper elevation={2} sx={{ padding: 4, borderRadius: 2, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Typography variant="h4" align='center' gutterBottom>
            Welcome back to Phishing App
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ marginBottom: 3 }}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                value={email}
                onChange={handleEmailChange}
                autoComplete="email"
              />
            </Box>
            <Box sx={{ marginBottom: 3 }}>
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                required
                value={password}
                onChange={handlePasswordChange}
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={togglePasswordVisibility}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Login
            </Button>
          </form>
          <Box sx={{ mt: 8, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            <Typography sx={{ fontSize: '16px'}}>Still don't have an account?</Typography>
            <Link href='/register'>Sign up</Link>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

LoginPage.getLayout = (page: ReactNode) => <SignInLayout>{page}</SignInLayout>
LoginPage.guestGuard = true;

export default LoginPage;

