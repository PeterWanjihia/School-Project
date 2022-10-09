import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function EditModal() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [username, setUsername] = useState(currentUser?.username);
  const [bio, setBio] = useState(currentUser?.bio);
  const [profilePic, setProfilePic] = useState(currentUser?.profilePic);

  const handleSubmit = async () => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/users/update/" + currentUser._id,
        { username, bio, profilePic }
      );
      setCurrentUser(res.data.user);
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex flex-1 modal-cont">
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Change Profile
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Change profile details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
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
                <label htmlFor="exampleInputPassword1">Profile picture</label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="Image url"
                  value={profilePic}
                  onChange={(e) => setProfilePic(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                data-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
