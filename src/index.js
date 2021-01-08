import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from '../src/components';
import { complete } from './reducers/todos';

const App = ({ todos, complete }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={(x) => String(x.id)}
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
