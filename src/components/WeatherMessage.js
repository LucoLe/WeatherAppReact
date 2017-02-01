import React, {PropTypes} from 'react';

export default function WeatherMessage ({ temp, location })  {
  return (
    <h3>It's {temp} in {location}</h3>
  );
}

WeatherMessage.propTypes = {
  location: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
};
