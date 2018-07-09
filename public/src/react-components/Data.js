import React from 'react';
import request from 'superagent';

const Data = () => {
  const getData = (e) => {
    request.get('/api', (result) => console.log(result));
  }
  return (
    <div className="container">
      <button onClick={getData}>Click Me</button>
    </div>
  );
}

export default Data;
