import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';
import {Fonts} from '../../../styles/fonts';
import {ScreenStyles} from '../../../styles/AppStyles';
import IconTextInput from '../../../components/inputs/IconTextInput';
import {Refresh} from 'iconsax-react-native';
import PasswordInputField from '../../../components/inputs/PasswordInputField';
import {AppDispatch, RootState} from '../../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCode,
  setFirstName,
  setPassword,
  setSurName,
} from '../../../redux/authSlice';
import {ThemeCheckBox} from '../../../components/checkBox/ThemeCheckBox';
import ThemedButton from '../../../components/buttons/ThemeButton';

interface VerificationDetailsScreenProps {
  navigation: any;
}
const VerificationDetailsScreen: React.FC<VerificationDetailsScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    email,
    code,
    firstName,
    surName,
    passwordContainData,
    passwordLengthAcceptable,
    password,
  } = useSelector((state: RootState) => state?.auth);

  // MARK : Component
  const Header: React.FC = () => {
    return (
      <>
        <Image
          style={[styles.ImageStyles]}
          source={require('../../../assets/images/LogoSmallBlack.png')}
        />
        <Text style={[styles.TitleStyles]}>
          Now let’s make you a Moderna Member.
        </Text>
        <View>
          <Text style={[styles.bodyText, {color: Colors.PRIMARY_BLACK}]}>
            We’ve sent a code to,
          </Text>
          <View style={[styles.countryDataCOntainer]}>
            <Text style={[styles.bodyText, {color: Colors.GRAY_500}]}>
              {email}
            </Text>
            <TouchableOpacity>
              <Text style={[styles.changeButtonText]}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
  // MARK : Functions
  const ValidationMessage: React.FC<{isValid: boolean; message: string}> = ({
    isValid,
    message,
  }) => (
    <View style={styles.passwordValidationCOntainer}>
      <Text
        style={
          isValid ? styles.passwordActiveText : styles.passwordNotActiveText
        }>
        {isValid ? '✓' : '✘'}
      </Text>
      <Text
        style={
          isValid ? styles.passwordActiveText : styles.passwordNotActiveText
        }>
        {message}
      </Text>
    </View>
  );

  // MARK : Render
  return (
    <>
      <SafeAreaView style={[ScreenStyles.container]}>
        <ScrollView
          automaticallyAdjustKeyboardInsets={true}
          contentContainerStyle={[styles.subContainer]}>
          <Header />

          <View style={[styles.CodeContainer]}>
            <IconTextInput
              placeholder="Verification Code"
              icon={<Refresh size={24} color={Colors.GRAY_500} />}
              keyboardType="numeric"
              label="Code"
              value={code}
              onChangeText={(text: any) => dispatch(setCode(text))}
              maxLength={6}
            />
            <TouchableOpacity>
              <Text style={[styles.ResendBtnText]}>Resend in 28</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              {
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                justifyContent: 'space-between',
              },
            ]}>
            <View style={styles.container}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={(text: any) => dispatch(setFirstName(text))}
                placeholderTextColor="#888"
                autoCapitalize="none"
                keyboardType="default"
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.label}>Sur Name</Text>
              <TextInput
                style={styles.input}
                placeholder="SurName"
                value={surName}
                onChangeText={(text: any) => dispatch(setSurName(text))}
                placeholderTextColor="#888"
                autoCapitalize="none"
                keyboardType="default"
              />
            </View>
          </View>
          <View>
            <PasswordInputField
              label="Password"
              onChangeText={(text: any) => dispatch(setPassword(text))}
              placeholder="Password"
              value={password}
              key={''}
              props={{}}
            />
            <ValidationMessage
              isValid={passwordLengthAcceptable}
              message="Password must be at least 8 characters long"
            />
            <ValidationMessage
              isValid={passwordContainData}
              message="Uppercase, lowercase letters and one number"
            />
          </View>
          <View>
            <ThemeCheckBox
              title={
                'Sign up for emails to get updates from Moderna on products, offers and your Member benifits.'
              }
            />
            <ThemeCheckBox
              title={"I agree to Moderna's Privacy Policy and Terms of Use."}
            />
          </View>
          <View style={[{flexGrow: 1}]} />
          <ThemedButton
            title="Create Account"
            onPress={() => navigation.navigate("SignUpSuccess")}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default VerificationDetailsScreen;

const styles = StyleSheet.create({
  passwordNotActiveText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: Fonts.HelveticaNowTextRegular,
    color: Colors.GRAY_500,
    textAlign: 'right',
  },
  passwordActiveText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: Fonts.HelveticaNowTextRegular,
    color: '#32862B',
    textAlign: 'right',
  },
  passwordValidationCOntainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    justifyContent: 'flex-start',
    paddingRight: 16,
  },
  CodeContainer: {
    width: '100%',
  },
  ResendBtnText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: Fonts.HelveticaNowTextRegular,
    color: Colors.GRAY_500,
    textAlign: 'right',
  },
  ImageStyles: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
  },
  subContainer: {
    gap: 10,
    padding: 16,
    flexGrow: 1,
  },
  TitleStyles: {
    color: Colors.PRIMARY_BLACK,
    fontSize: 28,
    fontWeight: '500',
    fontFamily: Fonts.HelveticaNowTextMedium,
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: Fonts.HelveticaNowTextRegular,
  },
  countryDataCOntainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 10,
    flexWrap: 'wrap',
  },
  changeButtonText: {
    color: Colors.PRIMARY_BLACK,
    textDecorationLine: 'underline',
    fontWeight: '800',
  },
  container: {
    marginVertical: 12,
    width: '48%',
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
  },
});
