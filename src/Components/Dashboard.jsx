// src/components/Dashboard.jsx
import React from 'react';
import { Grid } from '@mui/material';
import StatCard from './StatCard';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Orders" value="75" change="+4%" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Delivered" value="70" change="+3%" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Cancelled" value="05" change="+2%" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Revenue" value="$12k" change="+8%" />
      </Grid>
      <Grid item xs={12} md={8}>
        <ActivityChart />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomerFeedback />
      </Grid>
      <Grid item xs={12}>
        <RecentOrders />
      </Grid>
    </Grid>
  );
};

export default Dashboard;