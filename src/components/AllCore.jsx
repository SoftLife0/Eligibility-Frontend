import React from 'react'

const CoreSubjects = ({ coreSubjects, grades, handleCoreSubjectChange }) => {

    const coreSubjectNames = ['Mathematics', 'English', 'Science', 'Social Studies'];

    return (
      <div>
        <h2>Core Subjects</h2>
        {coreSubjectNames.map((subject) => (
          <div key={subject}>
            <label>{subject}</label>
            <select
              name={subject}
              value={coreSubjects[subject]}
              onChange={handleCoreSubjectChange}
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
  

export default CoreSubjects