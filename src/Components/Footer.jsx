// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#24262f',
        color: 'white',
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2024 Nilanjan Chakraborty. All rights reserved.
        </Typography>
        <Box>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Terms of Service
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Contact Us
          </Link>
        </Box>
        <Box>
          <IconButton color="inherit" aria-label="Facebook" component="a" href="#">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Twitter" component="a" href="#">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="LinkedIn" component="a" href="#">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;