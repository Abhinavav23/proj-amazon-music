import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const profileIconRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const hideModal = (e) => {
      //   console.log("e.target", e.target);
      if (profileIconRef.current.contains(e.target)) {
        // console.log("here");
        return;
      }
      setShowModal(false);
    };
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, []);
  return (
    <section
      className="profile"
      onClick={() => {
        setShowModal(!showModal);
      }}
      ref={profileIconRef}
    >
      <section className="profile-icon">
        <ProfileIcon />
      </section>

      {showModal && (
        <section className="auth-modal">
          <button className="signin-btn" onClick={() => {
            navigate('/signin')
          }}>Sign-in</button>
        </section>
      )}
    </section>
  );
};
