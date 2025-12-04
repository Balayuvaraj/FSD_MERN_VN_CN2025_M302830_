import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DepartmentCard from '../components/DepartmentCard';
import departmentsData from '../data/departments.json';

function Home() {
  const [topDepartments, setTopDepartments] = useState([]);

  useEffect(() => {
    // Show first 3 departments as top departments
    setTopDepartments(departmentsData.slice(0, 3));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to TechVidya College</h1>
          <p>Empowering Future Leaders Through Excellence in Education</p>
          <Link to="/about" className="btn">Learn More About Us</Link>
        </div>
      </section>

      {/* Why This College Section */}
      <section className="section">
        <div className="container">
          <h2>Why Choose TechVidya College?</h2>
          <div className="cards-grid">
            <div className="card">
              <h3>🎓 Academic Excellence</h3>
              <p>Our rigorous academic programs are designed to meet industry standards and prepare students for successful careers in their chosen fields.</p>
            </div>
            <div className="card">
              <h3>🔬 State-of-the-Art Facilities</h3>
              <p>Modern laboratories, well-equipped classrooms, and advanced technology infrastructure support hands-on learning experiences.</p>
            </div>
            <div className="card">
              <h3>👨‍🏫 Expert Faculty</h3>
              <p>Learn from experienced professors and industry experts who bring real-world knowledge and research expertise to the classroom.</p>
            </div>
            <div className="card">
              <h3>🌟 Industry Connections</h3>
              <p>Strong partnerships with leading companies provide internship opportunities and excellent placement prospects for our graduates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Departments Section */}
      <section className="section" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <h2>Our Top Departments</h2>
          <div className="cards-grid">
            {topDepartments.map(department => (
              <DepartmentCard key={department.id} department={department} />
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <Link to="/departments" className="btn">View All Departments</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;