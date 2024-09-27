import React, { useState, useEffect } from 'react';
import { TextField, MenuItem } from '@mui/material';
import config from './config';

const FetchGrades = ({ onSelectGrade }) => {
    const [electiveSubjects, setElectiveSubjects] = useState([]);
    const [selectedGrade, setSelectedGrade] = useState('');

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                const response = await fetch(`${config.apiBaseUrl}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch grades');
                }
                const data = await response.json();
                setElectiveSubjects(data.electiveSubjects);
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
            {electiveSubjects.map(electiveSubjects => (
                <MenuItem key={electiveSubjects} value={electiveSubjects}>
                    {electiveSubjects}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default FetchGrades;
