import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./ToolTip.css";

class ToolTip extends React.Component {
  render() {
    return (
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id="tooltip">
            <p>ID: {this.props.app.ID}</p>
            <p>{this.props.app.omschrijving}</p>
            <p>volgende actie: {this.props.app.volgendeActie.datum}</p>
            <p>type: {this.props.app.volgendeActie.type}</p>
          </Tooltip>
        }
      >
        <Button
          className="btn btn-secondary py-0"
          style={{ fontSize: "0.8em" }}
        >
          i
        </Button>
      </OverlayTrigger>
    );
  }
}

export default ToolTip;
