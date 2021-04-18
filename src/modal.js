import React, { Component } from 'react';
import ReactNative, {Dimensions, StyleSheet, View, TouchableHighlight, StatusBar} from 'react-native';


const Modal = (props) => {
  if (props.visible) {
    return <ModalComponent {...props} />
  }
  return null;
}

export default Modal;

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.resize = this.resize.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    Modal.active_modal = this;
    Dimensions.addEventListener("change", this.resize);
    let window = Dimensions.get('window');
    this.resize({window});
  }

  componentWillUnmount() {
    Modal.active_modal = undefined;
    Dimensions.removeEventListener("change", this.resize);
  }

  resize({window}) {
    let {height, width} = window;
    this.setState({height, width});
  }

  close() {
    let {onRequestClose} = this.props;
    onRequestClose && onRequestClose();
  }

  renderFullScreen() {
    let props = {visible: true, animationType: "slide", transparent: false, hardwareAccelerated: true, onRequestClose: this.close, onDismiss: this.close}

    return (
      <ReactNative.Modal {...props}>
        {this.props.children}
      </ReactNative.Modal>
    )
  }

  renderBottom() {
    let {children} = this.props;
    let {height, width} = this.state;

    let overlayStyle = [bottomStyles.overlay, {height, width}]
    let containerStyle = [bottomStyles.container, {width}];


    let props = {visible: true, animationType: "fade", transparent: true, hardwareAccelerated: true, onRequestClose: this.close, onDismiss: this.close}

    return (
      <ReactNative.Modal {...props}>
        <StatusBar translucent={true} barStyle="light-content" backgroundColor="rgba(0,0,0, 0.6)"></StatusBar>
        <TouchableHighlight style={overlayStyle} onPress={this.close}>
          <View behavior="padding" style={containerStyle}>
            {children}
          </View>
        </TouchableHighlight>
      </ReactNative.Modal>
    )
  }



  renderModal() {
    let {children} = this.props;
    let {height, width} = this.state;

    let overlayStyle = [modalStyles.overlay, {height, width}]

    let containerWidth = width * 0.9;
    let containerHeight = height * 0.6;
    containerHeight = null;
    let containerStyle = [modalStyles.container, {width: containerWidth, height: containerHeight}];


    let props = {visible: true, animationType: "fade", transparent: true, hardwareAccelerated: true, onRequestClose: this.close, onDismiss: this.close}

    return (
      <ReactNative.Modal {...props}>
        <StatusBar translucent={true} barStyle="light-content" backgroundColor="rgba(0,0,0, 0.6)"></StatusBar>
        <TouchableHighlight style={overlayStyle} onPress={this.close}>
          <View behavior="padding" style={containerStyle}>
            {children}
          </View>
        </TouchableHighlight>
      </ReactNative.Modal>
    )
  }

  render() {
    switch(this.props.mode) {
    case "fullscreen": return this.renderFullScreen();
    case "plain": return this.renderBottom();
    case "modal": return this.renderModal();
    default: return this.renderModal();
    }
  }
}

const modalStyles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0, 0.6)",
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
    elevation: 10
  },
  container: {
    paddingVertical: 16,
    backgroundColor: "rgba(255,255,255, 1)",
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.20,
    shadowRadius: 2,
    zIndex: 100,
    elevation: 11
  }
})

const bottomStyles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0, 0.6)",
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 99,
    elevation: 10
  },
  container: {
    paddingTop: 16,
    paddingBottom: 60,
    backgroundColor: "rgba(255,255,255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.20,
    shadowRadius: 2,
    zIndex: 100,
    elevation: 11
  }
})
