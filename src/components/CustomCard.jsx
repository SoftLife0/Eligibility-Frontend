import React from 'react';
import { styled, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomCard = ({ department, name, link, color }) => {
    const StyledLink = styled(Link)({
        color: 'inherit',
        textDecoration: 'none',
    });

    const cardStyles = {
        fontFamily: 'Poppins, sans-serif',
        fontSize:'13px',
        margin:'0', 
        fontWeight:'300',
        // opacity: '0.5'
    }
    
      const subHeading = {
        fontSize:'16px', 
        fontFamily: 'Poppins, sans-serif',
        margin:'5px 0',
        fontWeight:'600',
        marginBottom: '0'
      }


    return (
        <StyledLink to={link}>
            <Card sx={{ padding: '16px', color:'#fff', backgroundColor: color, marginBottom: '20px', boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: 'none' }}>
                <CardContent>
                    <div>
                        <small style={cardStyles}>{department}</small>
                        <h3  style={subHeading}>{name}</h3>
                    </div>
                </CardContent>
            </Card>
        </StyledLink>
    );
}

export default CustomCard;
