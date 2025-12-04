import { useState, useEffect } from 'react';
import DepartmentCard from '../components/DepartmentCard';
import departmentsData from '../data/departments.json';

function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    setDepartments(departmentsData);
  }, []);

  return (
    <div>
      <section className="section">
        <div className="container">
          <h2>Our Departments</h2>
          <p style={{textAlign: 'center', marginBottom: '3rem', fontSize: '1.2rem', color: '#666'}}>
            Explore our diverse range of academic departments, each offering specialized programs 
            designed to prepare students for successful careers in their chosen fields.
          </p>
          
          <div className="cards-grid">
            {departments.map(department => (
              <DepartmentCard key={department.id} department={department} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Departments;