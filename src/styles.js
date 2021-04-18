import {StyleSheet, Platform} from 'react-native';

export function getStyle() {
  if (!current_style) {
    current_style = buildStyle();
  }
  return current_style;
}

export function getOpt() {
  return OPTIONS;
}


var current_style;
var current_options;

export const  GREEN = "#16B242";
export const PRIMARY = "#ff5252";
export const BLUE = "#26547C"

const OPTIONS = {
  text_sizes: {
    gigant: 55,
    xxlarge: 31,
    xlarge: 21,
    large: 18,
    default: 14,
    small: 12,
    mini: 9
  },

  colors: {
    primary: "#ff5252",
    light: "#FFA0A0",
    bright: "#EC2A2A",
    secondary: BLUE,
    black: "#000",
    white: "#fff",
    gray_1: "#3e3e3e",
    gray_2: "#707070",
    gray_3: "#9e9e9e",
    gray_4: "#D8D4D4",
    gray_5: "#E8E8E8",
    gray_6: "#EBEBEB",
    gray_7: "#EEEEEE",
    text: "#707070",
    green: GREEN,
    red: PRIMARY
  }
}


function buildStyle() {
  return {
    text_styles: Platform.OS === 'ios' ? buildStylesIOS() : buildStylesAndroid(),
    btn_styles: buildButtonStyles(),
    modal_btn_styles: createModalButtonStyles(),
    link_styles: createLinkStyles(),
    text_input_styles: createTextInputStyles(),
    checkbox_styles: createCheckboxStyles(),
    radio_input_styles: createRadioStyles(),
    numeric_input_styles: createNumericInputStyles(),
    base_picker_styles: createBasePickerStyles(),
    picker_styles: createPickerStyles(),
    header_styles: createHeaderStyles()
  }
}

// https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
const FONT_WEIGHT = {
  thin: "100",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700"
};


function buildStylesIOS() {
  let {colors, text_sizes} = getOpt();

  let fonts = {
    pro_display: "SF Pro Display",
    pro_text: "SF Pro Text"
  }

  return StyleSheet.create({
    default: {
      fontFamily: fonts.pro_text,
      fontWeight: FONT_WEIGHT.medium,
      fontSize: text_sizes.default, // Default value
      color: colors.text
    },
    h3: {
      fontFamily: fonts.pro_display,
      fontWeight: FONT_WEIGHT.medium,
      fontSize: text_sizes.large,
      color: colors.gray_1,
      marginBottom: 4
    },
    h2: {
      fontFamily: fonts.pro_display,
      fontWeight: FONT_WEIGHT.medium,
      fontSize: text_sizes.xlarge,
      color: colors.text
    },
    h2_bold: {
      fontFamily: fonts.pro_display,
      fontWeight: FONT_WEIGHT.bold,
      fontSize: text_sizes.xlarge,
      color: colors.text
    },

    h1: {
      fontFamily: fonts.pro_display,
      fontWeight: FONT_WEIGHT.bold,
      fontSize: text_sizes.xxlarge,
      color: colors.text
    },
    small: {
      fontFamily: fonts.pro_text,
      fontWeight: FONT_WEIGHT.medium,
      fontSize: text_sizes.small,
      color: colors.gray_2
    },
    button: {
      fontFamily: fonts.pro_text,
      fontWeight: FONT_WEIGHT.medium,
      fontSize: text_sizes.large
    },
    error: {
      fontFamily: fonts.pro_text,
      fontWeight: FONT_WEIGHT.medium,
      fontSize: text_sizes.default,
      color: colors.primary
    },
    light: {
      fontFamily: fonts.pro_text,
      fontWeight: FONT_WEIGHT.light,
      fontSize: text_sizes.default,
      color: colors.gray_2
    },
    semibold: {
      fontFamily: fonts.pro_text,
      fontWeight: FONT_WEIGHT.semibold,
      fontSize: text_sizes.default,
      color: colors.gray_2
    }
  });

}

function buildStylesAndroid() {
  let {colors, text_sizes} = getOpt();

  return StyleSheet.create({
    default: {
      fontFamily: 'sf_pro_text_medium',
      fontWeight: FONT_WEIGHT.medium,
      fontSize: text_sizes.default, // Default value
      color: colors.text
    },
    h3: {
      fontFamily: 'sf_pro_display_medium',
      fontWeight: FONT_WEIGHT.medium,
      fontSize: text_sizes.large,
      color: colors.text,
      marginBottom: 4
    },
    h2: {
      fontFamily: 'sf_pro_display_medium',
      fontWeight: FONT_WEIGHT.medium,
      fontSize: text_sizes.xlarge,
      color: colors.text
    },
    h2_bold: {
      fontFamily: 'sf_pro_display_bold',
      fontWeight: FONT_WEIGHT.bold,
      fontSize: text_sizes.xlarge,
      color: colors.text
    },

    h1: {
      fontFamily: 'sf_pro_display_bold',
      fontWeight: FONT_WEIGHT.bold,
      fontSize: text_sizes.xxlarge,
      color: colors.text
    },
    small: {
      fontFamily: 'sf_pro_text_medium',
      fontWeight: FONT_WEIGHT.medium,
      fontSize: text_sizes.small,
      color: colors.gray_2
    },
    button: {
      fontFamily: 'sf_pro_text_medium',
      fontWeight: FONT_WEIGHT.medium,
      fontSize: text_sizes.large,
      textAlign: 'center'
    },
    error: {
      fontFamily: 'sf_pro_text_medium',
      fontWeight: FONT_WEIGHT.medium,
      fontSize: text_sizes.default,
      color: colors.primary
    },
    light: {
      fontFamily: 'sf_pro_text_light',
      fontWeight: FONT_WEIGHT.light,
      fontSize: text_sizes.default,
      color: colors.gray_3
    },
    semibold: {
      fontFamily: 'sf_pro_text_semibold',
      fontWeight: FONT_WEIGHT.semibold,
      fontSize: text_sizes.default,
      color: colors.gray_4
    }
  });

}

function buildButtonStyles() {
  let {colors, text_sizes} = getOpt();

  return StyleSheet.create({
    button: {
      flex: 1,
      backgroundColor: colors.gray_7,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      borderRadius: 10,
      justifyContent: 'space-around',
      minHeight: 50,
      marginHorizontal: 4
    },
    button_shadow: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.20,
      shadowRadius: 2,
      elevation: 1
    },

    button_accent: {
      backgroundColor: '#ff5252' // .mdl-color--red-A200
    },
    button_accent_disabled: {
      backgroundColor: '#ef9a9a'
    },

    button_accent_text: {
      color: 'rgb(255,255,255)'
    },
    button_accent_text_disabled: {
      color: '#ccc'
    },

    button_accent_shadow: {
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      elevation: 0
    },

    light: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      justifyContent: 'space-around',
      marginHorizontal: 4,
      paddingVertical: 14,
      backgroundColor: colors.white,
      borderColor: colors.gray_4,
      borderWidth: 1
    },
    light_text: {
      fontSize: text_sizes.default,
      color: colors.gray_2
    },
    mini: {
      flex: 0,
      marginVertical: 12,
      paddingHorizontal: 21,
      paddingVertical: 1,
      justifyContent: 'center'
    },
    mini_text: {
      fontSize: text_sizes.small,
      color: colors.gray_2,
      padding: 0, margin: 0
    },

    icon: {
      marginRight: 8,
      color: colors.primary
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  });
}

function createModalButtonStyles() {
  let {colors} = getOpt();
  return StyleSheet.create({
    main: {
      margin: 40,
      backgroundColor: "white"
    },
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center"
    },
    modal_container: {
      padding: 21
    },
    text_container: {
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
      color: colors.primary
    },
    button: {
      flex: 1,
      marginHorizontal: 4
    },
    buttons: {
      marginTop: 45,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
    }
  });
}

function createLinkStyles() {
  let {colors} = getOpt();
  return StyleSheet.create({
    text: {
      color: colors.secondary,
      textDecorationColor: colors.secondary,
      textDecorationLine: "underline"
    }
  });
}


function createTextInputStyles() {
  let {colors} = getOpt();
  return StyleSheet.create({
    input: {
      height: 40,
      marginBottom: 20,
      paddingHorizontal: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.primary
    },
    checkBoxcontainer: {
      flexDirection: 'row',
      marginBottom: 14
    },
    showPasswordText: {
      marginLeft: 4
    },
    fake_input: {
      paddingBottom: 8,
      justifyContent: "flex-end"
    },
    placeholder: {
      color: colors.gray_4
    }
  });
}

function createCheckboxStyles() {
  let {colors} = getOpt();
  return StyleSheet.create({
    touchable: {
      borderColor: 'rgba(158, 158, 158, 0.2)',
      borderWidth: 1,
      height: 16,
      width: 16
    }
  });
}

function createRadioStyles() {
  return StyleSheet.create({
    options: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center"
    },
    option: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      marginRight: 14
    },
    icon: {
      marginRight: 4
    }

  });
}

function createNumericInputStyles() {
  let {colors} = getOpt();

  return StyleSheet.create({
    inner_container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 21
    },
    input: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      height: 96
    },
    buttons: {
      flex: 1,
      flexDirection: 'column',
      height: 96
    },
    btn: {
      height: 48,
      color: colors.gray_2
    }
  });
}

function createBasePickerStyles() {
  let {colors} = getOpt();
  return StyleSheet.create({
    input: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    input_text: {
      fontSize: 16
    },
    readOnly: {
      color: '#c9c9c9'
    },
    placeholder: {
      color: "#969696"
    },
    item: {
      backgroundColor: colors.primary,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 54,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomWidth: .6,
      borderBottomColor: "#c00"
    },
    item_multiple: {
      justifyContent: 'flex-start'
    },
    checkbox: {
      marginRight: 8
    },
    selected_item: {
      color: '#06556D'
    },
    item_text: {
      fontSize: 16
    }
  });
}

function createPickerStyles() {
  let {colors} = getOpt();

  return StyleSheet.create({
    input: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    input_text: {
      fontSize: 16
    },
    readOnly: {
      color: '#c9c9c9'
    },
    placeholder: {
      color: "#969696"
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 54,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomWidth: .6,
      borderBottomColor: "#ccc",
      backgroundColor: '#fff'
    },
    item_multiple: {
      justifyContent: 'flex-start'
    },
    checkbox: {
      marginRight: 8
    },
    selected_item: {
      color: colors.green
    },
    item_text: {
      fontSize: 16
    }
  })
  ;
}

function createHeaderStyles() {
  let {colors} = getOpt();

  return StyleSheet.create({
    header: {
      height:  64,
      flexDirection: 'row',
      alignItems: 'center'
    },
    header_android: {
      marginTop: 21
    },
    header_ios: {
      paddingTop: 14
    },
    header_menu: {

    },
    header_title: {
      paddingLeft: 8
    },
    header_left: {
      justifyContent: "center",
      alignItems: "center",
      minWidth: 50,
      height: "100%"
    },
    header_buttons: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      height: "100%"
    },
    header_buttons_container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      color: "#444"
    },
    body: {
    }
  });
}
