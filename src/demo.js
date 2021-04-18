import React, { Component } from 'react';
import {Text, ScrollView} from 'react-native';

import {Container} from './containers';
import {Label, H1, H2, H3} from './text';
import Icon from './icon';
import {Button} from './button';
import Checkbox from './checkbox';
import {TextInput, PasswordInput} from './text_input';
import NumericInput from './numeric';
import RadioGroup from './radio';
import {Picker} from './picker';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {btn_counter: 0, checkbox: false, text: '', numeric: 0, password: '', radio: '', picker: ''};
  }

  render() {
    let {btn_counter, checkbox, text, numeric, password, radio, picker} = this.state;
    let btn_text = "Button clicked " + btn_counter + " times";
    return (
      <ScrollView>
        <Container>
          <H1>H1 header XX</H1>
          <H2>H2 header</H2>
          <H3>H3 header</H3>
        </Container>

        <Container>
          <H1>Inputs</H1>
          <Label>Checkbox</Label>
          <Checkbox value={checkbox} onChange={e => this.setState({checkbox: !checkbox})} />

          <Label>Text Input</Label>
          <TextInput placeholder="Enter some string" value={text} onChange={e => this.setState({text: e.target.value})} />

          <Label>Password Input</Label>
          <PasswordInput placeholder="Enter some password" value={password} onChange={e => this.setState({password: e.target.value})} />

          <Label>Picker Input</Label>
          <Picker value={picker} options={PICKER_OPTIONS} onChange={e => this.setState({picker: e.target.value})} />

          <Label>Radio Input</Label>
          <RadioGroup value={radio} options={RADIO_OPTIONS} onChange={e => this.setState({radio: e.target.value})} />

          <Label>Numeric Input</Label>
          <NumericInput placeholder="Enter some number" value={numeric} onChange={e => this.setState({numeric: e.target.value})} />

        </Container>

        <Container>
          <H1>Buttons</H1>
          <Button text={btn_text} onPress={e => this.setState({btn_counter: btn_counter + 1})} />
          <Button accent text="Accent Button" onPress={e => this.setState({btn_counter: btn_counter + 1})} />
          <Button mini text="Mini Button" onPress={e => this.setState({btn_counter: btn_counter + 1})} />
          <Button disabled text="Disabled Button" onPress={e => this.setState({btn_counter: btn_counter + 1})} />
        </Container>

      </ScrollView>
    )
  }
}

const RADIO_OPTIONS = [
  {id: 0, label: 'Foo'},
  {id: 1, label: 'Bar'}
]

const PICKER_OPTIONS = [
  {id: 0, label: 'Foo'},
  {id: 1, label: 'Bar'}
]
