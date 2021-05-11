import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {getStyle} from './styles';
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
    let size = 12;
    if (this.props.value) {
      return <Icon name="check-square" size={size} />
    } else {
      return null;
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
