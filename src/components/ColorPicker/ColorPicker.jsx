import React from "react";
import { ChromePicker } from "react-color";

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: "#fff"
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleChangeComplete = color => {
    this.setState({ color: color.hex });
    this.props.onChangeColor(this.props.option, color.hex);
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  render() {
    const popover = {
      position: "absolute",
      zIndex: "2"
    };
    const cover = {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px"
    };
    return (
      <div>
        <button onClick={this.handleClick}>Pick Color</button>
        {this.state.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={this.handleClose} />
            <ChromePicker
              color={this.state.color}
              onChangeComplete={this.handleChangeComplete}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorPicker;
