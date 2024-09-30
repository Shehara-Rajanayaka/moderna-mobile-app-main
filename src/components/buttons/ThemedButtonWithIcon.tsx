import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TouchableOpacityProps,
} from 'react-native';
import {Colors} from '../../styles/Colors';
import {Fonts} from '../../styles/fonts';
import {ArrowRight} from 'iconsax-react-native'; // Example of importing a specific icon

interface ThemedButtonWithIconProps extends TouchableOpacityProps {
  title: string;
  theme?: 'light' | 'dark';
  iconComponent?: React.ReactNode; // Accept any React node as the icon
}

const ThemedButtonWithIcon: React.FC<ThemedButtonWithIconProps> = ({
  title,
  theme = 'dark',
  iconComponent,
  style,
  ...props
}) => {
  const isDarkTheme = theme === 'dark';

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.button,
        isDarkTheme ? styles.darkButton : styles.lightButton,
        style,
      ]}
      {...props}>
      <View style={styles.content}>
        {iconComponent}
        <Text
          style={[
            styles.buttonText,
            isDarkTheme ? styles.darkButtonText : styles.lightButtonText,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
  darkButton: {
    backgroundColor: Colors.PRIMARY_BLACK,
  },
  lightButton: {
    backgroundColor: Colors.PRIMARY_WHITE,
    borderColor: Colors.GRAY_300,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: Fonts.HelveticaNowTextMedium,
    marginLeft: 10, // Spacing between the icon and text
  },
  darkButtonText: {
    color: Colors.PRIMARY_WHITE,
  },
  lightButtonText: {
    color: Colors.PRIMARY_BLACK,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ThemedButtonWithIcon;
