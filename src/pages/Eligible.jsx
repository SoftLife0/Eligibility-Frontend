import React from 'react'
import Layout from '../components/Layout';
import { Container } from '@mui/material';
import CustomCard from '../components/CustomCard';

const Eligible = () => {
  return (
    <>
        <Layout name="Nana Kweku"/>
        <Container style={{marginTop:'20vh'}}>
            <CustomCard course="Bachelor of Science in Economics" department="Faculty Of Arts and Social Sciences" />
        </Container>
    </>
  )
}

export default Eligible;