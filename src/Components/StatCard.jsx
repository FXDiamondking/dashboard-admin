// src/components/StatCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const StatCard = ({ title, value, change, color, bgColor }) => {
  return (
    <Card sx={{ 
      backgroundColor: bgColor, 
      height: '90%',
      borderRadius: '24px',
      overflow: 'hidden'
    }}>
      <CardContent sx={{ padding: '16px' }}>
        <Typography variant="body2" component="div" sx={{ color: color, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="h5" component="div" sx={{ color: 'white', mb: 1 }}>
          {value}
        </Typography>
        <Box sx={{ 
          color: change.startsWith('+') ? 'success.main' : 'error.main',
          backgroundColor: change.startsWith('+') ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
          borderRadius: '12px',
          padding: '2px 6px', // Reduced padding
          display: 'inline-block'
        }}>
          <Typography variant="caption">{change}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;