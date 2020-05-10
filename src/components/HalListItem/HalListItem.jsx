import React from "react";
import { Link } from "react-router-dom";

class HalListItem extends React.Component {
  handleIndividualHelp = () => {
    this.props.onHelpIndividual(this.props.index);
  };

  render() {
    let { hal } = this.props;

    function calculateAantalActiesBinnen24u(hal) {
      let aantalActies = 0;
      const huidigeDatum = new Date();
      let huidigeDatumPlus24 = new Date();
      huidigeDatumPlus24.setDate(huidigeDatum.getDate() + 1);

      hal.apparaten.forEach(apparaat => {
        const volgendeActieDatum = new Date(apparaat.volgendeActie.datum);
        if (volgendeActieDatum < huidigeDatumPlus24) {
          aantalActies++;
        }
      });
      return aantalActies;
    }

    return (
      <div
        className={`Hal ${this.props.help && "help"} ${this.props
          .helpIndividual && "help"}`}
        style={
          this.props.lijst
            ? { display: "block", border: "0px" }
            : {
                position: "absolute",
                width: hal.width,
                height: hal.height,
                top: hal.top,
                left: hal.left,
                backgroundColor: this.props.achtergrondKleur
              }
        }
      >
        <ul className="Hal-list">
          <li className={`Hal-name ${this.props.helpIndividual && "help"}`}>
            {!this.props.lijst && (
              <button
                onClick={this.handleIndividualHelp}
                className="btn-danger"
              >
                NOOD
              </button>
            )}
            <Link className="underline" to={`/${hal.naam}`}>
              {hal.naam}
            </Link>
          </li>
          <li>Oppervlakte: {hal.oppervlakte} m²</li>
          <li>Aantal apparaten: {hal.apparaten.length}</li>
          <li>Aantal acties: {calculateAantalActiesBinnen24u(hal)}</li>
        </ul>
      </div>
    );
  }
}

export default HalListItem;
