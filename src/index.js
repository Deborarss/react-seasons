import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
import ErrorMessage from './components/ErrorMessage';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }), // update state
      err => this.setState({ errorMessage: err.message }) // update state
    );
  }

  renderContent() {
    const localErrMsg =
      'Mas para saber qual temporada está, preciso da sua localização!!';
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <ErrorMessage message="Isso é meio estranho..." error={localErrMsg} />
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    // else
    return <Spinner message="Por favor, aceite o pedido de localização" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
