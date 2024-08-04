import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'M', value: 4 },
  { name: 'T', value: 3 },
  { name: 'W', value: 2 },
  { name: 'T', value: 6 },
  { name: 'F', value: 8 },
  { name: 'S', value: 9 },
  { name: 'S', value: 3 },
];

const ActivityChart = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          Activity
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar 
              dataKey="value" 
              fill="#8884d8" 
              barSize={20} // Smaller bar width
              radius={[10, 10, 0, 0]} // Rounded top corners
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
