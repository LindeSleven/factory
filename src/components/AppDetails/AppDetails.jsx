import React from "react";
import "./AppDetails.css";
import { Link } from "react-router-dom";
import axios from "axios";

class AppDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.app.ID,
      halNaam: this.props.halNaam,
      naam: this.props.app.naam,
      omschrijving: this.props.app.omschrijving,
      datumLaatsteActie: this.props.app.laatstUitgevoerdeActie.datum,
      typeLaatsteActie: this.props.app.laatstUitgevoerdeActie.type,
      omschrijvingLaatsteActie: this.props.app.laatstUitgevoerdeActie
        .omschrijving,
      datumVolgendeActie: this.props.app.volgendeActie.datum,
      typeVolgendeActie: this.props.app.volgendeActie.type,
      omschrijvingVolgendeActie: this.props.app.volgendeActie.omschrijving,
      serverErr: false,
      serverErrDesc: "",
      waitingServerRes: false,
      serverResSucces: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value // name moet gelijk zijn aan de state name en input moet een name attribute hebben!
    });
  }

  handleClick() {
    this.setState({
      datumLaatsteActie: this.state.datumVolgendeActie,
      typeLaatsteActie: this.state.typeVolgendeActie,
      omschrijvingLaatsteActie: this.state.omschrijvingVolgendeActie
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    // samenstellen van door te sturen data
    const appData = {
      naam: this.state.naam,
      omschrijving: this.state.omschrijving,
      laatstUitgevoerdeActie: {
        datum: this.state.datumLaatsteActie,
        type: this.state.typeLaatsteActie,
        omschrijving: this.state.omschrijvingLaatsteActie
      },
      volgendeActie: {
        datum: this.state.datumVolgendeActie,
        type: this.state.typeVolgendeActie,
        omschrijving: this.state.omschrijvingVolgendeActie
      }
    };
    // stuur data door:
    this.setState({ waitingServerRes: true });
    try {
      const response = await axios.post(
        //'https://jsonplaceholder.typicode.com/posts',
        `http://localhost:3000/${this.state.halNaam}/apparaat/${this.state.id}`,
        appData
      );
      this.setState({ serverResSucces: true });
      console.log("Successfully updated:");
      console.log(response);
    } catch (error) {
      if (error.response) {
        // request is uitgevoerd, maar server antwoord met error:
        console.error(error);
        //alert naar user:
        const serverErrDesc = `Fout ${error.response.status}: ${
          error.response.status === 404
            ? "Onmogelijk te updaten, URL niet gevonden"
            : "Probleem met server"
        }`;
        this.setState({ serverErr: true, serverErrDesc: serverErrDesc });
      } else if (error.request) {
        // geen antwoord van de server
        console.log(error.request);
      } else {
        // een andere fout
        console.log("Error", error.message);
      }
    }
    this.setState({ waitingServerRes: false });
  }

  render() {
    let { app } = this.props;
    return (
      <div>
        <h2 className="AppDetails-formTitle">
          Apparaat met ID {app.ID} wijzigen
        </h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="ID" className="col-sm-2 col-form-label">
              ID
            </label>
            <input
              type="text"
              className="form-control col-sm-8"
              placeholder={app.ID}
              id="ID"
              readOnly
            />
          </div>
          <div className="form-group row">
            <label htmlFor="categorie" className="col-sm-2 col-form-label">
              Categorie
            </label>
            <input
              type="text"
              className="form-control col-sm-8"
              id="categorie"
              placeholder={app.categorie}
              readOnly
            />
          </div>
          <div className="form-group row">
            <label htmlFor="naam" className="col-sm-2 col-form-label">
              Naam
            </label>
            <textarea
              className="form-control col-sm-8"
              id="naam"
              maxLength="100"
              name="naam"
              value={this.state.naam}
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group row">
            <label htmlFor="omschrijving" className="col-sm-2 col-form-label">
              Omschrijving
            </label>
            <textarea
              className="form-control col-sm-8"
              id="omschrijving"
              name="omschrijving"
              value={this.state.omschrijving}
              onChange={this.handleChange}
            />
          </div>
          <section>
            <h4>Laatst uitgevoerde actie</h4>
            <div className="form-group row">
              <label
                htmlFor="datumLaatsteActie"
                className="col-sm-2 col-form-label"
              >
                Datum
              </label>
              <input
                type="date"
                className="form-control col-sm-8"
                id="datumLaatsteActie"
                name="datumLaatsteActie"
                value={this.state.datumLaatsteActie}
                onChange={this.handleChange}
              />
            </div>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0 ">Type</legend>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="typeLaatsteActie"
                    name="typeLaatsteActie"
                    value="vervanging"
                    onChange={this.handleChange}
                    checked={this.state.typeLaatsteActie === "vervanging"}
                  />
                  <label
                    htmlFor="typeLaatsteActie"
                    className="form-check-label"
                  >
                    vervanging
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="typeLaatsteActie"
                    name="typeLaatsteActie"
                    value="nazicht"
                    checked={this.state.typeLaatsteActie === "nazicht"}
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor="typeLaatsteActie"
                    className="form-check-label"
                  >
                    nazicht
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="form-group row">
              <label htmlFor="omschrijving" className="col-sm-2 col-form-label">
                Omschrijving
              </label>
              <textarea
                className="form-control col-sm-8"
                id="omschrijving"
                name="omschrijvingLaatsteActie"
                value={this.state.omschrijvingLaatsteActie}
                onChange={this.handleChange}
              />
            </div>
          </section>
          <section>
            <h4 className="AppDetails-volgende">Eerstvolgende actie</h4>
            <button
              className="btn btn-danger AppDetails-actieUitgevoerd"
              type="button"
              onClick={this.handleClick}
            >
              Actie uitgevoerd
            </button>
            <div className="form-group row">
              <label
                htmlFor="datumVolgendeActie"
                className="col-sm-2 col-form-label"
              >
                Datum
              </label>
              <input
                type="date"
                className="form-control col-sm-8"
                id="datumVolgendeActie"
                name="datumVolgendeActie"
                value={this.state.datumVolgendeActie}
                onChange={this.handleChange}
              />
            </div>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0 ">Type</legend>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="typeVolgendeActie"
                    name="typeVolgendeActie"
                    value="vervanging"
                    onChange={this.handleChange}
                    checked={this.state.typeVolgendeActie === "vervanging"}
                  />
                  <label
                    htmlFor="typeVolgendeActie"
                    className="form-check-label"
                  >
                    vervanging
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="typeVolgendeActie"
                    name="typeVolgendeActie"
                    value="nazicht"
                    onChange={this.handleChange}
                    checked={this.state.typeVolgendeActie === "nazicht"}
                  />
                  <label
                    htmlFor="typeVolgendeActie"
                    className="form-check-label"
                  >
                    nazicht
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="form-group row">
              <label htmlFor="omschrijving" className="col-sm-2 col-form-label">
                Omschrijving
              </label>
              <textarea
                className="form-control col-sm-8"
                id="omschrijving"
                name="omschrijvingVolgendeActie"
                value={this.state.omschrijvingVolgendeActie}
                onChange={this.handleChange}
              />
            </div>
          </section>

          <Link to="/" className="btn btn-primary">
            Vorige
          </Link>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {this.state.serverErr && (
          <div className="alert alert-danger" role="alert">
            {this.state.serverErrDesc}
          </div>
        )}
        {this.state.waitingServerRes && (
          <div className="alert alert-secondary" role="alert">
            Waiting for server...
          </div>
        )}
        {this.state.serverResSucces && (
          <div className="alert alert-success" role="alert">
            Successfully updated!
          </div>
        )}
      </div>
    );
  }
}

export default AppDetails;
