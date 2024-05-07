import React, { useState, useEffect } from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';
import FetchGrades from './FetchGrades';

const ElectiveSubjectField = ({ index, onElectiveChange, onGradeChange }) => {
    const [electiveOptions, setElectiveOptions] = useState([]);
    const [elective, setElective] = useState('');

    useEffect(() => {
        const fetchElectiveOptions = async () => {
            try {
                const electiveResponse = await fetch('http://a172.168.12.231:5000/temp');
                if (!electiveResponse.ok) {
                    throw new Error('Failed to fetch elective options');
                }
                const electiveData = await electiveResponse.json();
                setElectiveOptions(electiveData.options);
            } catch (error) {
                console.error('Error fetching elective options:', error);
            }
        };

        

        fetchElectiveOptions();
    }, []);

    const handleElectiveChange = (event) => {
        setElective(event.target.value);
        onElectiveChange(index, event);
    };


    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className="form-group">
                    <TextField
                        select
                        label="Elective"
                        value={elective}
                        fullWidth
                        margin="normal"
                        onChange={handleElectiveChange}
                    >
                        {electiveOptions.map(option => (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        ))}
                    </TextField>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="form-group">
                    {/* Render the FetchGrades component to fetch grade options */}
                    <FetchGrades onSelectGrade={(gradeId) => onGradeChange(index, { target: { value: gradeId } })} />
                </div>
            </Grid>
        </Grid>
    );
};

export default ElectiveSubjectField;
