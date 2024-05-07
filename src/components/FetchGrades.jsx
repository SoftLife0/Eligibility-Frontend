import React, { useState, useEffect } from 'react';
import { MenuItem } from '@mui/material';

const FetchGrades = ({ onSelectGrade }) => {
    const [grades, setGrades] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://172.188.12.213:5000';
        const fetchGrades = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch grades');
                }
                const data = await response.json();
                setGrades(data);
            } catch (error) {
                console.error('Error fetching grades:', error);
            }
        };

        fetchGrades();
    }, []);

    return (
        <>
            {grades.map(grade => (
                <MenuItem key={grade.id} value={grade.id} onClick={() => onSelectGrade(grade.id)}>
                    {grade.name}
                </MenuItem>
            ))}
        </>
    );
};

export default FetchGrades;
