import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Sofia',
      temp: -15
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    this.setState({
      location: location,
      temp: 23
    });
  }
  render() {
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage
          location={this.state.location}
          temp={this.state.temp}/>
      </div>
    );
  }
}
