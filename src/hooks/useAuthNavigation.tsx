import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthNavigationParams} from '../types/commonNavigationParams';

const useAuthNavigation = () => {
  const navigation = useNavigation<NavigationProp<AuthNavigationParams>>();

  const navigateToSignUp = () => {
    navigation.navigate('GatherEmail');
  };

  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const navigateToVerificationDetails = () => {
    navigation.navigate('VerificationDetails');
  };

  return {navigateToSignUp, navigateToSignIn};
};

export default useAuthNavigation;
