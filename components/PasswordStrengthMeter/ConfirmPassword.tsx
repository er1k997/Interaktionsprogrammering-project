import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './PasswordStrengthMeterStyles';

const ConfirmPassword = ({ password }: { password: string }) => {
  const [confirmPassword, setConfirmPassword] = useState('');

  // Kontrollera om lösenord och bekräftelselösenord matchar
  const passwordsMatch = password === confirmPassword && confirmPassword !== '';

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          { borderColor: passwordsMatch ? 'green' : 'gray' },
        ]}
        placeholder="Confirm your password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {passwordsMatch ? (
        <Text style={styles.matchText}>Passwords match!</Text>
      ) : null}
    </View>
  );
};

export default ConfirmPassword;
