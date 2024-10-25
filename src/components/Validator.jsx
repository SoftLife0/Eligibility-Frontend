const validateForm = ({ name, number, email, courseOffered, coreSubjects, electiveSubjects }) => {
    let error = '';

    if (!name || !number || !email || !courseOffered) {
        error = 'Please fill out all required fields.';
    }
  
    // Validate core subjects
    if (Object.values(coreSubjects).some(subject => subject === '')) {
      error = 'Please select grades for all core subjects.';
    }
  
    // Validate electives and duplicates
    const electivesSelected = electiveSubjects.map(e => e.elective);
    if (electiveSubjects.some(elective => !elective.elective || !elective.grade)) {
      error = 'Please select all electives and their grades.';
    } else if (new Set(electivesSelected).size !== electivesSelected.length) {
      error = 'Duplicate electives are not allowed.';
    }
  
    return error;
  };
  