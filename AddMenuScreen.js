import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import { MenuContext } from '../MenuContext';

const AddMenuScreen = ({ navigation }) => {
  const { addMenuItem } = useContext(MenuContext);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    if (name.trim() && price.trim()) {
      const newItem = { id: Date.now().toString(), name, course, price: parseFloat(price) };
      addMenuItem(newItem);
      setName('');
      setPrice('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Menu Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
      />

      <Text style={styles.label}>Select Course:</Text>
      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(itemValue) => setCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 10 },
  picker: { borderWidth: 1, borderColor: '#ccc', marginBottom: 20 },
});

export default AddMenuScreen;