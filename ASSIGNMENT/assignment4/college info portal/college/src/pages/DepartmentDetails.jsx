import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import departmentsData from '../data/departments.json';

function DepartmentDetails() {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    const foundDepartment = departmentsData.find(dept => dept.id === id);
    setDepartment(foundDepartment);
  }, [id]);

  if (!department) {
    return (
      <div className="section">
        <div className="container">
          <h2>Department Not Found</h2>
          <p>The requested department could not be found.</p>
          <Link to="/departments" className="btn">Back to Departments</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="section">
        <div className="container">
          <div style={{marginBottom: '2rem'}}>
            <Link to="/departments" className="btn btn-secondary">← Back to Departments</Link>
          </div>
          
          <h2>{department.name}</h2>
          
          <div className="department-details">
            {/* Full Description */}
            <div className="detail-section">
              <h3>About the Department</h3>
              <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>{department.fullDescription}</p>
            </div>

            {/* Courses Offered */}
            <div className="detail-section">
              <h3>Courses Offered</h3>
              <div className="courses-list">
                {department.courses.map((course, index) => (
                  <div key={index} className="list-item">
                    <strong>{course}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Faculty */}
            <div className="detail-section">
              <h3>Our Faculty</h3>
              <div className="faculty-list">
                {department.faculty.map((facultyMember, index) => (
                  <div key={index} className="list-item">
                    <strong>{facultyMember}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Labs & Facilities */}
            <div className="detail-section">
              <h3>Labs & Facilities</h3>
              <div className="labs-list">
                {department.labs.map((lab, index) => (
                  <div key={index} className="list-item">
                    <strong>{lab}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="detail-section">
              <div className="card">
                <h3>Get More Information</h3>
                <p>Interested in learning more about our {department.name} program?</p>
                <Link to="/contact" className="btn">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DepartmentDetails;