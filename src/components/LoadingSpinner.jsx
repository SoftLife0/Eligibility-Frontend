import React from 'react';
import { CircularProgress } from '@mui/material';

const LoadingSpinner = ({ message }) => {
    return (
        <div id="loading" style={{ height: '100vh', width: '100vw', display: 'flex', backgroundColor: '#fff', position: 'fixed', top: 0, alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
            <div style={{ width: '100%', textAlign: 'center' }}>
                <CircularProgress style={{ width: '4rem', height: '4rem', color:'#000' }} /> {/* Increase the size of the spinner */}
                <h5 style={{ textAlign: 'center', marginTop: '2rem' }}>{message}</h5> {/* Add margin-top for the message */}
            </div>
        </div>
    );
}

export default LoadingSpinner;
