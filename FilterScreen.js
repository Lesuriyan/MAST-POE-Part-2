import React, { useContext, useState } from 'react';
import { View, Text, FlatList, Picker, StyleSheet } from 'react-native';
import { MenuContext } from '../MenuContext';

const FilterScreen = () => {
  const { menuItems } = useContext(MenuContext);
  const [selectedCourse, setSelectedCourse] = useState('Starters');

  const filteredItems = menuItems.filter((item) => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu Items</Text>

      <Picker
        selectedValue={selectedCourse}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      <FlatList
        data={filteredItems}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>{item.name} - ${item.price.toFixed(2)}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  picker: { borderWidth: 1, borderColor: '#ccc', marginBottom: 20 },
  itemText: { fontSize: 18, marginVertical: 5 },
});

export default FilterScreen;