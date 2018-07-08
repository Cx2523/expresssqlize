import React from 'react';
import request from 'superagent';

const Example = () => {
  const getData = (e) => {
    e.preventDefault();
    alert('test');
    request.get('https://fitness-tracker-1.herokuapp.com/').withCredentials().then(((res) => alert(res.body))) 
  }
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Launchpad - Site Builder</h1>
        <p>Webpack2, Node, ES6, React, Boostrap</p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        <button onClick={getData}>Click Me</button>
      </div>
    </div>
  );
}

export default Example;
