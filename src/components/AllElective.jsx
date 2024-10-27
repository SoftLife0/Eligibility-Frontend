import React from 'react';
import { Grid, TextField, MenuItem } from '@mui/material';
import FetchGrades from './FetchGrades';

const AllElective = ({ electiveSubjects, electives, grades, handleElectiveChange }) => {
    return (
        <div>
            <h2>Elective Subjects</h2>
            <Grid container spacing={2}>
                {electiveSubjects.map((elective, index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={8}>
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
                        <Grid item xs={4}>
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

export default AllElective;
