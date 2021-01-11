import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Input } from '../src/components';
import { complete, saveTodo } from './reducers/todos';

const App = ({ todos, complete, saveTodo }) => {
  const [value, setValue] = useState('');

  const handleChange = (value) => {
    setValue(value);
  };

  const handleSubmit = (value) => {
    saveTodo(value);
    setValue('');
  };

  return (
    <View style={styles.container}>
      <Input onChange={handleChange} onSubmit={() => handleSubmit(value)} value={value} />
      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={(x) => x.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            {...item}
            onPress={() => {
              complete(item.id);
            }}
          />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  complete,
  saveTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },
  list: {
    width: '100%',
  },
});
