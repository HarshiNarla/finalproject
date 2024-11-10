import React, { useState } from "react";
import "../assets/styles.css";

function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would typically handle registration logic, such as sending data to an API
    console.log("Registration data:", formData);
  };

  return (
    <div id="register" className="wrapper-1">
      <div className="main-2">
        <form onSubmit={handleSubmit}>
          <h2>Register Here!!</h2>
          <div className="input-box-1">
            <div className="input-field-1">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                pattern="[A-Za-z]+"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
              <ion-icon name="person"></ion-icon>
            </div>
            <div className="input-field-1">
              <input
                type="text"
                name="middlename"
                placeholder="Middle Name"
                pattern="[A-Za-z]+"
                value={formData.middlename}
                onChange={handleChange}
                required
              />
              <ion-icon name="person"></ion-icon>
            </div>
            <div className="input-field-1">
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                pattern="[A-Za-z]+"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
              <ion-icon name="person"></ion-icon>
            </div>
          </div>
          <div className="input-box-1">
            <div className="input-field-1">
              <input
                type="text"
                name="username"
                placeholder="Username"
                pattern="[A-Za-z]+"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <ion-icon name="person"></ion-icon>
            </div>
            <div className="input-field-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <ion-icon name="mail"></ion-icon>
            </div>
            <div className="input-field-1">
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <ion-icon name="call"></ion-icon>
            </div>
          </div>
          <div className="input-box-1">
            <div className="input-field-1">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <ion-icon name="lock-closed"></ion-icon>
            </div>
          </div>
          <div className="input-box-1">
            <div className="input-field-1">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <ion-icon name="lock-closed"></ion-icon>
            </div>
          </div>
          <label>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
            />
            I accept all terms and conditions
          </label>
          <button type="submit" className="btn-2">Register</button>
        </form>
        <p>
          Already have an account? <a href="#login" style={{ color: "#7d5a50" }}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;