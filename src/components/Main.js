import React, {PropTypes} from 'react';

import Nav from './Nav';

export default function Main (props) {
  return (
    <div>
      <Nav />
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.object.isRequired
};
