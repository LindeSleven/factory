import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HalList from "../HalList/HalList";
import HalDetails from "../HalDetails/HalDetails";
import AppDetails from "../AppDetails/AppDetails";

class Routes extends Component {
  render() {
    const getHal = props => {
      let naam = props.match.params.naam;
      let currentHal = this.props.hallen.find(
        hal => hal.naam.toLowerCase() === naam.toLowerCase()
      );
      let currentHalIndex = this.props.hallen.findIndex(
        hal => hal.naam.toLowerCase() === naam.toLowerCase()
      );
      return (
        <HalDetails
          {...props}
          hal={currentHal}
          index={currentHalIndex}
          help={this.props.help}
          helpIndividual={this.props.helpIndividual[currentHalIndex]}
          onHelpIndividual={this.props.onHelpIndividual}
          achtergrondKleur={this.props.achtergrondKleur}
        />
      ); // {...props} = match, location, history
    };

    const getApp = props => {
      let naam = props.match.params.naam;
      let id = props.match.params.id;
      let currentHal = this.props.hallen.find(
        hal => hal.naam.toLowerCase() === naam.toLowerCase()
      );
      let currentApp = currentHal.apparaten.find(
        app => app.ID.toLowerCase() === id.toLowerCase()
      );
      return (
        <AppDetails {...props} app={currentApp} halNaam={currentHal.naam} />
      );
    };

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HalList
              hallen={this.props.hallen}
              lijst={this.props.lijst}
              help={this.props.help}
              helpIndividual={this.props.helpIndividual}
              onClick={this.props.onClick}
              onHelp={this.props.onHelp}
              achtergrondKleur={this.props.achtergrondKleur}
              onHelpIndividual={this.props.onHelpIndividual}
            />
          )}
        />
        <Route exact path="/:naam" render={getHal} />
        <Route exact path="/:naam/apparaat/:id" render={getApp} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
