import React from 'react';
import { styled, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomCard = ({ department, name, link }) => {
    const StyledLink = styled(Link)({
        color: 'inherit',
        textDecoration: 'none',
    });

    const cardStyles = {
        fontFamily: 'SF UI Display, sans-serif',
        letterSpacing: '0.05em',
    }

    // const backgroundColors = ['#5635dc2d', '#ff5733', '#36c9a8', '#ffc300', '#7a57d1'];

    // const backgroundColor = index < 5 ? backgroundColors[index] : backgroundColors[0];

    return (
        <StyledLink to={link}>
            <Card sx={{ padding: '20px', backgroundColor: '#5635dc2d', marginBottom: '20px', boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none' }}>
                <CardContent>
                    <div style={cardStyles}>
                        <small style={{ fontSize:'16px', margin:'0'}}>{department}</small>
                        <h3 style={{ fontSize:'20px', marginBottom: '0' }}>{name}</h3>
                    </div>
                </CardContent>
            </Card>
        </StyledLink>
    );
}

export default CustomCard;
