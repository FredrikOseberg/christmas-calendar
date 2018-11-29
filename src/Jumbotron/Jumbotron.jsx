import React, { Component } from 'react';
import './Jumbotron.css';

import data from '../data/data.json';

class Jumbotron extends Component {
  render() {
    return (
      <div
        className="jumbotron"
        style={{
          backgroundImage: `url(${data.coverImage})`,
          backgroundSize: 'cover',
          minHeight: '90vh'
        }}
      >
        <h1>{data.name}s julekalender</h1>
      </div>
    );
  }
}
export default Jumbotron;
