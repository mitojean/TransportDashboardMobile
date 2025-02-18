import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const DashboardScreen = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/drivers');
        setDrivers(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des chauffeurs :', error);
      }
    };

    fetchDrivers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tableau de Bord des Chauffeurs</Text>
      <FlatList
        data={drivers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.driverItem}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.truckNumber}</Text>
          </View>
        )}
      />
      <Button title="Ajouter un Chauffeur" onPress={() => {/* Navigation vers le formulaire d'ajout */}} />
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
  driverItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default DashboardScreen;
