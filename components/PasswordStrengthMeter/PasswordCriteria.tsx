import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'; // ikonkomponenten för checkboxarna

type CriteriaProps = {
  password: string;
};

const PasswordCriteria: React.FC<CriteriaProps> = ({ password }) => {
  
    // Kolla vilka kriterier som uppfylls
  const isMinLength = password.length >= 9;
  const hasNumber = /\d/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To achieve a strong password</Text>
        

      {/* Lista med kriterier */}
      <View style={styles.criteriaItem}>
        <Icon
          name={isMinLength ? 'check-box' : 'check-box-outline-blank'}
          type="material"
          color={isMinLength ? 'green' : 'gray'}
          size={20}
        />
        <Text style={styles.text}>Minimum length of 9</Text>
      </View>

      <View style={styles.criteriaItem}>
        <Icon
          name={hasNumber ? 'check-box' : 'check-box-outline-blank'}
          type="material"
          color={hasNumber ? 'green' : 'gray'}
          size={20}
        />
        <Text style={styles.text}>Numbers</Text>
      </View>

      <View style={styles.criteriaItem}>
        <Icon
          name={hasUpperCase ? 'check-box' : 'check-box-outline-blank'}
          type="material"
          color={hasUpperCase ? 'green' : 'gray'}
          size={20}
        />
        <Text style={styles.text}>One upper case letter</Text>
      </View>

      <View style={styles.criteriaItem}>
        <Icon
          name={hasSpecialChar ? 'check-box' : 'check-box-outline-blank'}
          type="material"
          color={hasSpecialChar ? 'green' : 'gray'}
          size={20}
        />
        <Text style={styles.text}>One special character</Text>
      </View>
    </View>
  );
};

// Stilar för komponenten
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  criteriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 14,
    color: 'white',
  },
});

export default PasswordCriteria;
