import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './PasswordStrengthMeterStyles';
import { Icon } from 'react-native-elements'; 
import PasswordCriteria from './PasswordCriteria'; 

type Props = {
  minLength?: number;
  strengthColors?: { [key: number]: string };
  matchMessage?: string;
  onPasswordChange?: (password: string) => void;  // Ny prop för att skicka lösenordet
};

const PasswordStrengthMeter: React.FC<Props> = ({
  minLength = 9,
  strengthColors = {
    0: '#e0e0e0',
    1: 'red',
    2: 'orange',
    3: 'green',
    4: 'green',
  },
  matchMessage = 'Matching Password',
  onPasswordChange, // Hämta callback-funktionen
}) => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Funktion för att beräkna styrkan på lösenordet
  const calculateStrength = (password: string) => {
    let strength = 0;

    // Kontrollera specifika kriterier
    if (password.length >= minLength) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 1;

    setStrength(strength);
  };

  useEffect(() => {
    calculateStrength(password);
  }, [password]);

  // När lösenordet ändras, uppdatera både state och kalla på onPasswordChange callbacken
  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    if (onPasswordChange) {
      onPasswordChange(newPassword); // Skicka lösenordet 
    }
  };

  // Kontrollera om lösenorden matchar
  const passwordsMatch = password === confirmPassword && confirmPassword !== '';

  // Korrekt logik för styrkemeddelanden
  const getStrengthMessage = (strength: number): string => {
    switch (strength) {
      case 1:
        return 'Your password is weak';
      case 2:
        return 'Your password is okay';
      case 3:
        return 'Your password is good';
      case 4:
        return 'Your password is strong';
      default:
        return ''; 
    }
  };

  // Toggle för lösenordets synlighet
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.passwordAndIconContainer}>
        
        {/* Fält för att ange lösenord */}
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="white" 
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={handlePasswordChange}  // Använd handlePasswordChange istället för direkt setPassword
        />

        {/* Ikon för att visa/dölja lösenordet */}
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconWrapper}>
          <View style={styles.iconContainer}>
            <Icon
              name={isPasswordVisible ? 'visibility' : 'visibility-off'}
              type="material"
              size={24}
              color="gray"
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Fält för att bekräfta lösenord */}
      <TextInput
        style={styles.input2}
        placeholder="Confirm your password"
        placeholderTextColor="white"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Meddelande för matchande lösenord */}
      {passwordsMatch && <Text style={styles.matchText}>{matchMessage}</Text>}

      {/* Progress bars */}
      <View style={styles.progressBarWrapper}>
        {[1, 2, 3].map((level) => (
          <View
            key={level}
            style={[
              styles.progressBarSegment,
              {
                backgroundColor:
                  strength >= 4
                    ? strengthColors[4]
                    : strength >= level
                    ? strengthColors[level]
                    : strengthColors[0],
              },
            ]}
          />
        ))}
      </View>

      {/* Meddelande för lösenordsstyrka */}
      <Text style={styles.strengthMessage}>{getStrengthMessage(strength)}</Text>

      {/* Ny ruta för kriterier */}
      <PasswordCriteria password={password} />
    </View>
  );
};

export default PasswordStrengthMeter;
