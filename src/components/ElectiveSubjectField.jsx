import React, { useState, useEffect } from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';
import FetchGrades from './FetchGrades';

const ElectiveSubjectField = ({ electives, onElectiveChange, onGradeSelect }) => {
    const [electiveSubjects, setElectiveSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [grades, setGrades] = useState('');

    useEffect(() => {
        const fetchElectiveOptions = async () => {
            try {
                const response = await fetch('https://api_eligibility.central.edu.gh/');
                if (!response.ok) {
                    throw new Error('Failed to fetch elective options');
                }
                const data = await response.json();
                setElectiveSubjects(data.electiveSubjects);
            } catch (error) {
                console.error('Error fetching elective options:', error);
            }
        };

        fetchElectiveOptions();
    }, []);

    const handleElectiveSelect = (event) => {
        const selectedSubject = event.target.value;
        setSelectedSubject(selectedSubject);
        onElectiveChange(selectedSubject);
    };

    const handleGradeSelect = (grade) => {
        setGrades(grade);
        onGradeSelect(grade);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className="form-group">
                    <TextField
                        select
                        label="Subject"
                        value={selectedSubject}
                        fullWidth
                        margin="normal"
                        onChange={handleElectiveSelect}
                    >
                        {electiveSubjects.map(electiveSubject => (
                            <MenuItem key={electiveSubject} value={electiveSubject}>{electiveSubject}</MenuItem>
                        ))}
                    </TextField>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="form-group">
                    <FetchGrades
                        onSelectGrade={grade => handleGradeSelect(grade)}
                        grades={grades}
                    />
                </div>
            </Grid>
        </Grid>
    );
};

export default ElectiveSubjectField;
