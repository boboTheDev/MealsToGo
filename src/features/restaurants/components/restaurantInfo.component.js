import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Text as PaperText } from 'react-native-paper';

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Restaurant Name',
    icon,
    photos = [
      'https://imgs.search.brave.com/TN6iu9uZIBbhmVvjta218sL7ivKruY3qfqJs5c-A8Oc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk2/Mzg5MTc0L3Bob3Rv/L2RlbGljaW91cy1o/YW1idXJnZXJzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz12/blJxTEdmVWhUSWRj/dUJIOWtyNjBuUFhw/ZDRsVFplU09lWmtB/c0dfRzV3PQ',
    ],
    address = 'random street 389th avenue',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: photos[0] }} style={styles.cardCover} />
      <Card.Content style={styles.cardContent}>
        <PaperText variant="titleLarge">{name}</PaperText>
        <PaperText variant="bodyMedium">Card Title</PaperText>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
  },
  cardCover: {
    margin: 15,
    borderRadius: 12,
  },
  cardContent: {
    margin: 5,
  },
});
