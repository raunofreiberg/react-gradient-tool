import React from 'react';
import ReactDOM from 'react-dom';

class Slider extends React.Component {
    render() {
        return (
            <div>
                <input ref="inp" type="range"
                    min="0"
                    max="360"
                    onChange={this.props.update.bind(this)}
                />
            </div>
        )

    }
}

export default Slider;