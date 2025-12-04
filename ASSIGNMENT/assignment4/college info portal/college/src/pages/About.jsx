function About() {
  const achievements = [
    {
      year: "2020",
      title: "NAAC A+ Accreditation",
      description: "Received the highest grade from National Assessment and Accreditation Council"
    },
    {
      year: "2019",
      title: "Best Engineering College Award",
      description: "Recognized as the Best Engineering College in the state by Education Ministry"
    },
    {
      year: "2018",
      title: "100% Placement Record",
      description: "Achieved 100% placement rate for the graduating batch with top companies"
    },
    {
      year: "2017",
      title: "Research Excellence Award",
      description: "Honored for outstanding research contributions in technology and innovation"
    }
  ];

  return (
    <div>
      <section className="section">
        <div className="container">
          <h2>About TechVidya College</h2>
          
          {/* College History */}
          <div className="detail-section">
            <h3>Our History</h3>
            <p>
              Established in 1995, TechVidya College has been at the forefront of technical education for over 
              two decades. What started as a small engineering college with just 100 students has grown into 
              a premier institution with over 5,000 students across multiple disciplines. Our journey has been 
              marked by continuous innovation, academic excellence, and a commitment to producing industry-ready 
              professionals.
            </p>
            <p>
              From our humble beginnings in a single building, we have expanded to a sprawling 50-acre campus 
              with state-of-the-art facilities, modern laboratories, and a vibrant student community. Our alumni 
              network spans across the globe, working in leading technology companies, research institutions, 
              and entrepreneurial ventures.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="detail-section">
            <h3>Mission & Vision</h3>
            <div className="cards-grid">
              <div className="card">
                <h4>Our Mission</h4>
                <p>
                  To provide world-class technical education that combines theoretical knowledge with practical 
                  skills, fostering innovation, critical thinking, and ethical leadership among our students. 
                  We strive to create an environment that encourages research, entrepreneurship, and lifelong learning.
                </p>
              </div>
              <div className="card">
                <h4>Our Vision</h4>
                <p>
                  To be recognized as a leading institution of higher learning that produces globally competent 
                  professionals who contribute meaningfully to society through technological innovation, sustainable 
                  development, and ethical practices.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="detail-section">
            <h3>Our Achievements</h3>
            <div className="timeline">
              {achievements.map((achievement, index) => (
                <div key={index} className="timeline-item">
                  <h4>{achievement.year} - {achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="detail-section">
            <h3>Why We Stand Out</h3>
            <div className="cards-grid">
              <div className="card">
                <h4>📚 Academic Programs</h4>
                <p>6 undergraduate and 4 postgraduate programs designed with industry input and global standards.</p>
              </div>
              <div className="card">
                <h4>🔬 Research Focus</h4>
                <p>Active research centers in AI, IoT, Renewable Energy, and Sustainable Engineering.</p>
              </div>
              <div className="card">
                <h4>🤝 Industry Partnerships</h4>
                <p>Collaborations with 50+ companies for internships, projects, and placement opportunities.</p>
              </div>
              <div className="card">
                <h4>🌍 Global Exposure</h4>
                <p>Student exchange programs with universities in USA, Germany, and Singapore.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;