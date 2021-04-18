import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, TouchableHighlight} from 'react-native';
import {getStyle} from './styles';
import Modal from './modal';
import Header from './header';
import Icon from './icon';
import Checkbox from './checkbox';
import BasePicker from './base_picker';
import {Text} from './text';


export class Picker extends BasePicker {
  constructor(props) {
    super(props);
    this.modalMode = "fullscreen";
  }

  select(value) {
    console.log("Selected");
    let {name, onChange} = this.props;
    let event = {target: {name, value}}
    onChange && onChange(event)
    this.closeModal();
  }

  renderOption(opt) {
    let {value} = this.props;
    let {picker_styles} = getStyle();

    let label_el = opt.component || <Text style={picker_styles.item_text}>{opt.label}</Text>
    let id = opt.id != undefined ? opt.id : opt.key;
    let selected_el = id === value && (<Icon name="check-circle" style={picker_styles.selected_item} />)

    return (
      <TouchableHighlight onPress={e => this.select(id)} key={opt.key || opt.label}>
        <View style={picker_styles.item}>
          {label_el}
          {selected_el}
        </View>
      </TouchableHighlight>
    )
  }

  renderBlank() {
    if (!this.props.allowBlank) return null;
    let label = this.props.blankLabel || "";
    return this.renderOption({key: '_blank', id: '', label})
  }

  getValue() {
    let {options, value, placeholder} = this.props;
    let {picker_styles} = getStyle();

    let label;

    let selected = options.find(o => o.key === value);
    label = selected && (selected.component || selected.label);

    if (!label) {
      label = <Text style={picker_styles.placeholder}>{placeholder || "Select one"}</Text>
    }
    return label;
  }

  renderModal() {
    let {options, value, placeholder} = this.props;
    return (
      <View>
        <Header>
          <Header.Left >
            <Icon name="arrow-back" onPress={this.closeModal} containerStyle={{paddingHorizontal: 10}} />
          </Header.Left>
          <Header.Title>{placeholder}</Header.Title>
        </Header>

        <ScrollView>
          <View style={{paddingBottom: 150}}>
            {this.renderBlank()}
            {options.map(o => this.renderOption(o))}
          </View>
        </ScrollView>
      </View>
    )
  }
}


export class MultiPicker extends BasePicker {
  constructor(props) {
    super(props);
    this.modalMode = "fullscreen";
  }

  change({id}) {
    let {value} = this.props;
    let checked = value.indexOf(id) !== -1
    let new_value = !checked;

    if (new_value) {
      value.push(id);
    } else {
      value = value.filter(i => i !== id)
    }

    this.props.onChange({target: {name: this.props.name, value: value}});
  }

  renderOption(opt) {
    let {value} = this.props;
    let {picker_styles} = getStyle();

    let key = opt.key || opt.id;
    let checked = value.indexOf(opt.id) !== -1

    return (
      <TouchableHighlight onPress={e => this.change(opt)} key={opt.key || opt.label}>
        <View style={[picker_styles.item, picker_styles.item_multiple]}>
          <Checkbox  style={picker_styles.checkbox} name={opt.id} key={this.props.name + "-" + key} checked={checked} value={checked} onChange={e => this.change(opt)}/>
          <Text style={[picker_styles.item_text, picker_styles.item_text_multiple]}>{opt.label}</Text>
        </View>
      </TouchableHighlight>
    )
  }


  getValue() {
    let {options, value, placeholder} = this.props;
    let {picker_styles} = getStyle();

    if (!value || value.length === 0) {
      return <Text style={picker_styles.placeholder}>{placeholder || "Select one"}</Text>
    }

    let labels = value.map(v => options.find(o => o.id === v).label);
    return labels.join(", ");
  }

  renderModal() {
    let {options, value, placeholder} = this.props;
    return (
      <View>
        <Header>
          <Header.Left >
            <Icon name="arrow-back" onPress={this.closeModal} containerStyle={{paddingHorizontal: 10}} />
          </Header.Left>
          <Header.Title>{placeholder}</Header.Title>
        </Header>

        <ScrollView >
          <View style={{paddingBottom: 150}}>
            {options.map(o => this.renderOption(o))}
          </View>
        </ScrollView>
      </View>
    )
  }
}
