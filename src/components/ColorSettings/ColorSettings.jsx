import React from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import "./ColorSettings.css";

function ColorSettings(props) {
  return (
    <div>
      <section className="ColorSettings-Section">
        <p className="ColorSettings-Title">Achtergrond: </p>
        <ColorPicker
          onChangeColor={props.onChangeColor}
          option={"achtergrondKleur"}
        />
      </section>
      <section className="ColorSettings-Section">
        <p className="ColorSettings-Title">Text: </p>
        <ColorPicker
          onChangeColor={props.onChangeColor}
          option={"tekstKleur"}
        />
      </section>
      <section className="ColorSettings-Section">
        <p className="ColorSettings-Title">Alarm: </p>
        <ColorPicker
          onChangeColor={props.onChangeColor}
          option={"alarmKleur"}
        />
      </section>
    </div>
  );
}

export default ColorSettings;
