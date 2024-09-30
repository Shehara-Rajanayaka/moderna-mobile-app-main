import {Eye, EyeSlash} from 'iconsax-react-native';
import {FC, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../styles/Colors';

interface PasswordInputFieldProps {
  placeholder: string;
  value: string;
  props?: TextInputProps;
  onChangeText: (text: string) => void;
  label: string;
  onKeyUp?: () => void;
}

const PasswordInputField: FC<PasswordInputFieldProps> = ({
  placeholder,
  value,
  props,
  onChangeText,
  label,
  onKeyUp,
}) => {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordSecure(!isPasswordSecure);
  };

  return (
    <View>
      <View style={styles.textInputWrapper}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          onKeyPress={onKeyUp}
          style={[styles.textInputStyle, {paddingRight: 38}]}
          placeholder={placeholder}
          placeholderTextColor="#9C9BC2"
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={isPasswordSecure}
          textContentType="oneTimeCode"
          {...props}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.iconButton}>
          {isPasswordSecure ? (
            <EyeSlash size={20} color={Colors.GRAY_600} />
          ) : (
            <Eye size={20} color={Colors.GRAY_600} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  textInputStyle: {
    padding: 16,
    borderRadius: 8,
    color: '#000',
    flexGrow: 1,
  },
  iconButton: {
    padding: 16,
    position: 'absolute',
    right: 0,
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
});

export default PasswordInputField;
