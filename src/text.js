import React, { Component } from 'react';
import ReactNative, {StyleSheet, View} from 'react-native';
import {getStyle, getOpt} from './styles';

export class Text extends Component {
  render() {
    let {children, style} = this.props;
    let {text_styles} = getStyle();
    return(
      <ReactNative.Text style={[text_styles.default, style]} >{children}</ReactNative.Text>
    );
  }
}

export class SmallText extends Component {
  render() {
    let {children, style} = this.props;
    let {text_styles} = getStyle();
    return(
      <ReactNative.Text style={[text_styles.small, style]} >{children}</ReactNative.Text>
    );
  }
}


export class H1 extends Component {
  render() {
    let {children, style} = this.props;
    let {text_styles} = getStyle();
    return(
      <ReactNative.Text style={[text_styles.h1, style]} >{children}</ReactNative.Text>
    );
  }
}

export class H2 extends Component {
  render() {
    let {children, style} = this.props;
    let {text_styles} = getStyle();
    return(
      <ReactNative.Text style={[text_styles.h2, style]} >{children}</ReactNative.Text>
    );
  }
}


export class H3 extends Component {
  render() {
    let {children, style} = this.props;
    let {text_styles} = getStyle();
    return(
      <ReactNative.Text style={[text_styles.h3, h3.style, style]} >{children}</ReactNative.Text>
    );
  }
}

const h3 = StyleSheet.create({
  style: {
    marginBottom: 8
  }
});

export class Label extends Component {
  render() {
    let {children} = this.props;
    let {colors} = getOpt();

    return(
      <Text style={{color: colors.secondary, fontSize: 12, marginBottom: 8}}>{children}</Text>
    )
  }
}

export class P extends Component {
  render() {
    let {children} = this.props;
    return(
      <View style={paragraph.container}>
        {children}
      </View>
    )
  }

}

const paragraph = StyleSheet.create({
  container : {
    marginBottom: 21
  }
})
