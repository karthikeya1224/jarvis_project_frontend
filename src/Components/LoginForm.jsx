import React, { useState } from "react";
import LoginFormView from "./LoginFormView";
import ResetPasswordForm from "./ResetPasswordForm";
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {
  const [view, setView] = useState("login");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState({});

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetErrors, setResetErrors] = useState({});

  const validatePasswordStrength = (password) => {
    if (!password) return "Password is required";

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>_]/.test(password);

    if (
      !hasUppercase ||
      !hasLowercase ||
      !hasNumber ||
      !hasSpecial ||
      password.length < 6
    ) {
      return "Password must be at least 6 characters and contain uppercase, lowercase, number and special character";
    }

    return "";
  };

  const validateLogin = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!loginEmail) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(loginEmail)) {
      errors.email = "Enter a valid email address";
    }

    const passwordError = validatePasswordStrength(loginPassword);

    if (passwordError) {
      errors.password = passwordError;
    }

    setLoginErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (validateLogin()) {
      window.location.href = "/dashboard";
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(
        credentialResponse.credential
      );

      console.log("Google User:", decoded);

      localStorage.setItem(
        "user",
        JSON.stringify({
          name: decoded.name,
          email: decoded.email,
          picture: decoded.picture,
        })
      );

      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
  };

  const validateReset = () => {
    const errors = {};

    const newPasswordError =
      validatePasswordStrength(newPassword);

    if (newPasswordError) {
      errors.newPassword = newPasswordError;
    }

    if (!confirmPassword) {
      errors.confirmPassword =
        "Confirm password is required";
    } else if (newPassword !== confirmPassword) {
      errors.confirmPassword =
        "Passwords do not match";
    }

    setResetErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (validateReset()) {
      setNewPassword("");
      setConfirmPassword("");
      setResetErrors({});
      setView("login");
    }
  };

  const handleSetView = (newView) => {
    setLoginErrors({});
    setResetErrors({});
    setView(newView);
  };

  if (view === "forgot-password") {
    return (
      <ResetPasswordForm
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        resetErrors={resetErrors}
        handleResetPassword={handleResetPassword}
        setView={handleSetView}
      />
    );
  }

  return (
    <LoginFormView
      loginEmail={loginEmail}
      setLoginEmail={setLoginEmail}
      loginPassword={loginPassword}
      setLoginPassword={setLoginPassword}
      loginErrors={loginErrors}
      handleLoginSubmit={handleLoginSubmit}
      handleGoogleSuccess={handleGoogleSuccess}
      handleGoogleError={handleGoogleError}
      setView={handleSetView}
    />
  );
};

export default LoginForm;