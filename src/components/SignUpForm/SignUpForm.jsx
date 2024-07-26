// src/components/SignUpForm.jsx
import React, { useState } from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    biography: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};

    if (!formData.fullName) errors.fullName = "To‘liq ismingizni kiriting";
    if (!formData.email) errors.email = "Email manzilingizni kiriting";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Yaroqli email manzilingizni kiriting";
    if (!formData.username) errors.username = "Username kiriting";
    if (!formData.password) errors.password = "Parol kiriting";
    if (formData.password.length < 6)
      errors.password = "Parol kamida 6 ta belgidan iborat bo‘lishi kerak";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Ma’lumotlari:", formData);
      setErrors({});
      // Qo'shimcha ma'lumotlarni massivga qo'shish uchun
      // setFormData([...formData, formData]);
    }
  };

  return (
    <div className="form-container">
      <h2>Hisob Yarating</h2>
      <p>Hisob yaratish uchun quyidagi ma’lumotlarni to‘ldiring.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="To‘liq ismingizni kiriting"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p>{errors.fullName}</p>}

        <input
          type="email"
          placeholder="Email manzilingizni kiriting"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          type="text"
          placeholder="Username kiriting"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}

        <input
          type="password"
          placeholder="Parol kiriting"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}

        <textarea
          placeholder="Biografiyangiz"
          name="biography"
          value={formData.biography}
          onChange={handleChange}
        ></textarea>

        <button type="submit">HISOB YARATISH</button>
      </form>
      <p>Hisobingizni sozlashdan keyin email olasiz</p>
    </div>
  );
};

export default SignUpForm;
