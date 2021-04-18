import React, { Component } from 'react'
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native'
import {Label} from './text';
import {getStyle} from './styles';

export default class RadioGroup extends Component {
  select(value) {
    let {name, onChange} = this.props;
    let event = {target: {name, value}};
    onChange && onChange(event);
  }

  renderOption(option) {
    let {radio_input_styles} = getStyle();
    let id = option.id || option.key;
    let selected = id === this.props.value;
    let source = selected ? ICON_ON : ICON_OFF;
    return (
      <TouchableOpacity onPress={e => this.select(id)} key={option.key || option.id}>
        <View style={radio_input_styles.option}>
          <Image source={source} style={radio_input_styles.icon}/>
          <Text>{option.label}</Text>
        </View>
      </TouchableOpacity>
    )

  }

  render() {
    let {label, value, options, style} = this.props;
    let {radio_input_styles} = getStyle();
    return (
      <View style={style}>
        <Label>{label}</Label>
        <View style={radio_input_styles.options}>
          {options.map(o => this.renderOption(o))}
        </View>
      </View>
    )
  }
}

const ICON_OFF = require("../assets/images/radio_off.png");
const ICON_ON = require("../assets/images/radio_on.png");
