import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import * as openWeatherMap from '../api/openWeatherMap';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    let that = this;

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location,
        temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  }
  render() {
    let { isLoading, temp, location } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}
