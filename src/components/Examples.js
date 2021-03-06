import React from 'react';
import { Link } from 'react-router';

export default function Examples () {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to={{ pathname: '/', query: { location: 'Plovdiv' } }}>Plovdiv, Bulgaria</Link>
        </li>
        <li>
          <Link to={{ pathname: '/', query: { location: 'Rio' } }}>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}
