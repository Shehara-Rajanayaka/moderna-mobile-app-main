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
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store/store';
import {setEmail, setPassword} from '../../../redux/authSlice';
import {Colors} from '../../../styles/Colors';
import {Fonts} from '../../../styles/fonts';
import ThemedButton from '../../../components/buttons/ThemeButton';
import CustomTextInput from '../../../components/inputs/CustomTextInput';
import {ScreenStyles} from '../../../styles/AppStyles';
import ThemedButtonWithIcon from '../../../components/buttons/ThemedButtonWithIcon';
import {Facebook, Google} from 'iconsax-react-native';
import PasswordInputField from '../../../components/inputs/PasswordInputField';

interface SignInScreenProps {
  navigation: any;
}

const SignInScreen: React.FC<SignInScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {email, password} = useSelector((state: RootState) => state.auth);

  // MARK : Function
  const HandleNext = (): void => {
    if (email === '') {
      Alert.alert('ALERT', 'Please enter your email');
      return;
    }
    if (password === '') {
      Alert.alert('ALERT', 'Please enter your password');
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{name: 'BottomTabNavigation'}],
    });
  };
  const handleEmailChange = (text: string) => {
    dispatch(setEmail(text));
  };
  // MARK : Component
  const Header: React.FC = () => {
    return (
      <View>
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
      </View>
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
            <PasswordInputField
              label="Password"
              placeholder="Enter your password"
              onChangeText={(text: string) => {
                dispatch(setPassword(text));
              }}
              value={password}
            />
            <TouchableOpacity>
              <Text style={[styles.fogotPassword]}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
          <ThemedButton title="SIgn In" theme="dark" onPress={HandleNext} />
          <DeviderView />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  ImageStyles: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
    marginTop: 20,
  },
  subContainer: {
    gap: 20,
    paddingHorizontal: 16,
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
  fogotPassword: {
    color: Colors.PRIMARY_BLACK,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: Fonts.HelveticaNowTextMedium,
    textAlign: 'left',
    fontStyle: 'normal',
    textDecorationLine: 'underline',
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
