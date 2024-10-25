import React from 'react';

const AllElective = ({ electiveSubjects, electives, grades, handleElectiveChange }) => {
    return (
        <div>
            <h2>Elective Subjects</h2>
            {electiveSubjects.map((elective, index) => (
                <div key={index}>
                    <label>Elective</label>
                    <select
                        name="elective"
                        value={elective.elective}
                        onChange={(e) => handleElectiveChange(index, e)}
                        required
                    >
                        <option value="">Select an elective</option>
                        {electives.map((course) => (
                            <option key={course} value={course}>
                                {course}
                            </option>
                        ))}
                    </select>

                    <label>Grade:</label>
                    <select
                        name="grade"
                        value={elective.grade}
                        onChange={(e) => handleElectiveChange(index, e)}
                        required
                    >
                        <option value="">Select grade</option>
                        {grades.map((grade) => (
                            <option key={grade} value={grade}>
                                {grade}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default AllElective;
