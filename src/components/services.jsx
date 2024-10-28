// ApiService.js
import config from './config';

class ApiService {
  // Generic fetch method to handle API calls
  async fetchData(method = 'GET', body = null) {
    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(`${config.apiBaseUrl}`, options);

      if (!response.ok) {
        throw new Error(`Failed to fetch`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching`, error);
      return null;
    }
  }

  // Fetch Grades
  async fetchGrades() {
    const data = await this.fetchData();
    return data ? data.grades : null;
  }

  // Fetch Courses
  async fetchCourses() {
    const data = await this.fetchData();
    return data ? data.courses : null;
  }

  // Fetch Electives
  async fetchElectives() {
    const data = await this.fetchData();
    return data ? data.electiveSubjects : null;
  }

  // Submit Form
  async submitForm(formData) {
    return await this.fetchData('submitForm', 'POST', formData);
  }
}

export default new ApiService();
