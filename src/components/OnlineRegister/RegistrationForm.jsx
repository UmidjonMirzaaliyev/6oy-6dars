import React, { useRef } from "react";
import "./style.css"

const RegistrationForm = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const addressRef = useRef();
  const monthRef = useRef();
  const dayRef = useRef();
  const yearRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      company: companyRef.current.value,
      address: addressRef.current.value,
      birthDate: `${monthRef.current.value}/${dayRef.current.value}/${yearRef.current.value}`,
    };

    // Simple validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.address ||
      !formData.birthDate
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            ref={firstNameRef}
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            ref={lastNameRef}
            placeholder="Last Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company (if applicable)</label>
          <input
            type="text"
            id="company"
            ref={companyRef}
            placeholder="Company"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Physical Address</label>
          <input
            type="text"
            id="address"
            ref={addressRef}
            placeholder="Physical Address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Date of Birth</label>
          <div className="birthdate-fields">
            <select ref={monthRef}>
              <option value="">Month</option>
              {/* Add month options here */}
            </select>
            <select ref={dayRef}>
              <option value="">Day</option>
              {/* Add day options here */}
            </select>
            <select ref={yearRef}>
              <option value="">Year</option>
              {/* Add year options here */}
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
