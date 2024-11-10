import React from 'react';
import '../assets/aboutandteam.css'; // Optional: create this CSS file for styling

const AboutAndTeam = () => {
  return (
    <section className="about-and-team">
      {/* About Us Section */}
      <div id="about-us">
        <h2 style={{ textAlign: 'center', color: '#fff' }}>About Us</h2>
        <p style={{ color: '#fff', textAlign: 'center' }}>
          At PAWSIFY, we are passionate about providing the best care for your beloved pets. 
          Established in 2016, our team is dedicated to ensuring the health, happiness, and 
          well-being of every pet we encounter.
        </p>
        <p style={{ color: '#fff', textAlign: 'center' }}>
          Our services include veterinary care, grooming, training, and walking, tailored 
          to meet the unique needs of your furry friends. We believe in treating each pet 
          as if they were our own, with love and compassion at the forefront of everything we do.
        </p>
        <p style={{ color: '#fff', textAlign: 'center' }}>
          Our team consists of experienced professionals who are not only skilled but also 
          truly love animals. We are committed to continuous learning and improvement to 
          provide the best service possible.
        </p>
        <p style={{ color: '#fff', textAlign: 'center' }}>
          Thank you for choosing PAWSIFY as your trusted partner in pet care. We look forward 
          to meeting you and your pets!
        </p>
      </div>

      {/* Team Section */}
      <div id="team">
        <h2 style={{ textAlign: 'center', color: '#fff', marginTop: '20px' }}>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img
              src="https://doximity-res.cloudinary.com/images/c_crop,f_auto,h_320,q_auto,t_profile_photo_320x320,w_320,x_0,y_0/saqjlwvdxyjzeow05pfh/sarah-adams-md-los-angeles-ca.jpg"
              alt="Dr. Sarah Adams"
            />
            <h3>Dr. Sarah Adams</h3>
            <p>Veterinarian</p>
          </div>
          <div className="team-member">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcxz8furzKc5vmRx63Kw-aU4VqmoJ3luSbrQ&s"
              alt="Mike Johnson"
            />
            <h3>Mike Johnson</h3>
            <p>Dog Trainer</p>
          </div>
          <div className="team-member">
            <img
              src="https://i.pinimg.com/originals/a8/72/4b/a8724bc703fbe754b5ba9ff1cc9f50b8.jpg"
              alt="Emily Davis"
            />
            <h3>Emily Davis</h3>
            <p>Pet Groomer</p>
          </div>
          <div className="team-member">
            <img
              src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg"
              alt="Tom Brown"
            />
            <h3>Tom Brown</h3>
            <p>Pet Walker</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAndTeam;
