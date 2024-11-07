// ApiService.js
import config from './config';

class ApiService {
  async fetchGrades() {
    try {
      const response = await fetch(`${config.apiBaseUrl}`);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: Failed to fetch grades`);
      }
      const data = await response.json();
      return data.grades; // Return only the grades array
    } catch (error) {
      console.error('Error fetching grades:', error);
      return null;
    }
  }

  async fetchCourses() {
    try {
      const response = await fetch(`${config.apiBaseUrl}`);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: Failed to fetch courses`);
      }
      const data = await response.json();
      return data.courses;
    } catch (error) {
      console.error('Error fetching courses:', error);
      return null;
    }
  }

  async fetchElectives() {
    try {
      const response = await fetch(`${config.apiBaseUrl}`);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: Failed to fetch electives`);
      }
      const data = await response.json();
      return data.electiveSubjects;
    } catch (error) {
      console.error('Error fetching electives:', error);
      return null;
    }
  }

  async submitForm(formData) {
    try {
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
    } catch (error) {
      console.error('Error submitting form data:', error);
      return null;
    }
  }
}

export default new ApiService();