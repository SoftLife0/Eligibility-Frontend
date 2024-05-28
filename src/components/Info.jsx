import React, { useState, useEffect } from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';
import config from './config';

const Info = ({ name, number, email, courseOffered, handleNameChange, handleNumberChange, handleCourseOffered, handleEmailChange }) => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`${config.apiBaseUrl}`);
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

    const grid = {
        paddingTop: '0'
    }

    return (
        <Grid container spacing={2}>
            
            <Grid item xs={6} style={grid}>
                {/* <div className="form-control">
                    <label htmlFor="name" className="form-label">Enter your Full Name</label>
                    <input 
                    className="answerSelectCard" 
                    id="name" 
                    name="Name" 
                    placeholder="Name" 
                    type="text"
                    required 
                    value={name}
                    onChange={handleNameChange}
                    />
                </div> */}
                <div className="form-group">
                    <TextField
                        label="Full Name"
                        value={name} 
                        fullWidth
                        margin="normal"
                        placeholder="Name" 
                        type="text"
                        onChange={handleNameChange} 
                        required
                        style={{paddingTop:'0'}}
                    />
                </div>
            </Grid>
            <Grid item xs={6} style={grid}>
                {/* <div className="form-control">
                    <label htmlFor="number" className="form-label">Enter your number</label>
                    <input 
                    className="answerSelectCard" 
                    id="number" 
                    name="Number" 
                    placeholder="0244500300" 
                    type="text"
                    required 
                    value={number}
                    onChange={handleNumberChange}
                    />
                </div> */}
                <div className="form-group">
                    <TextField
                        label="Phone number"
                        value={number} 
                        fullWidth
                        placeholder="0244500300" 
                        type="text"
                        margin="normal"
                        onChange={handleNumberChange} 
                        required
                    />
                </div>
            </Grid>
            <Grid item xs={12} style={grid}>
                {/* <div className="form-control">
                    <label htmlFor="number" className="form-label">Enter your Email Address</label>
                    <input 
                    className="answerSelectCard" 
                    id="email" 
                    name="Email" 
                    placeholder="john@gmail.com" 
                    type="email"
                    required 
                    value={email}
                    onChange={handleEmailChange}
                    />
                </div> */}
                <div className="form-group">
                    <TextField
                        label="Email Address"
                        value={email} 
                        fullWidth
                        placeholder="john@gmail.com" 
                        type="email"
                        margin="normal"
                        onChange={handleEmailChange} 
                        required
                    />
                </div>
            </Grid>
            <Grid item xs={12} style={grid}>
            {/* <div className="form-control">
                    <label htmlFor="course" className="form-label">Which course did you offer</label>
                    <select 
                    className="answerSelectCard" 
                    id="course" 
                    name="course" 
                    required
                    value={courseOffered}
                    onChange={handleCourseOffered} 
                    >
                    {courses.map(course => (
                        <option key={course} value={course}>
                        {course}
                        </option>
                    ))}
                    </select>
                </div> */}
                <div className="form-group">
                    <TextField
                        select
                        label="Which course did you offer"
                        value={courseOffered}
                        fullWidth
                        margin="normal"
                        onChange={handleCourseOffered}
                        required
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
