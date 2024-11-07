// ApiService.js
import config from './config';

class ApiService {

  async fetchGrades() {
    const response = await fetch(`${config.apiBaseUrl}`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to fetch grades`);
    }
    const data = await response.json();
    return data.grades;
  }

  async fetchCourses() {
    const response = await fetch(`${config.apiBaseUrl}`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to fetch courses`);
    }
    const data = await response.json();
    return data.courses;
  }

  async fetchElectives() {
    const response = await fetch(`${config.apiBaseUrl}`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to fetch electives`);
    }
    const data = await response.json();
    return data.electiveSubjects;
  }

  async submitForm(formData) {
    const response = await fetch(`${config.apiBaseUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to submit form`);
    }
    const data = await response.json();
    console.log('Form submitted successfully!', data);
    return data;
  }
}

export default new ApiService();