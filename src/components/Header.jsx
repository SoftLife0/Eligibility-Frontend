import React from 'react';

const Header = () => {

  const headingStyle1 = {
    fontFamily: 'Poppins, sans-serif',
    letterSpacing: '0.03em',
    fontSize: '20px',
    fontWeight: '600',
    textDecoration: 'none',
    color: '#fff',
  };
  
  return (
    <div style={{ position: 'fixed', width: '100%', zIndex: '100', top: '0', backgroundColor: '#DE2121', borderBottom: '1px solid #dc3545' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '13px 16px' }}>
        <a className="navbar-brand" href="/" style={headingStyle1}>eligibility.central.edu.gh</a>
      </nav>
    </div>
  );
};

export default Header;