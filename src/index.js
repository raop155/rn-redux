import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem } from '../src/components';

const data = [
  {
    id: 1,
    desc: 'TO DO 1',
    isCompleted: false,
  },
  {
    id: 2,
    desc: 'TO DO 2',
    isCompleted: false,
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(x) => x.id}
        renderItem={({ item }) => <ListItem {...item} onPress={() => {}} />}
      />
    </View>
  );
};

export default App;

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
