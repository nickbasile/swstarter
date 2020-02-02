import {StyleSheet} from 'react-native';

const baseStyles = {
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
  navBar: {
    borderBottomColor: baseStyles.colors.green,
    borderBottomWidth: 1,
    height: 70,
  },
  pageTitle: {
    borderBottomWidth: 1,
    borderBottomColor: baseStyles.colors.gray,
    paddingBottom: 9.5,
  },
  navTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    letterSpacing: baseStyles.lineSpacing,
    color: baseStyles.colors.green,
  },
  headerPrimary: {
    fontFamily: baseStyles.fonts.primaryBold,
    fontSize: 18,
    letterSpacing: baseStyles.lineSpacing,
    color: baseStyles.colors.grayDarkest,
  },
  headerSecondary: {
    fontFamily: baseStyles.fonts.primaryBold,
    fontSize: 14,
    letterSpacing: baseStyles.lineSpacing,
    color: baseStyles.colors.grayDarkest,
  },
  textStatus: {
    fontFamily: baseStyles.fonts.primaryBold,
    fontSize: 14,
    letterSpacing: baseStyles.letterSpacing,
    color: baseStyles.colors.gray,
    textAlign: 'center',
  },
  textParagraph: {
    fontFamily: baseStyles.fonts.primaryRegular,
    fontSize: 14,
    letterSpacing: baseStyles.letterSpacing,
    color: baseStyles.colors.grayDarkest,
  },
  textLink: {
    fontFamily: baseStyles.fonts.primaryRegular,
    fontSize: 14,
    letterSpacing: baseStyles.letterSpacing,
    color: baseStyles.colors.blue,
  },
  textRadio: {
    fontFamily: baseStyles.fonts.primaryBold,
    fontSize: 14,
    letterSpacing: baseStyles.lineSpacing,
    color: baseStyles.colors.grayDarkest,
    marginLeft: 10,
  },
  textButton: {
    fontFamily: baseStyles.fonts.primaryBold,
    textAlign: 'center',
    lineHeight: 22,
    letterSpacing: 0,
    color: baseStyles.colors.white,
  },
  input: {
    fontFamily: baseStyles.fonts.primaryBold,
    fontSize: 14,
    letterSpacing: baseStyles.letterSpacing,
    color: baseStyles.colors.black,
    borderWidth: 1,
    borderColor: baseStyles.colors.grayDark,
    padding: 10,
    borderRadius: 4,
    marginTop: 15,
  },
  radioEmpty: {
    height: 13,
    width: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: baseStyles.colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioChecked: {
    height: 13,
    width: 13,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: baseStyles.colors.blue,
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
    backgroundColor: baseStyles.colors.gray,
    borderRadius: 26.5,
    padding: 8,
  },
  buttonActive: {
    width: '100%',
    backgroundColor: baseStyles.colors.green,
    borderRadius: 26.5,
    padding: 8,
  },
  buttonGroupBottom: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 60,
    alignItems: 'center',
    width: '100%',
  },
  result: {
    paddingVertical: 19.5,
    borderBottomWidth: 1,
    borderBottomColor: baseStyles.colors.gray,
  },
  statusMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 130,
  },
  container: {
    marginTop: 30,
    marginHorizontal: 30,
    flexDirection: 'column',
    height: '100%',
  },
});

export {styles, baseStyles};
