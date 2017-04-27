import React, { Component } from 'react';
import './App.css';
import { ChromePicker } from 'react-color';
import Slider from './components/Slider';
import ReactDOM from 'react-dom';

class GradientTool extends Component {
  state = {
    firstColor: '#ff005c',
    secondColor: 'red',
    gradientAngle: 45
  };
  handleChangeForFirstColor = (color) => {
    this.setState({ firstColor: color.hex });
  };
  handleChangeForSecondColor = (color) => {
    this.setState({ secondColor: color.hex });
  };
  handleChangeForGradientAngle(e) {
    this.setState({ gradientAngle: ReactDOM.findDOMNode(this.refs.gradientSlider.refs.inp).value })
  }

  render() {
    let firstColor = this.state.firstColor;
    let secondColor = this.state.secondColor;
    let gradientAngle = this.state.gradientAngle;
    let gradientText = 'background: linear-gradient(' + gradientAngle + 'deg, ' + this.state.firstColor + ', ' + this.state.secondColor + ');';
    let gradientFallBackText = 'background: ' + firstColor + ';';
    let gradientWebKitText = 'background: -webkit-linear-gradient(' + gradientAngle + 'deg, ' + this.state.firstColor + ', ' + this.state.secondColor + ');';
    return (
      <div className="colorPickerContainer" style={{ background: 'linear-gradient(' + gradientAngle + 'deg,' + firstColor + ',' + secondColor + ')' }}>
        <ChromePicker
          color={this.state.firstColor}
          onChange={this.handleChangeForFirstColor}
        />
        <ChromePicker
          color={this.state.secondColor}
          onChange={this.handleChangeForSecondColor}
        />
        <Slider update={this.handleChangeForGradientAngle.bind(this)} ref="gradientSlider" />
        <div className="gradientCodeContainer">
          <h1>{gradientFallBackText}</h1>
          <h1>{gradientText}</h1>
          <h1>{gradientWebKitText}</h1>
        </div>
      </div>
    );
  }
}

export default GradientTool;



/*

background: #141e30; 
background: -webkit-linear-gradient(to right, #141e30, #243b55); 
background: linear-gradient(to right, #141e30, #243b55);

*/