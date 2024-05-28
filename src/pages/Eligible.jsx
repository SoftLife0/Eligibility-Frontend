import React from 'react';
import { useLocation } from 'react-router-dom';
// import Layout from '../components/Layout';
import { Container } from '@mui/material';
import CustomCard from '../components/CustomCard';

const Eligible = () => {
    // Extracting the state from the location object
    const location = useLocation();
    const state = location.state || {};
    const data = state.data;

    // Log the received data
    console.log('Received data:', data);

    // Safely access data properties
    const name = data?.data?.name || '';
    const eligibleCourses = data?.data?.eligibleCourses || [];

    const headingStyle = {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '700',
        textDecoration: 'none',
        color: '#fff',
        fontSize: '20px',
    };

    const subHeading = {
        fontSize: '16px',
        fontFamily: 'Poppins, sans-serif',
        margin: '5px 0',
        fontWeight: '500',
        color: '#fff'
    };

    return (
        <>
            <div style={{ position: 'fixed', width: '100%', height:'auto', zIndex: '100', top: '0', backgroundColor: '#DE2121', borderBottom: '1px solid #dc3545' }}>
                <header className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '16px 16px' }}>
                    <a className="navbar-brand" href="/" style={headingStyle}>Eligibility Checker</a>

                    <div style={subHeading}>
                        <h2 style={{marginTop:'0', marginBottom:'3px'}}>Congratulations <span> {name}</span></h2>
                        <small style={{ fontSize: '16px' }}>You are eligible for the following courses. Pick one to start your application process</small>
                    </div>
                </header>
            </div>

            {/* <Layout name={name}/> */}
            <Container style={{ paddingTop: '25vh', height: '100vh' }}>
                {/* Check if eligibleCourses is not empty */}
                {data ? (
                    eligibleCourses.length > 0 ? (
                        eligibleCourses.map(eligibleCourse => (
                            <CustomCard key={eligibleCourse.name} department={eligibleCourse.department} name={eligibleCourse.name} color={eligibleCourse.color} />
                        ))
                    ) : (
                        <p>No eligible courses available</p>
                    )
                ) : (
                    <p>Loading...</p>
                )}
            </Container>
        </>
    );
}

export default Eligible;
