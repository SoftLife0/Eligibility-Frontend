import { Container, Avatar } from '@mui/material';
import React from 'react'
import logo from '../img/hero.png'
import SubmitButton from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const headingStyle = {
    fontFamily: 'SF UI Display, sans-serif',
    letterSpacing: '0.07em',
    fontWeight: '600',
  };

  const handleBeginClick = () => {
    navigate('/form');
  };

  return (
    <>
      <Container style={{marginTop:'10vh'}}>
        <div style={{textAlign:'center'}}>

          <h3>eligibility.ai</h3>
          {/* <hr /> */}

          <div style={{margin: '8vh 0'}}>
            <Avatar src={logo} sx={{ width: 300, height: 300 }} style={{margin:'0 auto'}}  className="avatar"/>
          </div>

          <div>
            <h2>Artificial Intelligence Assistant</h2>
            <h4 style={headingStyle}>Welcome to CU Program Eligibility Checker, an innovative tool designed to streamline the process of determining various school programs. Powered by Artificial Intelligence Technology</h4>
          </div>

          <SubmitButton text="Begin" onClick={handleBeginClick}/>
        </div>
      </Container>
    </>
  )
}

export default Home;