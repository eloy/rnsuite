import React, { Component } from 'react';
import ReactNative, {StyleSheet, View, TouchableOpacity} from 'react-native';
import {getStyle, getOpt} from './styles';
import {Label, Text} from './text'
import Checkbox from './checkbox';
import I18n from './i18n';

export class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  focus() {
    this.input.focus();
  }
  render() {

    let {name, value, label, placeholder, autoFocus, autoCorrect, secureTextEntry, keyboardType, autoCapitalize, onChangeText,style, onSubmitEditing, onChange, editable, multiline, numberOfLines} = this.props;
    let {text_input_styles} = getStyle();

    let props = {name, value, label, placeholder, autoFocus, autoCorrect, secureTextEntry, keyboardType, autoCapitalize, onChangeText,style, onSubmitEditing, editable, multiline, numberOfLines};

    if (onChange && !onChangeText) {
      props.onChangeText = text => onChange({target: {name, value: text}})
    }

    let custom_style = [text_input_styles.input]

    if (style) {
      custom_style.push(style);
    }

    return (
      <View>
        <ReactNative.TextInput underlineColorAndroid='transparent' {...props}  style={custom_style} ref={el => this.input = el}></ReactNative.TextInput>
      </View>
    );

  }
}


export class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {showPassword: false}
    this.toggleSecure = this.toggleSecure.bind(this);
  }

  focus() {
    this.input.focus();
  }

  toggleSecure(ev) {
    let showPassword = !this.state.showPassword;
    this.setState({showPassword})
  }

  render() {
    let {showPassword} = this.state;
    let {name, value, placeholder, autoFocus, style, onChange, editable} = this.props;


    let props = {name, value, placeholder, autoFocus, editable};

    if (onChange) {
      props.onChangeText = text => onChange({target: {name, value: text}})
    }

    let {text_input_styles} = getStyle();
    let {colors} = getOpt();

    let custom_style = [text_input_styles.input, {paddingBottom: 5}]
    if (style) {
      custom_style.push(style);
    }

    let show_password_label = props.showPasswordLabel || 'Show Password';

    return (
      <View>
        <ReactNative.TextInput underlineColorAndroid='transparent' {...props} secureTextEntry={!showPassword}  autoCapitalize="none" style={custom_style} placeholderTextColor={colors.gray_4}  ref={el => this.input = el}></ReactNative.TextInput>

        <TouchableOpacity style={text_input_styles.checkBoxcontainer} onPress={this.toggleSecure}>
          <Checkbox value={showPassword} onChange={this.toggleSecure} />
          <Text style={text_input_styles.showPasswordText}>{show_password_label}</Text>
        </TouchableOpacity>
      </View>
    );

  }
}

export class FakeTextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {text_input_styles} = getStyle();
    let {name, value, label, placeholder, style} = this.props;


    let custom_style = [text_input_styles.input, text_input_styles.fake_input]

    if (style) {
      custom_style.push(style);
    }
    let value_el;

    if (value) {
      value_el = typeof(value) === 'string' ? <Text>{value}</Text> : value;
    } else if (placeholder) {
      value_el = <Text style={text_input_styles.placeholder} >{placeholder}</Text>
    }

    return (
      <View>
        <Label>{label}</Label>
        <View style={custom_style}>
          {value_el}
        </View>
      </View>
    );

  }
}
