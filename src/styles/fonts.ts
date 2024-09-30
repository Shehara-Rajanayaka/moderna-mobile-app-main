export const Fonts = {
  HelveticaNowTextBlack: 'HelveticaNowText-Black',
  HelveticaNowTextBold: 'HelveticaNowText-Bold',
  HelveticaNowTextLight: 'HelveticaNowText-Light',
  HelveticaNowTextMedium: 'HelveticaNowText-Medium',
  HelveticaNowTextRegular: 'HelveticaNowText-Regular',
  HelveticaNowTextThin: 'HelveticaNowText-Thin',
} as const;

export type FontName = keyof typeof Fonts;
