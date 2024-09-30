import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {Colors} from '../../styles/Colors';
import {Fonts} from '../../styles/fonts';

interface ThemedButtonProps extends TouchableOpacityProps {
  title: string;
  theme?: 'light' | 'dark';
}

const ThemedButton: React.FC<ThemedButtonProps> = ({
  title,
  theme = 'dark',
  style,
  ...props
}) => {
  const isDarkTheme = theme === 'dark';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isDarkTheme ? styles.darkButton : styles.lightButton,
        style,
      ]}
      {...props}>
      <Text
        style={[
          styles.buttonText,
          isDarkTheme ? styles.darkButtonText : styles.lightButtonText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  darkButton: {
    backgroundColor: Colors.PRIMARY_BLACK,
  },
  lightButton: {
    backgroundColor: Colors.PRIMARY_WHITE,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: Fonts.HelveticaNowTextMedium,
  },
  darkButtonText: {
    color: Colors.PRIMARY_WHITE,
  },
  lightButtonText: {
    color: Colors.PRIMARY_BLACK,
  },
});

export default ThemedButton;
