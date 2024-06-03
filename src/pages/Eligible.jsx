import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import CustomCard from '../components/CustomCard';
import Ineligible from './Ineligible';

const Eligible = () => {
    const location = useLocation();
    const state = location.state || {};
    const data = state.data;

    console.log('Received data:', data);

    const name = data?.data?.name || '';
    const eligibleCourses = data?.data?.eligibleCourses || [];
    const isEligible = eligibleCourses.length > 0;

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
        color: '#fff',
    };

    return (
        <>
            <div style={{ position: 'fixed', width: '100%', height: 'auto', zIndex: '100', top: '0', backgroundColor: '#DE2121', borderBottom: '1px solid #dc3545' }}>
                <header className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '16px 16px' }}>
                    <a className="navbar-brand" href="/" style={headingStyle}>Eligibility Checker</a>
                    
                    <div style={subHeading}>
                        {isEligible ? (
                            <>
                                <h2 style={{ marginTop: '0', marginBottom: '3px' }}>Congratulations <span>{name}</span></h2>
                                <small style={{ fontSize: '16px' }}>You are eligible for the following courses. Pick one to start your application process</small>
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

            <Container style={{ paddingTop: '25vh', height: '100vh' }}>
                {data ? (
                    isEligible ? (
                        eligibleCourses.map(eligibleCourse => (
                            <CustomCard key={eligibleCourse.name} department={eligibleCourse.department} name={eligibleCourse.name} color={eligibleCourse.color} />
                        ))
                    ) : (
                        <Ineligible/>
                        // <p>No eligible courses available</p>
                    )
                ) : (
                    <p>Loading...</p>
                )}
            </Container>
        </>
    );
}

export default Eligible;
