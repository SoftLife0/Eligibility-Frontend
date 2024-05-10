import React from 'react';
import { styled, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomCard = ({ department, name, link }) => {
    const StyledLink = styled(Link)({
        color: 'inherit',
        textDecoration: 'none',
    });

    return (
        <StyledLink to={link}>
            <Card sx={{ padding: '20px', backgroundColor: '#5635dc2d', marginBottom: '20px', boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none' }}>
                <CardContent>
                    <div>
                        <small>{department}</small>
                        <h3 style={{ marginBottom: '0' }}>{name}</h3>
                    </div>
                </CardContent>
            </Card>
        </StyledLink>
    );
}

export default CustomCard;
