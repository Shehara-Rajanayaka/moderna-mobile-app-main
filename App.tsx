import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import SplashScreen from './src/Screens/common/SplashScreen';
import {Colors} from './src/styles/Colors';
import OnboardScreen from './src/Screens/common/OnboardScreen';
import GatherEmailScreen from './src/Screens/auth/signUp/GatherEmailScreen';
import SetupSigninDetailsScreen from './src/Screens/auth/signUp/SetupSigninDetailsScreen';
import VerificationDetailsScreen from './src/Screens/auth/signUp/VerificationDetailsScreen';
import SignInScreen from './src/Screens/auth/signIn/SignInScreen';
import {AppNavigationParams} from './src/types/commonNavigationParams';
import SignUpSuccessScreen from './src/Screens/auth/signUp/SignUpSuccessScreen';
import MainTabNavigator from './src/navigation/MainTabNavigator';

const Stack = createNativeStackNavigator<AppNavigationParams>();

const ScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  headerBackTitleVisible: false,
  headerBackVisible: false,
  headerTitle: '',
  headerTintColor: Colors.PRIMARY_BLACK,
  headerStyle: {backgroundColor: Colors.PRIMARY_WHITE},
  headerShadowVisible: false,
  statusBarColor: Colors.PRIMARY_WHITE,
};

const backTitleEnable: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  headerTitle: '',
  headerShadowVisible: false,
  headerStyle: {backgroundColor: Colors.PRIMARY_WHITE},
  headerShown: true,
};

const disableHeader: NativeStackNavigationOptions = {
  headerShown: false,
};

const transludeStatusBar: NativeStackNavigationOptions = {
  statusBarTranslucent: true,
  statusBarColor: Colors.PRIMARY_WHITE,
};

interface ScreenConfig {
  name: keyof AppNavigationParams;
  component: React.ComponentType<any>;
  options: NativeStackNavigationOptions;
}

const screens: ScreenConfig[] = [
  {
    name: 'Splash',
    component: SplashScreen,
    options: {
      ...ScreenOptions,
      statusBarTranslucent: true,
    },
  },
  {
    name: 'Onboard',
    component: OnboardScreen,
    options: {
      statusBarTranslucent: true,
      headerShown: false,
      fullScreenGestureEnabled: true,
    },
  },
  {
    name: 'SignIn',
    component: SignInScreen,
    options: {
      statusBarTranslucent: true,
      headerShown: true,
      fullScreenGestureEnabled: true,
      headerShadowVisible: false,
      headerStyle: {backgroundColor: Colors.PRIMARY_WHITE},
      headerBackTitleVisible: false,
      headerBackVisible: false,
      headerTitle: '',
    },
  },
  {
    name: 'GatherEmail',
    component: GatherEmailScreen,
    options: {
      statusBarTranslucent: true,
      statusBarColor: 'white',
      statusBarStyle: 'dark',
      ...backTitleEnable,
    },
  },
  {
    name: 'SetupSigninDetails',
    component: SetupSigninDetailsScreen,
    options: {
      statusBarColor: 'white',
      statusBarStyle: 'dark',
      ...backTitleEnable,
    },
  },
  {
    name: 'VerificationDetails',
    component: VerificationDetailsScreen,
    options: {
      statusBarColor: 'white',
      statusBarStyle: 'dark',
      ...backTitleEnable,
    },
  },
  {
    name: 'SignUpSuccess',
    component: SignUpSuccessScreen,
    options: {
      ...disableHeader,
      ...transludeStatusBar,
      statusBarStyle: 'dark',
    },
  },
  {
    name: 'BottomTabNavigation',
    component: MainTabNavigator,
    options: {
      headerShown: false,
      headerBackTitleVisible: false,
      ...disableHeader,
    },
  },
];

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          {screens.map(({name, component, options}) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
