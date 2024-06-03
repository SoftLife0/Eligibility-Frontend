import React from 'react'

const Layout = ({name}) => {

  const headingStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight:'600',
    textDecoration: 'none',
    color: '#fff', 
    fontSize: '20px', 
  };

  const subHeading = {
    fontSize:'16px', 
    fontFamily: 'Poppins, sans-serif',
    margin:'5px 0',
    fontWeight:'500',
    color: '#fff'
  }

  return (
    <div style={{ position: 'fixed', width: '100%', zIndex: '100', top: '0', backgroundColor: '#DE2121', borderBottom: '1px solid #dc3545' }}>
      <header className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '16px 16px' }}>
        <a className="navbar-brand" href="/" style={headingStyle}>Eligiblity Checker</a>

        <div style={subHeading}>
          <h3 style={{fontSize:'18px'}}>Congratulations <span> {name}</span></h3>
          <small style={{fontSize:'16px'}}>You are eligible for the following courses. Pick one to start your application process</small>
        </div>
      </header>
    </div>

  )
}

export default Layout;