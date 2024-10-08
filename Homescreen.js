import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Culinary Christoffel</Text>

      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>R</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('StartersScreen')}>
        <Text style={styles.menuButtonText}>Menu -</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoContainer: {
    marginVertical: 20,
  },
  logoBox: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 50,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  menuButton: {
    backgroundColor: '#008CBA',
    padding: 10,
    borderRadius: 5,
  },
  menuButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default HomeScreen;
