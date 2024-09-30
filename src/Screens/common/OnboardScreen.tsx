import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Pressable,
  StatusBar,
} from 'react-native';
import React from 'react';
import {TextStyles} from '../../styles/AppStyles';
import LogoSmallWhite from '../../assets/images/LogoSmallWhite';
import {Colors} from '../../styles/Colors';
import useAuthNavigation from '../../hooks/useAuthNavigation';
import {useFocusEffect} from '@react-navigation/native';

interface OnboardScreenProps {
  navigation: any;
}
const OnboardScreen: React.FC<OnboardScreenProps> = ({navigation}) => {
  const {navigateToSignUp, navigateToSignIn} = useAuthNavigation();

  useFocusEffect(
    React.useCallback(() => {
      // Apply the desired StatusBar settings when the screen is focused
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.1)');
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  // MARK : Components
  const NavigationView: React.FC = () => {
    return (
      <View style={[styles.ButtonView]}>
        <Pressable
          onPress={navigateToSignUp}
          style={[
            styles.ButtonStyles,
            {
              backgroundColor: Colors.PRIMARY_WHITE,
            },
          ]}>
          <Text style={[TextStyles.H3, {color: Colors.PRIMARY_BLACK}]}>
            Join Us
          </Text>
        </Pressable>
        <Pressable onPress={navigateToSignIn} style={[styles.ButtonStyles]}>
          <Text style={[TextStyles.H3, {color: Colors.PRIMARY_WHITE}]}>
            Sign In
          </Text>
        </Pressable>
      </View>
    );
  };

  // MARK : Render
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.1)"
      />
      <ImageBackground
        style={styles.backgroundImage}
        imageStyle={styles.ImageStyles}
        source={require('../../assets/images/OnboardUIImage.jpg')}>
        <View style={[styles.MainContainer]}>
          <LogoSmallWhite />
          <Text style={[TextStyles.H1, styles.TitileText]}>
            Moderna App {'\n'}Bringing Mode Members {'\n'}the best products,
            {'\n'}
            inspiration and stories {'\n'}in sport.
          </Text>
          <NavigationView />
        </View>
      </ImageBackground>
    </>
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  MainContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    padding: 20,
    gap: 25,
  },
  TitileText: {
    color: 'white',
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 30,
  },
  ImageStyles: {
    resizeMode: 'cover',
  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 14,
  },
  ButtonStyles: {
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: Colors.PRIMARY_WHITE,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
