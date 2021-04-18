import React, { Component } from 'react';
import {ScrollView, View} from 'react-native';

export class Container extends Component {
  render() {
    let {children, scroll} = this.props;
    let style = [{paddingHorizontal: 20, marginTop: 21}, this.props.style]
    if (scroll) return <ScrollView style={style}>{children}</ScrollView>
    return <View style={style}>{children}</View>
  }
}
