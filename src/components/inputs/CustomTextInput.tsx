import React from 'react';
import {View, TextInput, StyleSheet, Text, Platform} from 'react-native';
import {Colors} from '../../styles/Colors';

interface CustomTextInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  placeholder = '',
  value,
  onChangeText,
  keyboardType = 'default',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#888"
        autoCapitalize="none"
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    flexGrow: 1,
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
  input: {
    height: 55,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    paddingTop: Platform.OS === 'android' ? 12 : 14,
    paddingBottom: Platform.OS === 'android' ? 12 : 10,
    color: Colors.PRIMARY_BLACK,
    flexGrow: 1,
  },
});

export default CustomTextInput;
