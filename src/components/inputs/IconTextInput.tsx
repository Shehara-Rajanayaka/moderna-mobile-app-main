import React from 'react';
import {View, TextInput, StyleSheet, Text, Platform} from 'react-native';
import {Colors} from '../../styles/Colors';

interface CustomTextInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  icon: React.ReactNode;
  maxLength?: number;
}

const IconTextInput = ({
  label,
  placeholder = '',
  value,
  onChangeText,
  keyboardType = 'default',
  icon,
  maxLength,
}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#888"
          autoCapitalize="none"
          keyboardType={keyboardType}
          maxLength={maxLength}
        />
        {icon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  label: {
    position: 'absolute',
    top: Platform.OS === 'android' ? -10 : -8,
    left: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 4,
    fontSize: 14,
    color: '#555',
    zIndex: 1, // Ensure label is above the TextInput
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    height: 55,
    paddingRight: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    paddingTop: Platform.OS === 'android' ? 14 : 16,
    paddingBottom: Platform.OS === 'android' ? 14 : 12,
    color: Colors.PRIMARY_BLACK,
  },
});

export default IconTextInput;
