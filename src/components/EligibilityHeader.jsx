import React from 'react'

const EligibilityHeader = ({isEligible, name, subHeading, headingStyle}) => {

  // const headingStyle = {
  //   fontFamily: 'Poppins, sans-serif',
  //   fontWeight:'600',
  //   textDecoration: 'none',
  //   color: '#fff', 
  //   fontSize: '20px', 
  // };

  // const subHeading = {
  //   fontSize:'16px', 
  //   fontFamily: 'Poppins, sans-serif',
  //   margin:'5px 0',
  //   fontWeight:'500',
  //   color: '#fff'
  // }

  return (
    <div style={{ position: 'fixed', width: '100%', height: 'auto', zIndex: '100', top: '0', backgroundColor: '#DE2121', borderBottom: '1px solid #dc3545' }}>
        <header className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '16px 25px' }}>
            <a className="navbar-brand" href="/" style={headingStyle}>eligibility.ai</a>
            
            <div style={subHeading}>
                {isEligible ? (
                    <>
                        <h2 style={{ fontSize:'16px', fontWeight:'600', marginTop: '0', marginBottom: '3px' }}>Congratulations <span>{name}</span></h2>
                        <small style={{fontWeight:'300', fontSize: '16px' }}>You are eligible for the following courses. Pick one to start your application process</small>
                    </>
                ) : (
                    <>
                        <h2 style={{ marginTop: '0', marginBottom: '3px' }}>Unfortunately <span>{name}</span></h2>
                        <small style={{ fontSize: '16px' }}>You didn't pass the eligibility criteria for any courses. Please try again later or contact support for more information.</small>
                    </>
                )}
            </div>
        </header>
    </div>

  )
}

export default EligibilityHeader;