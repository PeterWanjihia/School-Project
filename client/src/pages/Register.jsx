import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !bio || !profilePic) {
      alert("All input fields are required.");
    } else {
      const res = await axios.post("http://localhost:5000/api/users/create", {
        username,
        bio,
        profilePic,
      });
      setCurrentUser(res.data.user);
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));
      navigate("/");
    }
  };

  return (
    <div className="register">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="form-group mb-10">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Biography</label>
          <input
            type="text"
            className="form-control"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Profile Picture</label>
          <input
            type="url"
            className="form-control"
            accept="image/*"
            name="profile-pic"
            placeholder="Enter image url"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
