import React, {PropTypes} from 'react';

import Nav from './Nav';

export default function Main (props) {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="colums medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.object.isRequired
};
