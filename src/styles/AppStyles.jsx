import {Dimensions, StyleSheet} from 'react-native';
import {Fonts} from './fonts';

export const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  subContainer: {
    padding: 16,
  },
  HomeSubContainer:{
    padding: 16,
    marginTop: 16,
  }
});

export const SpaceStyles = StyleSheet.create({
  m4: {
    gap: 4,
  },
  m8: {
    gap: 8,
  },
  m16: {
    gap: 16,
  },
});

export const TextStyles = StyleSheet.create({
  H1: {
    fontSize: 24, // Slightly reduced for better mobile fit
    fontWeight: 'bold',
    color: '#000',
    fontFamily: Fonts.HelveticaNowTextBold,
  },
  H2: {
    fontSize: 22, // Slight adjustment for better readability
    lineHeight: 28,
    color: '#000',
    fontWeight: '700',
    letterSpacing: -0.3, // Adjusted for mobile clarity
    fontFamily: Fonts.HelveticaNowTextBold,
  },
  H3: {
    fontSize: 18, // Better suited for sub-headings
    lineHeight: 24,
    color: '#000',
    fontWeight: '500',
    letterSpacing: -0.3,
    fontFamily: Fonts.HelveticaNowTextBold,
  },
  H4: {
    fontSize: 16, // Common size for smaller headings
    fontWeight: 'normal',
    color: '#000',
    fontFamily: Fonts.HelveticaNowTextBold,
  },
  H5: {
    fontSize: 14, // Often used for captions or labels
    fontWeight: 'normal',
    color: '#000',
    fontFamily: Fonts.HelveticaNowTextBold,
  },
  H6: {
    fontSize: 16, // Adjusted to align with H4
    fontWeight: 'normal',
    color: '#000',
    fontFamily: Fonts.HelveticaNowTextBold,
  },
  H7: {
    fontSize: 20, // Better suited for secondary headings
    fontWeight: '700',
    color: '#000',
    fontFamily: Fonts.HelveticaNowTextBold,
  },
  P: {
    fontSize: 14, // Standard paragraph size
    fontWeight: 'normal',
    color: '#000',
    fontFamily: Fonts.HelveticaNowTextRegular,
    lineHeight: 20, // Added for better text readability
  },
});

export const ScreenSizes = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};
