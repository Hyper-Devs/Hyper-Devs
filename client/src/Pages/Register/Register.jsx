import React, { useState } from "react";
import "./Register.css";
import Footer from "../../Components/footer";
import { FiHash } from "react-icons/fi";
import { FiKey } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import GlobalModal from "../../Components/Modal/globalmodal";
import axios from "axios";
import api from "../../api/api"

function Register() {
  const [register_id, setRegister_id] = useState("");
  const [register_password, setRegister_password] = useState("");
  const [register_name, setRegister_name] = useState("");
  const [register_position, setRegister_position] = useState("");
  const [register_role, setRegister_role] = useState("");

  const [titleModal, setTitleModal] = useState('');
  const [bodyModal, setBodyModal] = useState('');
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      register_id,
      register_password,
      register_name,
      register_position,
      register_role
    };
    await api.post("/register", user)
      .then(res => {
        if (res.status === 201) {
            setTitleModal("User Registration.");
            setBodyModal("User Succesfully registered!")
            setShowModal(true)
        } else if (res.status === 400){
          setTitleModal("User Registration.");
          setBodyModal("Access ID already exists!")
          setShowModal(true)
        }
      })
      .catch(err => {
        // console.log(err.response.status)
        if(err.response.status === 400){
          setTitleModal("User Registration.");
          setBodyModal("Access ID already exists!")
          setShowModal(true)
        } else {
        setTitleModal("User Registration.");
        setBodyModal("Error occured while registering user!")
        setShowModal(true)
        console.error('Error occurred while registering user', err.message);
        }
      });
  };

  return (
    <div id="register-page">
      <div className="register-content">
        <div className="register-container">
          <div className="title">
            <h2>University of the Philippines Cebu High School</h2>
            <h1>Gate Access Notification System</h1>
          </div>

          <div className="form-container">
            <div className="register-bgi">
              <div className="upcLogo"></div>

              <div className="registerForm">
                <form className="register-field" onSubmit={handleSubmit}>
                  <label>ID Number</label>
                  <div className="register-input-container">
                    <div className="register-input-icons">
                      <FiHash size={"1.5rem"} color="#7A1315" />
                    </div>
                    <input
                      name="register-id"
                      type="text"
                      onChange={(e) => setRegister_id(e.target.value)}
                    />
                  </div>

                  <label>Name</label>
                  <div className="register-input-container">
                    <div className="register-input-icons">
                      <FiUser size={"1.5rem"} color="#7A1315" />
                    </div>
                    <input
                      name="register-name"
                      type="text"
                      onChange={(e) => setRegister_name(e.target.value)}
                    />
                  </div>

                  <label>Position</label>
                  <div className="register-input-container">
                    <div className="register-input-icons">
                      <FiUser size={"1.5rem"} color="#7A1315" />
                    </div>
                    <input
                      name="register-position"
                      type="text"
                      onChange={(e) => setRegister_position(e.target.value)}
                    />
                  </div>

                  <label>Role</label>
                  <div className="register-input-container">
                    <div className="register-input-icons">
                      <FiUser size={"1.5rem"} color="#7A1315" />
                    </div>
                    <select
                      name="register-role"
                      onChange={(e) => setRegister_role(e.target.value)}
                    >
                      <option value="User">Faculty</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>

                  <label>Password</label>
                  <div className="register-input-container">
                    <div className="register-input-icons">
                      <FiKey size={"1.5rem"} color="#7A1315" />
                    </div>
                    <input
                      name="register-password"
                      type="password"
                      onChange={(e) => setRegister_password(e.target.value)}
                    />
                  </div>

                  <div className="register-button">
                    <button type="submit">Register</button>
                  </div>
                </form>
              </div>
              <GlobalModal
                showModal={showModal}
                title={titleModal}
                body={bodyModal}
                onClose={handleCloseModal}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Register;