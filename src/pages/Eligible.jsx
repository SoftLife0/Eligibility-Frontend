import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import CustomCard from '../components/CustomCard';
import EligibilityHeader from '../components/EligibilityHeader';
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
        fontWeight: '500',
        textDecoration: 'none',
        color: '#fff',
        fontSize: '14px',
    };

    const subHeading = {
        fontSize:'17px', 
        fontFamily: 'Poppins, sans-serif',
        margin:'5px 0',
        fontWeight:'600',
        marginBottom: '0',
        color:'#fff'
      }

    return (
        <>  
            <EligibilityHeader
            isEligible={isEligible}
            name={name}
            headingStyle={headingStyle}
            subHeading={subHeading}

            />
            <Container style={{ paddingTop: '20vh', height: '100vh' }}>
                {data ? (
                    isEligible ? (
                        eligibleCourses.map(eligibleCourse => (
                            <CustomCard
                                key={eligibleCourse.name}
                                department={eligibleCourse.department}
                                name={eligibleCourse.name}
                                color={eligibleCourse.color}
                                link={eligibleCourse.link}
                            />
                        ))
                    ) : (
                        <Ineligible />
                    )
                ) : (
                    <Ineligible />
                )}
                <br />
            </Container>
        </>
    );
}

export default Eligible;
