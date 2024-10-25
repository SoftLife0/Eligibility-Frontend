import React from 'react';
import { Container, Typography } from '@mui/material';
import logo from '../img/ineligible.png'
import SubmitButton from '../components/Button'

const Ineligible = () => {
    const containerStyle = {
        textAlign: 'center',
        paddingTop: '10vh',
        height: '100vh'
    };

    const imageStyle = {
        width: '300px',
        height: 'auto',
    };

    const applicationLink = 'https://webcms.central.edu.gh/wp-content/uploads/2024/05/ATHE-form-2024-flat-flat-compressed.pdf';


    return (
        <Container style={containerStyle}>
            <img src={logo} alt="No Courses Available" style={imageStyle} />
            <Typography variant="h5" component="h6" style={{ color: '#DE2121', marginTop: '20px' }}>
                Unfortunately, you didn't pass the eligibility criteria
            </Typography>
            <Typography variant="body1" component="p" style={{ color: '#666', marginTop: '10px' }}>
                You are not eligible for any courses. We run a diploma program called <b>ATHE</b>. Click on the button below to download the application form.
            </Typography>

            <SubmitButton link={applicationLink} text="ATHE APPLICATION FORM 2024/2025"/>
        </Container>
    );
};

export default Ineligible;
