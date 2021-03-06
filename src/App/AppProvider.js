import React from "react";
import cc from 'cryptocompare';

export const AppContext = React.createContext();

cc.setApiKey('7dcefd4dbbbc4602be42f2e616621bc86510fa560dfd5239336c3b049ea538a8');

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});
  }

  confirmFavorites = () => {
      this.setState({
          firstVisit: false,
          page: 'dashboard'
      });
      localStorage.setItem('cryptoDash', JSON.stringify({
          test: 'hello'
      }));
  }
  savedSettings() {
      let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
      if (!cryptoDashData) {
        return {page: 'settings', firstVisit: true}
      }
      return {};
  }

  setPage = page => this.setState({ page });

  render() {
    return (<AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>);
  }
}
