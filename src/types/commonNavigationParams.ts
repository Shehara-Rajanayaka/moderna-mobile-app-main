export type CommonNavigationParams = {
  Splash: undefined;
  Onboard: undefined;
  BottomTabNavigation: undefined;
};

export type AuthNavigationParams = {
  GatherEmail: undefined;
  SetupSigninDetails: undefined;
  SignIn: undefined;
  VerificationDetails: undefined;
  SignUpSuccess: undefined;
};

export type AppNavigationRoutes = {
  Dashboard: undefined;
  Favourites: undefined;
  ExploreProductes: undefined;
};
export type AppNavigationParams = CommonNavigationParams & AuthNavigationParams & AppNavigationRoutes;
