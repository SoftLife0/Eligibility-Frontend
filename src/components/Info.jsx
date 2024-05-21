import React, { useState, useEffect } from 'react';
import { Grid, MenuItem, TextField } from '@mui/material';

const Info = ({ name, number, courseOffered, handleNameChange, handleNumberChange, handleCourseOffered }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('https://forms.central.edu.gh/eligibility');
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                const data = await response.json();
                setCourses(data.courses); // Assuming your API returns courses in the format { courses: [...] }
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className="form-group">
                    <TextField
                        label="Enter your name"
                        value={name} 
                        fullWidth
                        margin="normal"
                        onChange={handleNameChange} 
                    />
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="form-group">
                    <TextField
                        label="Enter your number"
                        value={number} 
                        fullWidth
                        margin="normal"
                        onChange={handleNumberChange} 
                    />
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className="form-group">
                    <TextField
                        select
                        label="Which course did you offer"
                        value={courseOffered}
                        fullWidth
                        margin="normal"
                        onChange={handleCourseOffered}
                    >
                        {courses.map(course => (
                            <MenuItem key={course} value={course}>
                                {course}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </Grid>
        </Grid>
    );
};

export default Info;
