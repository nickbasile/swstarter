import {StyleSheet} from 'react-native';

const defaultStyles = {
  colors: {
    black: '#000000',
    grayDarkest: 'rgb(56, 56, 56)',
    grayDark: 'rgb(218, 218, 218)',
    gray: 'rgb(196, 196, 196)',
    white: '#FFFFFF',
    green: 'rgb(10, 180, 99)',
    blue: 'rgb(0, 148, 255)',
  },
  fonts: {
    primaryBold: 'Montserrat-Bold',
    primaryRegular: 'Montserrat-Regular',
  },
  lineSpacing: -0.01,
};

const styles = StyleSheet.create({
  headerNav: {
    borderBottomColor: defaultStyles.colors.green,
    borderBottomWidth: 1,
    padding: 16,
    alignItems: 'center',
  },
  pageTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    letterSpacing: defaultStyles.lineSpacing,
    color: defaultStyles.colors.green,
  },
  headerPrimary: {
    fontFamily: defaultStyles.fonts.primaryBold,
    fontSize: 18,
    letterSpacing: defaultStyles.lineSpacing,
    color: defaultStyles.colors.grayDarkest,
  },
  headerSecondary: {
    fontFamily: defaultStyles.fonts.primaryBold,
    fontSize: 14,
    letterSpacing: defaultStyles.lineSpacing,
    color: defaultStyles.colors.grayDarkest,
  },
  textStatus: {
    fontFamily: defaultStyles.fonts.primaryBold,
    fontSize: 14,
    letterSpacing: defaultStyles.letterSpacing,
    color: defaultStyles.colors.gray,
  },
  textParagraph: {
    fontFamily: defaultStyles.fonts.primaryRegular,
    fontSize: 14,
    letterSpacing: defaultStyles.letterSpacing,
    color: defaultStyles.colors.grayDarkest,
  },
  textLink: {
    fontFamily: defaultStyles.fonts.primaryRegular,
    fontSize: 14,
    letterSpacing: defaultStyles.letterSpacing,
    color: defaultStyles.colors.grayDarkest,
  },
  textRadio: {
    fontFamily: defaultStyles.fonts.primaryBold,
    fontSize: 14,
    letterSpacing: defaultStyles.lineSpacing,
    color: defaultStyles.colors.grayDarkest,
    marginLeft: 10,
  },
  textButton: {
    fontFamily: defaultStyles.fonts.primaryBold,
    textAlign: 'center',
    lineHeight: 22,
    letterSpacing: 0,
    color: defaultStyles.colors.white,
  },
  input: {
    fontFamily: defaultStyles.fonts.primaryBold,
    fontSize: 14,
    letterSpacing: defaultStyles.letterSpacing,
    color: defaultStyles.colors.black,
    borderWidth: 1,
    borderColor: defaultStyles.colors.grayDark,
    padding: 10,
    borderRadius: 4,
    marginTop: 15,
  },
  radioEmpty: {
    height: 13,
    width: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: defaultStyles.colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioChecked: {
    height: 13,
    width: 13,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: defaultStyles.colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 36,
  },
  buttonInactive: {
    width: '100%',
    backgroundColor: defaultStyles.colors.gray,
    borderRadius: 26.5,
    padding: 8,
  },
  buttonActive: {
    width: '100%',
    backgroundColor: defaultStyles.colors.green,
    borderRadius: 26.5,
    padding: 8,
  },
});

export default styles;
