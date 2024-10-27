import React from 'react';
import { CircularProgress } from '@mui/material';

const LoadingSpinner = ({ message }) => {
    return (
        <div id="loading" style={{ height: '100vh', width: '100vw', display: 'flex', backgroundColor: '#fff', position: 'fixed', top: 0, alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
            <div style={{ width: '100%', textAlign: 'center' }}>
                <CircularProgress style={{ width: '3rem', height: '3rem', color:'#000' }} /> 
                <h5 style={{ textAlign: 'center', marginTop: '2rem' }}>{message}</h5>
            </div>
        </div>
    );
}

export default LoadingSpinner;
