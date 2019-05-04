import React from 'react';

const ErrorMessage = props => {
  return (
    <div className="error-message d-flex">
      <img className="d-flex" src={require('../img/doge.png')} alt="" />
      <h1>
        {props.message}
        <br />
        {props.error}
      </h1>
    </div>
  );
};

export default ErrorMessage;
