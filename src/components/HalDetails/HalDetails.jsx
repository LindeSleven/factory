import React, { Component } from "react";
import "./HalDetails.css";
import ToolTip from "../ToolTip/ToolTip";
import { Link } from "react-router-dom";

class HalDetails extends Component {
  handleIndividualHelp = () => {
    this.props.onHelpIndividual(this.props.index);
  };

  render() {
    let { hal } = this.props;
    const halPlan = {
      position: "absolute",
      width: hal.width,
      height: hal.height,
      top: hal.top,
      left: hal.left
    };

    function actieNodig(app) {
      let actieNodig = "";
      const huidigeDatum = new Date();
      let huidigeDatumPlus24 = new Date();
      huidigeDatumPlus24.setDate(huidigeDatum.getDate() + 1);
      const volgendeActieDatum = new Date(app.volgendeActie.datum);
      if (volgendeActieDatum < huidigeDatumPlus24) {
        actieNodig = true;
      } else {
        actieNodig = false;
      }
      return actieNodig;
    }

    return (
      <div>
        <div
          style={{
            position: "relative",
            height: 400
          }}
        >
          <div
            key={hal.ID}
            style={{ ...halPlan, backgroundColor: this.props.achtergrondKleur }}
            className={`Hal ${this.props.help && "help"} ${this.props
              .helpIndividual && "help"}`}
          >
            <h2>{hal.naam}</h2>
            <button onClick={this.handleIndividualHelp} className="btn-danger">
              NOOD
            </button>
            <ul>
              {hal.apparaten.map(app => (
                <div
                  style={{
                    position: "absolute",
                    width: app.width,
                    height: app.height,
                    top: app.top,
                    left: app.left,
                    border: "5px solid lightgrey"
                  }}
                  key={app.ID}
                  className="HalDetails-plattegrond"
                >
                  <ul>
                    <ToolTip app={app} />
                    <li className="HalDetails-AppNaam">{app.naam}</li>
                    {app.categorie === "machine" && (
                      <Link to={`/${hal.naam}/apparaat/${app.ID}`}>
                        <i
                          className="fas fa-cogs"
                          style={actieNodig(app) ? { color: "red" } : null}
                        />
                      </Link>
                    )}
                    {app.categorie === "lamp" && (
                      <Link to={`/${hal.naam}/apparaat/${app.ID}`}>
                        <i
                          className="fas fa-lightbulb"
                          style={actieNodig(app) ? { color: "red" } : null}
                        />
                      </Link>
                    )}
                    {app.categorie === "band" && (
                      <Link to={`/${hal.naam}/apparaat/${app.ID}`}>
                        <i
                          className="fas fa-dolly-flatbed"
                          style={actieNodig(app) ? { color: "red" } : null}
                        />
                      </Link>
                    )}
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <Link to="/" className="btn btn-info">
          Go Back
        </Link>
      </div>
    );
  }
}

export default HalDetails;
