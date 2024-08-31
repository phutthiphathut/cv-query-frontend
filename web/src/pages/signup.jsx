// SignUp.js
import React, { useState } from "react";
import { useAuth } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (userType === "user" || userType === "staff") {
      // Assuming sign-up process is successful
      login(userType);
      navigate("/home"); // Redirect to home after sign-up
    } else {
      setError("Invalid user type. Please select either 'user' or 'staff'.");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>
            User Type:
            <select value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="">Select User Type</option>
              <option value="user">User</option>
              <option value="staff">Staff</option>
            </select>
          </label>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
