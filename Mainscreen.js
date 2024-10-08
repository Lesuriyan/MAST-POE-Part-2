import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const mains = [
  { id: '1', name: 'Main 1' },
  { id: '2', name: 'Main 2' },
  { id: '3', name: 'Main 3' },
];

const MainsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={mains}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DishDetail', { dish: item })}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.buttonContainer}>
        <Button title="Starters" onPress={() => navigation.navigate('StartersScreen')} />
        <Button title="Desserts" onPress={() => navigation.navigate('DessertsScreen')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MainsScreen;
