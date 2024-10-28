import React from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';
import FetchGrades from './FetchGrades';

const ElectiveSubjectField = ({ electiveSubjects, electives, grades, handleElectiveChange }) => {

    const grid = {
        paddingTop: '0'
    }
    
    return (
        <div>
            <Grid container spacing={2}>
                {electiveSubjects.map((elective, index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={8} style={grid}>
                            <TextField
                                select
                                label="Elective"
                                name="elective"
                                value={elective.elective}
                                onChange={(e) => handleElectiveChange(index, e)}
                                fullWidth
                                required
                                size="small"
                                margin="normal"
                            >
                                <MenuItem value="">Select an elective</MenuItem>
                                {electives.map((course) => (
                                    <MenuItem key={course} value={course}>
                                        {course}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={4} style={grid}>
                            <FetchGrades
                                onSelectGrade={(selectedGrade) => 
                                    handleElectiveChange(index, { target: { name: 'grade', value: selectedGrade } })
                                }
                                grades={grades}
                            />
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </div>
    );
};

export default ElectiveSubjectField;
