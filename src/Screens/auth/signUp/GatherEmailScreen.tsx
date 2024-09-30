import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ScreenStyles, TextStyles} from '../../../styles/AppStyles';
import {Colors} from '../../../styles/Colors';
import {Fonts} from '../../../styles/fonts';
import CustomTextInput from '../../../components/inputs/CustomTextInput';
import ThemedButton from '../../../components/buttons/ThemeButton';
import ThemedButtonWithIcon from '../../../components/buttons/ThemedButtonWithIcon';
import {Facebook, Google} from 'iconsax-react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store/store';
import {setEmail} from '../../../redux/authSlice';
interface GatherEmailScreenProps {
  navigation: any;
}
const GatherEmailScreen: React.FC<GatherEmailScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const email = useSelector((state: RootState) => state.auth.email);

  // MARK : Function
  const HandleNext = (): void => {
    if (email === '') {
      Alert.alert('ALERT', 'Please enter your email');
      return;
    }
    Alert.alert('Testing Purposer', 'Select What Screen Next',[
      {
        "text":"Sign Up",
        onPress: () => navigation.navigate('VerificationDetails'),
      },
      {
        "text":"Sign In",
        onPress: () => navigation.navigate('SignIn'),
      },
    ]);
    
  };
  const handleEmailChange = (text: string) => {
    dispatch(setEmail(text));
  };
  // MARK : Component
  const Header: React.FC = () => {
    return (
      <>
        <Image
          style={[styles.ImageStyles]}
          source={require('../../../assets/images/LogoSmallBlack.png')}
        />
        <Text style={[styles.TitleStyles]}>
          Enter your email to join us or sign in.
        </Text>
        <View style={[styles.countryDataCOntainer]}>
          <Text style={[styles.bodyText]}>Sri Lanka</Text>
          <TouchableOpacity>
            <Text style={[styles.changeButtonText]}>Change</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const DeviderView: React.FC = () => {
    return (
      <View style={[styles.DeviderMainView]}>
        <View style={[styles.DeviderSideView]} />
        <Text style={[styles.DeviderMiddleText]}>OR</Text>
        <View style={[styles.DeviderSideView]} />
      </View>
    );
  };
  const Footer: React.FC = () => {
    return (
      <View>
        <ThemedButtonWithIcon
          title="Continue with Google"
          theme="light"
          iconComponent={<Google size={24} color="#000" variant="Bulk" />}
          onPress={() => {}}
        />
        <ThemedButtonWithIcon
          title="Continue with Facebook"
          theme="light"
          iconComponent={<Facebook size={24} color="#000" variant="Bold" />}
          onPress={() => {}}
        />
      </View>
    );
  };

  // MARK : Render
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.PRIMARY_WHITE}
      />
      <SafeAreaView style={[ScreenStyles.container]}>
        <ScrollView contentContainerStyle={[styles.subContainer]}>
          <Header />
          <View>
            <CustomTextInput
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
            />
            <TouchableOpacity>
              <Text style={[styles.PrivacyPolicy]}>
                By continuing, you agree to our Terms of Service and Privacy
                Policy.
              </Text>
            </TouchableOpacity>
          </View>
          <ThemedButton title="Continue" theme="dark" onPress={HandleNext} />
          <DeviderView />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default GatherEmailScreen;

const styles = StyleSheet.create({
  ImageStyles: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
  },
  subContainer: {
    gap: 20,
    padding: 16,
  },
  TitleStyles: {
    color: Colors.PRIMARY_BLACK,
    fontSize: 28,
    fontWeight: '500',
    fontFamily: Fonts.HelveticaNowTextMedium,
  },
  bodyText: {
    color: Colors.PRIMARY_BLACK,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: Fonts.HelveticaNowTextRegular,
  },
  countryDataCOntainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  PrivacyPolicy: {
    color: Colors.GRAY_600,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: Fonts.HelveticaNowTextMedium,
  },
  DeviderSideView: {
    flexGrow: 1,
    height: 1,
    backgroundColor: Colors.GRAY_300,
    marginVertical: 20,
  },
  DeviderMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  DeviderMiddleText: {
    color: Colors.GRAY_300,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: Fonts.HelveticaNowTextRegular,
    marginHorizontal: 10,
  },
  changeButtonText: {
    color: Colors.PRIMARY_BLACK,
    textDecorationLine: 'underline',
    fontWeight: '800',
  },
});
