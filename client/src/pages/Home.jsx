import React, { useContext } from "react";
import EditModal from "../components/EditModal";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="body d-flex">
      <div className="img-container">
        <img src={currentUser?.profilePic} alt="" />
      </div>
      <div className="right-container">
        <span className="username">{currentUser?.username}</span>
        <span className="bio">{currentUser?.bio}</span>
        <EditModal />
      </div>
    </div>
  );
}

export default Home;
