import React, { Component } from 'react';
import './App.css';
import { ChromePicker } from 'react-color';

class GradientTool extends Component {
  state = {
    colorFirst: '#ff005c',
    colorSecond: 'red'
  };
  handleChangeCompleteForFirst = (color) => {
    this.setState({ colorFirst: color.hex});
  };
  handleChangeCompleteForSecond = (color) => {
    this.setState({ colorSecond: color.hex});
  };

  render() {
    let colorFirst = this.state.colorFirst;
    let colorSecond = this.state.colorSecond;
    let gradientText = 'background: linear-gradient(45deg, ' + this.state.colorFirst + ', ' + this.state.colorSecond + ');';
    let gradientFallBackText = 'background: ' + colorFirst + ';';
    let gradientWebKitText = 'background: -webkit-linear-gradient(45deg, ' + this.state.colorFirst + ', ' + this.state.colorSecond + ');';
    return (
      <div className="colorPickerContainer" style={{background: 'linear-gradient(45deg,' + colorFirst + ',' + colorSecond + ')' }}>
        <ChromePicker
        color={ this.state.colorFirst }
        onChange={ this.handleChangeCompleteForFirst }
      />
      <ChromePicker
        color={ this.state.colorSecond }
        onChange={ this.handleChangeCompleteForSecond }
      />
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