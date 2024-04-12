import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{border:'1px solid #dc3545', background:'#dc3545', padding:'13px 16px'}}>
        <a className="navbar-brand" href="/" style={{color:'#fff', fontSize:'20px', textDecoration:'none'}}>Eligibility Checker</a>
      </nav>

    </div>
  );
};

export default Header;