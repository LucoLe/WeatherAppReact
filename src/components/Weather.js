import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import * as openWeatherMap from '../api/openWeatherMap';

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
    let that = this;

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location,
        temp
      });
    }, function (errorMessage) {
      alert(errorMessage);
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
