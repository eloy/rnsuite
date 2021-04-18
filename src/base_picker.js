import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight,} from 'react-native';
import {getStyle} from './styles';
import Modal from './modal';
import {Text, Label} from './text';
import {FakeTextInput} from './text_input';

export default class BasePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {show_modal: false}
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal() {
    if (this.props.readOnly) return;
    this.setState({show_modal: true})
  }


  closeModal() {
    this.setState({show_modal: false})
  }

  getValue() {
    return this.props.value;

  }

  renderModal() {
    return null;
  }

  render() {
    let {show_modal} = this.state;
    let {label, placeholder, readOnly} = this.props;
    let {base_picker_styles} = getStyle();

    let style = [base_picker_styles.input]
    let textStyle = [base_picker_styles.input_text];

    if (readOnly) textStyle.push(base_picker_styles.readOnly)

    if (this.props.style) {
      style.push(this.props.style);
    }

    return (
      <View>
        <TouchableHighlight onPress={this.showModal}>
          <FakeTextInput label={label} value={this.getValue()} />
        </TouchableHighlight>

        <Modal visible={show_modal} onRequestClose={this.closeModal} mode={this.modalMode}>
          {this.renderModal()}
        </Modal>
      </View>
    );
  }
}
