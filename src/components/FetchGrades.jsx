import React, { useState, useEffect } from 'react';
import { TextField, MenuItem } from '@mui/material';

const FetchGrades = ({ onSelectGrade }) => {
    const [grades, setGrades] = useState([]);
    const [selectedGrade, setSelectedGrade] = useState('');

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                const response = await fetch('https://api_eligibility.central.edu.gh/');
                if (!response.ok) {
                    throw new Error('Failed to fetch grades');
                }
                const data = await response.json();
                setGrades(data.grades);
            } catch (error) {
                console.error('Error fetching grades:', error);
            }
        };

        fetchGrades();
    }, []);

    const handleGradeSelect = (event) => {
        const selectedGrade = event.target.value;
        setSelectedGrade(selectedGrade);
        onSelectGrade(selectedGrade); // Pass selected grade to parent component
    };

    return (
        <TextField
            select
            label="Grade"
            value={selectedGrade}
            fullWidth
            margin="normal"
            onChange={handleGradeSelect}
        >
            {grades.map(grade => (
                <MenuItem key={grade} value={grade}>
                    {grade}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default FetchGrades;
