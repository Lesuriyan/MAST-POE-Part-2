import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const starters = [
  { id: '1', name: 'Starter 1' },
  { id: '2', name: 'Starter 2' },
  { id: '3', name: 'Starter 3' },
];

const StartersScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={starters}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DishDetail', { dish: item })}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.buttonContainer}>
        <Button title="Mains" onPress={() => navigation.navigate('MainsScreen')} />
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

export default StartersScreen;
