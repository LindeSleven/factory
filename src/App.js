import React from "react";
import "./styles.css";
import Routes from "./components/Routes/Routes";
import Header from "./components/Header/Header";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      achtergrondKleur: "#FFFFFF",
      tekstKleur: "#000000",
      alarmKleur: "#ff4136",
      lijstView: true,
      isLoading: true,
      help: false,
      hallen: [],
      helpIndividual: []
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.onHelpIndividual = this.onHelpIndividual.bind(this);
    this.handleChangeColor.bind = this.handleChangeColor.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:3000/hallen.json");
    let data = res.data.hallen;
    this.setState({
      isLoading: false,
      hallen: data,
      helpIndividual: new Array(data.length).fill(false)
    });
  }

  handleToggleClick = () => {
    this.setState({
      lijstView: !this.state.lijstView
    });
  };

  handleHelp = () => {
    this.setState({
      help: !this.state.help
    });
  };

  onHelpIndividual = index => {
    let listWithHelpStates = this.state.helpIndividual;
    listWithHelpStates[index] = !listWithHelpStates[index];
    this.setState({ helpIndividual: listWithHelpStates });
  };

  handleChangeColor = (option, color) => {
    switch (option) {
      case "achtergrondKleur":
        this.setState({ achtergrondKleur: color });
        break;
      case "tekstKleur":
        this.setState({ tekstKleur: color });
        break;
      case "alarmKleur":
        this.setState({ alarmKleur: color }); // not necessary with css var!
        document.documentElement.style.setProperty(
          "--color-animation",
          `${color}`
        );
        break;
      default:
        console.log("no valid color option...");
        break;
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className="spinner">
          <i className="fas fa-7x fa-spinner fa-spin" />
          <h1>Loading...</h1>
        </div>
      );
    }
    return (
      <div
        style={{
          color: this.state.tekstKleur
        }}
      >
        <Header onChangeColor={this.handleChangeColor} />
        <Routes
          hallen={this.state.hallen}
          lijst={this.state.lijstView}
          help={this.state.help}
          helpIndividual={this.state.helpIndividual}
          onClick={this.handleToggleClick}
          onHelp={this.handleHelp}
          onHelpIndividual={this.onHelpIndividual}
          achtergrondKleur={this.state.achtergrondKleur}
        />
      </div>
    );
  }
}

export default App;
