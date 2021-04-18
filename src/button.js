import React, { Component } from 'react';
import {TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import {getStyle, getOpt} from './styles';
import {Text, H2} from './text'
import I18n from './i18n';
import Modal from './modal';
import Icon from './icon';

export class Button extends Component {
  renderIcon() {
    let {accent, small, mini, text, icon} = this.props;
    let {text_sizes} = getOpt();
    let {btn_styles} = getStyle();

    let textStyle =[btn_styles.icon];
    let size;

    if (small) size = text_sizes.default;
    else if (mini) size = text_sizes.small;
    else size = text_sizes.large;

    if (accent) {
      textStyle.push(btn_styles.button_accent_text);
    }


    if (!icon) return null;
    return <Icon style={textStyle} name={icon} size={size} />
  }

  renderContent() {
    let {accent, small, mini, text, disabled} = this.props;
    let {text_sizes} = getOpt();
    let {btn_styles, text_styles} = getStyle();

    let textStyle =[text_styles.button];

    if (small) {
      textStyle.push(btn_styles.light_text);
    } else if (mini) {
      textStyle.push(btn_styles.mini_text);
    }

    if (accent) {
      textStyle.push(btn_styles.button_accent_text);
    }


    if (disabled) {
      if (accent) {
        textStyle.push(btn_styles.button_accent_text_disabled);
      } else {
        textStyle.push(btn_styles.button_text_disabled);
      }
    }

    return (
      <View style={btn_styles.content}>
        {this.renderIcon()}
        <Text style={textStyle}>{text.toUpperCase()}</Text>
      </View>
    )
  }

  render() {
    let {onPress, onPressIn, onPressOut, accent, small, mini, text, icon, disabled} = this.props;
    let {text_sizes} = getOpt();
    let {btn_styles} = getStyle();

    let props = {onPress, onPressIn, onPressOut, disabled}
    let styles;

    if (small) {
      styles = [btn_styles.light, btn_styles.button_shadow];
    } else if (mini) {
      styles = [btn_styles.light, btn_styles.mini, btn_styles.button_shadow];
    } else{
      styles = [btn_styles.button, btn_styles.button_shadow];
    }

    if (accent) {
      styles.push(btn_styles.button_accent);
      styles.push(btn_styles.button_accent_shadow);
    }

    if (disabled) {
      if (accent) {
        styles.push(btn_styles.button_accent_disabled);
      } else {
        styles.push(btn_styles.button_disabled);
      }
    }

    // Finally, merge user styles
    if (this.props.style) styles.push(this.props.style);

    let content = this.props.children || this.renderContent();
    return (
      <TouchableOpacity {...props} style={styles}>
        {content}
      </TouchableOpacity>
    );
  }
}

export class AddButton extends Component {
  render() {
    let {onPress, small} = this.props;
    let source = small ? add_circle_small_image : add_circle_image;
    return (
      <TouchableOpacity onPress={onPress}>
        <Image source={source} style={{marginTop: SHADOW_OFFSET}}/>
      </TouchableOpacity>
    );
  }
}

export class ModalButton extends Component {
    constructor(props) {
    super(props);
    this.state = {show_modal: false}
  }

  close() {
    this.setState({show_modal: false});
  }

  confirm() {
    this.setState({show_modal: true});
  }
  destroy() {
    let {onPress} = this.props;
    this.setState({show_modal: false});
    onPress && onPress();
  }

  renderButton() {
    let {image} = this.props;
    return <Image source={image} style={{marginTop: SHADOW_OFFSET}}/>;
  }

  render() {
    let {onPress, title, actionLabel} = this.props;
    let {show_modal} = this.state;
    let {modal_btn_styles} = getStyle();

    let props_keys = Object.keys(this.props);
    if (props_keys.indexOf("when") !== -1 || props_keys.indexOf("unless") !== -1) {
      if (!this.props.when || this.props.unless) return null;
    }


    return (
      <View>
        <TouchableOpacity onPress={e => this.confirm()}>
          {this.renderButton()}
        </TouchableOpacity>

        <Modal visible={show_modal} onRequestClose={e => this.close()}>
          <View style={modal_btn_styles.modal_container}>
            <View style={modal_btn_styles.text_container}>
              <H2>{title}</H2>
            </View>
            <View style={modal_btn_styles.buttons}>
              <Button small style={modal_btn_styles.button} onPress={e => this.close()} text={I18n.t("cancel")}/>
              <Button accent small style={modal_btn_styles.button} onPress={e => this.destroy()} text={actionLabel}/>
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}

export class DestroyButton extends Component {
  render() {
    let {onPress, small, when, unless} = this.props;
    let props = {onPress};

    let props_keys = Object.keys(this.props);
    if (props_keys.indexOf("when") !== -1) props.when = this.props.when;
    if (props_keys.indexOf("unless") !== -1) props.unless = this.props.unless;

    props.title = I18n.t("destroy_confirmation");
    props.actionLabel = I18n.t("destroy")
    props.image = small ? destroy_circle_small_image : destroy_circle_image;

    return React.createElement(ModalButton, props);
  }
}



const add_circle_image = require("../assets/images/add_circle.png");
const destroy_circle_image = require("../assets/images/destroy_circle.png");
const add_circle_small_image = require("../assets/images/add_circle_small.png");
const destroy_circle_small_image = require("../assets/images/destroy_circle_small.png");
const SHADOW_OFFSET = 5;



export class Link extends Component {
  render() {
    let {onPress, text, style} = this.props;
    let {text_styles, link_styles} = getStyle();
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={[text_styles.xlarge, link_styles.text, style]}>{text.toUpperCase()}</Text>
      </TouchableOpacity>
    );

  }
}
