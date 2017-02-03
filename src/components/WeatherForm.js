import React, {PropTypes} from 'react';

export default class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({location: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    let location = this.state.location;

    if (location.length > 0) {
      this.setState({location: ''});
      this.props.onSearch(location);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.location} onChange={this.handleChange}/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
}

WeatherForm.propTypes = {
  onSearch: PropTypes.func.isRequired
};
