// src/components/Goals.jsx
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Goals = () => {
  return (
    <Card sx={{ backgroundColor: '#24262f', borderRadius: '24px' }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ mb: 2, color: 'white' }}>
          Goals
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <FlagIcon sx={{ color: '#e57373' }} />
            </ListItemIcon>
            <ListItemText primary="Goals" sx={{ color: 'white' }} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RestaurantIcon sx={{ color: '#64b5f6' }} />
            </ListItemIcon>
            <ListItemText primary="Popular Dishes" sx={{ color: 'white' }} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MenuBookIcon sx={{ color: '#4db6ac' }} />
            </ListItemIcon>
            <ListItemText primary="Menus" sx={{ color: 'white' }} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default Goals;