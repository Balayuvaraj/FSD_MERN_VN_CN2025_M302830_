import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    message: ''
  });
  const [submittedData, setSubmittedData] = useState(null);

  const departments = [
    'Computer Science Engineering',
    'Information Technology',
    'Electronics & Communication Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Master of Business Administration'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      department: '',
      message: ''
    });
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <h2>Contact Us</h2>
          <p style={{textAlign: 'center', marginBottom: '3rem', fontSize: '1.2rem', color: '#666'}}>
            Have questions about our programs? We'd love to hear from you!
          </p>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="department">Department of Interest *</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn" style={{width: '100%'}}>
                Send Message
              </button>
            </form>

            {submittedData && (
              <div className="submitted-data">
                <h3>Thank you for your message!</h3>
                <p>We have received the following information:</p>
                <div style={{marginTop: '1rem'}}>
                  <p><strong>Name:</strong> {submittedData.name}</p>
                  <p><strong>Email:</strong> {submittedData.email}</p>
                  <p><strong>Department:</strong> {submittedData.department}</p>
                  <p><strong>Message:</strong> {submittedData.message}</p>
                </div>
                <p style={{marginTop: '1rem', fontStyle: 'italic'}}>
                  We will get back to you within 24-48 hours.
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div style={{marginTop: '4rem'}}>
            <div className="cards-grid">
              <div className="card">
                <h3>📍 Address</h3>
                <p>TechVidya College<br />
                123 Education Street<br />
                Tech City, TC 12345</p>
              </div>
              <div className="card">
                <h3>📞 Phone</h3>
                <p>Main Office: +91 98765 43210<br />
                Admissions: +91 98765 43211<br />
                Toll Free: 1800-123-4567</p>
              </div>
              <div className="card">
                <h3>✉️ Email</h3>
                <p>info@techvidya.edu<br />
                admissions@techvidya.edu<br />
                support@techvidya.edu</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;