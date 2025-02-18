import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DriverForm from '../components/DriverForm';
import axios from 'axios';

const DriverFormScreen = ({ navigation }) => {
  const handleSave = async (driverData) => {
    try {
      await axios.post('http://localhost:5002/api/drivers', driverData);
      navigation.navigate('Dashboard'); // Navigate back to the dashboard
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du chauffeur :', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un Chauffeur</Text>
      <DriverForm onSave={handleSave} onCancel={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default DriverFormScreen;
