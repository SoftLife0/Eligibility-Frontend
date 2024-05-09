import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { Container } from '@mui/material';
import CustomCard from '../components/CustomCard';

const Eligible = () => {
    // Extracting the state from the location object
    const { state } = useLocation();
    const { data } = state;

    // Log the received data
    console.log('Received data:', data);

    // Check if data exists and if it has the eligibleCourses property
    const eligibleCourses = data && data.eligibleCourses ? data.eligibleCourses : [];


    return (
        <>
            <Layout name="Nana Kweku"/>
            <Container style={{marginTop:'20vh'}}>
                {/* Check if eligibleCourses is not empty */}
                {eligibleCourses.length > 0 ? (
                    // Map over eligibleCourses and render CustomCard for each course
                    eligibleCourses.map((course, index) => (
                        <CustomCard key={index} course={course.name} department={course.department} />
                    ))
                ) : (
                    // Render a message if eligibleCourses is empty
                    <p>No eligible courses available</p>
                )}
            </Container>
        </>
    );
}

export default Eligible;
