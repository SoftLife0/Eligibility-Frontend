import React from 'react'

const Layout = ({name}) => {
  return (
    <div style={{ position: 'fixed', width: '100%', zIndex: '100', top: '0', backgroundColor: '#dc3545', borderBottom: '1px solid #dc3545' }}>
      <header className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '16px 16px' }}>
        <a className="navbar-brand" href="/" style={{ color: '#fff', fontWeight:'800', fontSize: '20px', textDecoration: 'none' }}>Eligibility Checker</a>

        <div style={{color:'#fff'}}>
          <h2>Congratulations <span> {name}</span></h2>
          <small style={{fontSize:'16px'}}>You are eligble for the following courses</small>
        </div>
      </header>
    </div>

  )
}

export default Layout;