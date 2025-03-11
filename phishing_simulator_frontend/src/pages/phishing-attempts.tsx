import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { dispatch, useAppSelector } from 'src/redux/hooks';
import { fetchAllPhishingsThunk } from 'src/redux/phishing/thunk';
import { UtilsProvider } from 'src/@core/utils';
import { phishingSelector, phishingSlice } from 'src/redux/phishing';
import { infoSelector } from 'src/redux/info';

const SOCKET_SERVER_URL = process.env.NEXT_PUBLIC_BACKEND_URL; 

const PhishingAttempts = () => {
  const phishingAttempts = useAppSelector(phishingSelector.phishingAttempts);
  const isLoading = useAppSelector(infoSelector.getLoading);

  useEffect(() => {
    dispatch(fetchAllPhishingsThunk({ authToken: UtilsProvider.getStoredToken() }));

    const socket = io(SOCKET_SERVER_URL, {
      transports: ['websocket'],
    });

    socket.on('phishingAttemptsUpdated', (updatedAttempts) => {
      dispatch(phishingSlice.actions.setPhishingAttempts(updatedAttempts));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

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
        Phishing Attempts
      </Typography>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <TableContainer component={Paper} sx={{ marginTop: '2rem' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Timestamp</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {phishingAttempts?.length ? phishingAttempts.map((attempt) => (
                <TableRow key={attempt._id}>
                  <TableCell>{attempt.email}</TableCell>
                  <TableCell>{attempt.status}</TableCell>
                  <TableCell>{new Date(attempt.timestamp).toLocaleString()}</TableCell>
                </TableRow>
              )) : <TableRow><TableCell colSpan={3} align="center">No data available</TableCell></TableRow>}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default PhishingAttempts;
