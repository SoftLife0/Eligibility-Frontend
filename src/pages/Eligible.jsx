import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
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

    return (
        <>
            <Layout name={name}/>
            <Container style={{ marginTop: '25vh' }}>

                {/* Check if eligibleCourses is not empty */}
                {eligibleCourses.length > 0 ? (
                    eligibleCourses.map(eligibleCourse => (
                        <CustomCard key={eligibleCourse.name} department={eligibleCourse.department} name={eligibleCourse.name} />
                    ))
                ) : data ? (
                    <p>No eligible courses available</p>
                ) : (
                    <p>Loading...</p>
                )}
            </Container>
        </>
    );
}

export default Eligible;
