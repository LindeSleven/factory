import React from "react";
import "./HalList.css";
import Navbar from "../Navbar/Navbar";
import HalListItem from "../HalListItem/HalListItem";

class HalList extends React.Component {
  render() {
    return (
      <div>
        <Navbar onClick={this.props.onClick} lijst={this.props.lijst} />
        {!this.props.lijst ? (
          <button onClick={this.props.onHelp} className="btn-danger">
            NOOD
          </button>
        ) : null}
        <div
          style={{
            position: "relative",
            height: 500
          }}
          className="Hal-container"
        >
          {this.props.hallen.map((hal, index) => (
            <HalListItem
              key={hal + index}
              index={index}
              hal={hal}
              help={this.props.help}
              helpIndividual={this.props.helpIndividual[index]}
              lijst={this.props.lijst}
              achtergrondKleur={this.props.achtergrondKleur}
              onHelpIndividual={this.props.onHelpIndividual}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default HalList;
