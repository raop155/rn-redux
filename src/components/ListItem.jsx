import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ListItem = ({ desc, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{desc}</Text>
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
});
