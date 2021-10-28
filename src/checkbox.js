import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableWithoutFeedback, Image} from 'react-native';
import {getStyle, getOpt} from './styles';
import Icon from './icon';
import {Label} from './text';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  toggle() {
    let {name, value} = this.props;
    value = !value;
    let event = {target: {name: name, value: value}};

    this.props.onChange && this.props.onChange(event);
  }


  renderIcon() {
    let {value} = this.props;
    let {checkbox_styles} = getStyle();

    let {images} = getOpt();
    let {checkbox_checked, checkbox_unchecked} = images;

    if (value) {
      if (checkbox_checked) {
        return <Image source={checkbox_checked} style={[checkbox_styles.checkbox, checkbox_styles.checkbox_checked]} />
      } else {
        return <Icon name="check-square" size={12} />
      }
    } else {
      if (checkbox_unchecked) {
        return <Image source={checkbox_unchecked} style={[checkbox_styles.checkbox, checkbox_styles.checkbox_unchecked]} />
      } else {
        return null;
      }

    }
  }

  render() {
    let {style, label} = this.props;
    let {checkbox_styles} = getStyle();
    return (
      <TouchableWithoutFeedback onPress={this.toggle.bind(this)}>
        <View style={{flexDirection: "row"}}>
          <View style={[checkbox_styles.touchable, style]}>
            {this.renderIcon()}
          </View>
          <Label>{label}</Label>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
