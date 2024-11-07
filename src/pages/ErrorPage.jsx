import React from 'react';
import { useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();
  const { statusCode } = location.state || { statusCode: 500 }; 

  const checkmarkStyle = {
    fontSize: '100px',
  };

  return (
    <>
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <span role="img" style={checkmarkStyle} aria-label="">❌</span>
        <h1>{statusCode === 404 ? '404 - Not Found' : '500 \n Internal Server Error'}</h1>
        <p>Oops! Something went wrong. Our engineers are on it, please check and try again later.</p>
      </div>
    </>
  );
};

export default ErrorPage;
