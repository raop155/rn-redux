import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ListItem = ({ desc, onPress, completed }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {completed ? (
        <Text style={[styles.text, styles.strike]}>{desc}</Text>
      ) : (
        <Text style={styles.text}>{desc}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    width: '100%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
  strike: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
