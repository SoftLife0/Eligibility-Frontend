import { Container, Avatar } from '@mui/material';
import React from 'react'
import logo from '../img/hero.png'
import SubmitButton from '../components/Button';

const Home = () => {
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
            <h2>Your Artificial Intelligence Assistant</h2>
            <h4>Your Artificial Intelligence Assistant Your Artificial Intelligence Assistant Your Artificial Intelligence Assistant Your Artificial Intelligence Assistant</h4>
          </div>

          <SubmitButton text="Begin" />
        </div>
      </Container>
    </>
  )
}

export default Home;