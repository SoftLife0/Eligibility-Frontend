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
    console.log('Name:', data.data.name);
    console.log('EligibleCourses:', data.data.eligibleCourses);

    const eligibleCourses = data.data.eligibleCourses ? data.data.eligibleCourses : [];
    const name = data.data.name ? data.data.name : '';

    return (
        <>
            <Layout name={name}/>
            <Container style={{marginTop:'25vh'}}>

                {/* Check if eligibleCourses is not empty */}
                {eligibleCourses.length > 0 ? (
                    eligibleCourses.map(eligibleCourse => (
                        <CustomCard key={eligibleCourse.name} department={eligibleCourse.department} name={eligibleCourse.name} />
                    ))
                ) : (
                    <p>No eligible courses available</p>
                )}
            </Container>
        </>
    );
}

export default Eligible;
