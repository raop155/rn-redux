import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ onChange, onSubmit, value }) => {
  return (
    <TextInput
      onSubmitEditing={onSubmit}
      onChangeText={onChange}
      value={value}
      style={styles.input}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    alignSelf: 'stretch',
    height: 34,
    paddingHorizontal: 10,
  },
});
