// src/components/RecentOrders.jsx
import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Chip, Avatar } from '@mui/material';

const orders = [
  { id: 1547856, customer: 'Riya Dey', amount: '$124.00', status: 'Delivered', avatar: 'R' },
  { id: 4895765, customer: 'Biswanath Saha', amount: '$385.02', status: 'Delivered', avatar: 'B' },
  { id: 7895215, customer: 'Amit Naha', amount: '$45.68', status: 'Cancelled', avatar: 'A' },
  { id: 2096573, customer: 'Nilanjan Chakraborty', amount: '$65.00', status: 'Pending', avatar: 'N' },
  { id: 9375620, customer: 'Shayantan Dutta', amount: '$545.00', status: 'Delivered', avatar: 'S' },
  { id: 7631456, customer: 'Indrani Dutta', amount: '$128.30', status: 'Delivered', avatar: 'I' },
];

const RecentOrders = () => {
  return (
    <Card sx={{ backgroundColor: '#24262f', borderRadius: '24px' }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ mb: 2, color: 'white' }}>
          Recent Orders
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'grey.500' }}>Customer</TableCell>
              <TableCell sx={{ color: 'grey.500' }}>Order No.</TableCell>
              <TableCell sx={{ color: 'grey.500' }}>Amount</TableCell>
              <TableCell sx={{ color: 'grey.500' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>{order.avatar}</Avatar>
                    <span style={{ color: 'white' }}>{order.customer}</span>
                  </div>
                </TableCell>
                <TableCell sx={{ color: 'white' }}>{order.id}</TableCell>
                <TableCell sx={{ color: 'white' }}>{order.amount}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status}
                    color={order.status === 'Delivered' ? 'success' : order.status === 'Cancelled' ? 'error' : 'warning'}
                    sx={{
                      borderRadius: '16px',
                      fontWeight: 'bold',
                      '&.MuiChip-colorSuccess': {
                        backgroundColor: 'rgba(0, 200, 83, 0.2)',
                        color: '#00c853',
                      },
                      '&.MuiChip-colorError': {
                        backgroundColor: 'rgba(255, 82, 82, 0.2)',
                        color: '#ff5252',
                      },
                      '&.MuiChip-colorWarning': {
                        backgroundColor: 'rgba(255, 167, 38, 0.2)',
                        color: '#ffa726',
                      },
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentOrders;