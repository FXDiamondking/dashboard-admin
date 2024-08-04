import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Rating } from '@mui/material';

const feedback = [
  { id: 1, name: 'Nilanjan Chakraborty', rating: 5, comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger and onion rings...' },
  { id: 2, name: 'Shayantan Dutta', rating: 5, comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.' },
];

const CustomerFeedback = () => {
  return (
    <Card > 
      <CardContent>
        <Typography variant="h6" component="div">
          Customer's Feedback
        </Typography>
        <List>
          {feedback.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.name}
                secondary={
                  <>
                    <Rating value={item.rating} readOnly />
                    <Typography variant="body2">{item.comment}</Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CustomerFeedback;
