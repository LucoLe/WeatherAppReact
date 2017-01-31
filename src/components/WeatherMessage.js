import React, {PropTypes} from 'react';

export default function WeatherMessage (props)  {
  let { temp, location } = props;

  return (
    <h3>It's {temp} in {location}</h3>
  );
}

WeatherMessage.propTypes = {
  location: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
};
