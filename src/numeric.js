import React, { Component } from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import {getStyle, getOpt} from './styles';
import Icon from './icon';
import {Label, Text} from './text';

export default class NumericInput extends Component {
  constructor(props) {
    super(props);
    this.state = {edit_mode: false};
  }

  change(value) {
    let {name, onChange} = this.props;
    value = +value;
    let event = {target: {name: name, value: value}};
    onChange && onChange(event);
  }

  up() {
    let {name, value, onChange} = this.props;
    value = +value + 1;

    let event = {target: {name: name, value: value}};
    onChange && onChange(event);
  }

  down() {
    let {name, value, onChange} = this.props;
    value = +value - 1;

    let event = {target: {name: name, value: value}};
    onChange && onChange(event);
  }


  renderValue() {
    let {value, decorator} = this.props;
    let {text_input_styles, numeric_input_styles} = getStyle();
    let {colors} = getOpt();

    if (this.state.edit_mode) {
      value = "" +value;
      let style = [text_input_styles.h1, {fontSize: 55, color: colors.black}]
      return (
        <View style={numeric_input_styles.input}>
          <TextInput autoFocus={true} underlineColorAndroid='transparent' keyboardType="numeric" returnKeyType='done' style={style} value={value} onChangeText={v => this.change(v)} onEndEditing={e => this.setState({edit_mode: false})} onSubmitEditing={e => this.setState({edit_mode: false})}/>
        </View>
      )
    }

    value = "" + value;
    if (decorator) value = decorator(value)

    return (
      <TouchableOpacity onPress={e => this.setState({edit_mode: true})} style={numeric_input_styles.input}>

        <Text style={[text_input_styles.h1, {fontSize: 55, color: colors.black}]}>
          {value}
        </Text>

      </TouchableOpacity>
    )
  }

  render() {
    let props = this.props;
    let {numeric_input_styles} = getStyle();

    return (
      <View style={props.style}>
        <Label>{props.label}</Label>
        <View style={[numeric_input_styles.inner_container, props.inner_style]}>

            {this.renderValue()}

          <View style={numeric_input_styles.buttons}>
            <TouchableOpacity onPress={e => this.up()}>
              <View><Icon name="chevron-up" size={48} style={numeric_input_styles.btn}/></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={e => this.down()}>
              <View><Icon name="chevron-down" size={48} style={numeric_input_styles.btn}/></View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );

  }
}
