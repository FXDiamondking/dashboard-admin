// src/components/NetProfitBox.jsx
import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const NetProfitBox = ({ amount, percentage }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#24262f',
        borderRadius: '24px',
        padding: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '90%',
      }}
    >
      <Box>
        <Typography variant="body2" component="div" sx={{ color: '#8e24aa', mb: 1 }}>
          Net Profit
        </Typography>
        <Typography variant="h5" component="div" sx={{ color: 'white', mb: 1 }}>
          ${amount}
        </Typography>
      </Box>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant="determinate"
          value={percentage}
          size={80}
          thickness={4}
          sx={{
            color: '#8e24aa',
            circle: {
              strokeLinecap: 'round',
            },
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="body2" component="div" sx={{ color: 'white' }}>
            {percentage}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NetProfitBox;