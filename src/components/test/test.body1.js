import React from 'react';
import { Link } from 'react-router-dom';

const TestBody1 = () => (
  <div className="test-body">
    <h1>You are in page 1.</h1>
    <br/>
    <p>Load a <Link to="/page2">page 2</Link></p>
  </div>
);

export default TestBody1;
