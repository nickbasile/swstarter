import {StyleSheet} from 'react-native';

const defaultStyles = {
  colors: {
    black: '#000000',
    grayDarkest: 'rgb(56, 56, 56)',
    grayDark: 'rgb(218, 218, 218)',
    gray: 'rgb(196, 196, 196)',
    green: 'rgb(10, 180, 99)',
    blue: 'rgb(0, 148, 255)',
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
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    letterSpacing: defaultStyles.lineSpacing,
    color: defaultStyles.colors.grayDarkest,
  },
  headerSecondary: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    letterSpacing: defaultStyles.lineSpacing,
    color: defaultStyles.colors.grayDarkest,
  },
  textStatus: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    letterSpacing: defaultStyles.letterSpacing,
    color: defaultStyles.colors.gray,
  },
  textParagraph: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    letterSpacing: defaultStyles.letterSpacing,
    color: defaultStyles.colors.grayDarkest,
  },
  textLink: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    letterSpacing: defaultStyles.letterSpacing,
    color: defaultStyles.colors.grayDarkest,
  },
  textRadio: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    letterSpacing: defaultStyles.lineSpacing,
    color: defaultStyles.colors.grayDarkest,
    marginLeft: 10,
  },
  input: {
    fontFamily: 'Montserrat-Bold',
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
});

export default styles;
