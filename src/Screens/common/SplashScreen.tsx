import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LogoMain from '../../assets/images/LogoMain';
import {ScreenStyles} from '../../styles/AppStyles';

interface SplashScreenProps {
  navigation: any;
}
const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const isLogged = false;

  //MARK: useEffect
  useEffect(() => {
    setTimeout(() => {
      //MARK: Navigation
      if (isLogged) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Onboard');
      }
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={[ScreenStyles.container, styles.container]}>
      <LogoMain />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
