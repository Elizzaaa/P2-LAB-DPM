import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DimensionExample = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.centerText}>Teks di Tengah</Text>

      {/* Kontainer untuk dua kotak */}
      <View style={styles.boxContainer}>
        {/* Kotak 1 di sisi kiri */}
        <View style={styles.box1}></View>
        
        {/* Kotak 2 di sisi kanan */}
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Abu-abu terang
  },
  centerText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    position: 'absolute',
    top: '50%',
    textAlign: 'center',
    transform: [{ translateY: -12 }], // Agar teks benar-benar di tengah
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 20,
    bottom: 50, // Jarak vertikal untuk posisi bawah layar
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'brown',
  },
});

export default DimensionExample;
