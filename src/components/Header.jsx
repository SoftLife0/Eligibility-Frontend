import React from 'react';

const Header = () => {
  return (
    <div style={{ position: 'fixed', width: '100%', zIndex: '100', top: '0', backgroundColor: '#dc3545', borderBottom: '1px solid #dc3545' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '13px 16px' }}>
        <a className="navbar-brand" href="/" style={{ color: '#fff', fontWeight:'800', fontSize: '20px', textDecoration: 'none' }}>eligibility.central.edu.gh</a>
      </nav>
    </div>
  );
};

export default Header;