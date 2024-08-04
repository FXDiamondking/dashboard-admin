// src/App.jsx
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Grid, Typography } from '@mui/material';
import Sidebar from './Components/Sidebar';
import NavBar from './Components/NavBar';
import StatCard from './Components/StatCard';
import NetProfitBox from './Components/NetProfitBox';
import ActivityChart from './Components/ActivityChart';
import RecentOrders from './Components/RecentOrders';
import CustomerFeedback from './Components/CustomerFeedback';
import Goals from './Components/Goals';
import Footer from './Components/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1a1c23',
      paper: '#24262f',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <NavBar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" sx={{ mb: 4, mt: 2 }}>Dashboard</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={2}>
                <StatCard title="Total Orders" value="79" change="+4%" color="#5e35b1" bgColor="#2f2540" />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <StatCard title="Total Delivered" value="64" change="+3%" color="#00897b" bgColor="#1e3a38" />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <StatCard title="Total Cancelled" value="1" change="+2%" color="#e53935" bgColor="#3e2727" />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <StatCard title="Total Revenue" value="$20k" change="+8%" color="#8e24aa" bgColor="#332941" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <NetProfitBox amount="8759.25" percentage={70} />
              </Grid>
              <Grid item xs={12} md={8}>
                <ActivityChart />
              </Grid>
              <Grid item xs={12} md={4}>
                <Goals />
              </Grid>
              <Grid item xs={12} md={8}>
                <RecentOrders />
              </Grid>
              <Grid item xs={12} md={4}>
                <CustomerFeedback />
              </Grid>
            </Grid>
          </Box>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;