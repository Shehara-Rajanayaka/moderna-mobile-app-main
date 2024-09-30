import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextStyles} from '../../../styles/AppStyles';
import LogoSmallWhite from '../../../assets/images/LogoSmallWhite';
import ThemedButton from '../../../components/buttons/ThemeButton';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../../redux/loadingSlice';
import LoadingIndicator from '../../../components/loading/LoadingIndicator';

interface SignUpSuccessScreenProps {
  navigation: any;
}
const SignUpSuccessScreen: React.FC<SignUpSuccessScreenProps> = ({
  navigation,
}) => {
  const dispatch = useDispatch();

  const simulateLoading = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
      navigation.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      });
    }, 3000);
  };
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <LoadingIndicator />
      <ImageBackground
        source={require('../../../assets/images/SuccessUIImage.png')}
        style={[styles.backgroundImage]}>
        <View style={[{flexGrow: 1}]} />
        <View style={[styles.MainContainer]}>
          <LogoSmallWhite />
        </View>
        <View style={[{flexGrow: 1}]} />
        <View
          style={[
            {
              paddingBottom: 32,
              paddingHorizontal: 16,
            },
          ]}>
          <Text style={[TextStyles.H1, styles.TitileText]}>
            You have been signed in successfully.
          </Text>
          <ThemedButton
            title="Continue"
            onPress={simulateLoading}
            theme="light"
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default SignUpSuccessScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainContainer: {
    width: '100%',
    alignContent: 'center',
    padding: 20,
    gap: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TitileText: {
    color: 'white',
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 30,
  },
});
