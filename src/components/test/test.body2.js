import React from 'react';
import { Link } from 'react-router-dom';

const TestBody2 = () => (
  <div className="test-body">
    <h1>You are in page 2.</h1>
    <br/>
    <p>Load a <Link to="/">page 1</Link></p>
  </div>
);

export default TestBody2;
