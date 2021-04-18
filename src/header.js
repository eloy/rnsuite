import React, { Component } from 'react'
import {Platform, StyleSheet, View, TouchableOpacity, Text} from 'react-native'
import {getStyle, getOpt} from './styles';

export default class Header extends Component {

  render() {
    let {title, onPress, children} = this.props;
    let {header_styles} = getStyle();

    let platform_styles = Platform.OS === 'ios' ? header_styles.header_ios: header_styles.header_android;
    let styles = [platform_styles, header_styles.header];

    if (this.props.style) styles.push(this.props.style);
    return(
      <View style={styles} onPress={onPress} >
        {children}
      </View>

    );
  }
}

Header.Title = class HeaderTitle extends Component {
  render() {
    let {textStyle, containerStyle, children} = this.props;
    let {text_input_styles, header_styles} = getStyle();
    let {colors} = getOpt();

    return (
      <View style={[header_styles.header_title, containerStyle]}>
        <Text style={[text_input_styles.h2_bold, {color: colors.gray_1}, textStyle]}>{children}</Text>
      </View>
    )
  }
}

Header.Left = class HeaderLeft extends Component {
  render() {
    let {children, onPress, style} = this.props;
    let {header_styles} = getStyle();

    return (
      <TouchableOpacity style={[header_styles.header_menu, header_styles.header_left, style]} onPress={onPress}>
        {children}
      </TouchableOpacity>
    )
  }
}

Header.Right = class HeaderRight extends Component {
  render() {
    let {style} = this.props;
    let {header_styles} = getStyle();

    return (
      <View style={[header_styles.header_buttons, style]}>
        <View style={header_styles.header_buttons_container}>
          {this.props.children}
        </View>
      </View>
    )
  }
}
