import { Link } from 'react-router-dom';

function DepartmentCard({ department }) {
  return (
    <div className="card">
      <h3>{department.name}</h3>
      <p>{department.description}</p>
      <Link to={`/departments/${department.id}`} className="btn">
        View More
      </Link>
    </div>
  );
}

export default DepartmentCard;