import React, { useState } from "react";

const SignUpForm = () => {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for input validation
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  // Handle email input change
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Simple email validation
    setEmailValid(/\S+@\S+\.\S+/.test(newEmail));
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Simple password validation
    setPasswordValid(newPassword.length >= 8);
  };

  // Handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    // Simple confirm password validation
    setConfirmPasswordValid(newConfirmPassword === password);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Check if all inputs are valid
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert("Form submitted successfully");
    } else {
      alert("Can't submit the form. Please check your inputs.");
    }
  };

  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: emailValid ? "green" : "red" }}
      />
      {!emailValid && (
        <p style={{ color: "red" }}>Please enter a valid email address</p>
      )}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ borderColor: passwordValid ? "green" : "red" }}
      />
      {!passwordValid && (
        <p style={{ color: "red" }}>
          Password must be at least 8 characters long
        </p>
      )}

      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        style={{ borderColor: confirmPasswordValid ? "green" : "red" }}
      />
      {!confirmPasswordValid && (
        <p style={{ color: "red" }}>Passwords do not match</p>
      )}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignUpForm;
