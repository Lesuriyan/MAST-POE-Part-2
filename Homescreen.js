import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MenuContext } from '../MenuContext';

const HomeScreen = ({ navigation }) => {
  const { menuItems, getAveragePrice } = useContext(MenuContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Culinary Christoffel</Text>
      <Text style={styles.subtitle}>Total Menu Items: {menuItems.length}</Text>
      <Text style={styles.subtitle}>Average Price: ${getAveragePrice()}</Text>

      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('StartersScreen')}>
        <Text style={styles.menuButtonText}>View Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('AddMenuScreen')}>
        <Text style={styles.menuButtonText}>Add Menu Item</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('FilterScreen')}>
        <Text style={styles.menuButtonText}>Filter by Course</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 18, marginVertical: 10 },
  menuButton: { backgroundColor: '#008CBA', padding: 10, marginVertical: 5, borderRadius: 5 },
  menuButtonText: { color: 'white', fontSize: 18 },
});

export default HomeScreen;