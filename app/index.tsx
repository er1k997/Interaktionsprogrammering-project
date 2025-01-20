import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PasswordStrengthMeter from '@/components/PasswordStrengthMeter/PasswordStrengthMeter';
import Carousel from '@/components/Carousel/Carousel'; 

export default function Index() {
  const [password, setPassword] = useState('');  // Sparar lösenordet
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#333' : '#FFF';

  // Funktion för att uppdatera lösenordet när det ändras
  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);  // Uppdatera lösenordet i state
    console.log("Lösenord: ", newPassword); 
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <View style={styles.leftColumn}>
            <Text style={[styles.headerText]}>Password Strength Meter</Text>
            <PasswordStrengthMeter onPasswordChange={handlePasswordChange} />
          </View>

          <View style={styles.verticalLine} />

          <View style={styles.rightColumn}>
            <Text style={[styles.headerText]}>Movie Carousel</Text>
            <Carousel />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1, 
  },
  contentContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
  },
  leftColumn: {
    flex: 1, 
    justifyContent: 'flex-start',
    alignItems: 'center', 
  },
  verticalLine: {
    width: 1, 
    backgroundColor: 'gray', 
    marginHorizontal: 10, 
  },
  rightColumn: {
    flex: 1, 
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
});
