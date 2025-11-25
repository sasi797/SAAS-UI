"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import "../../styles/SignIn.css";
import { Box, TextField, Typography, Button, Link } from "@mui/material";
import { MdLock, MdHelpOutline, MdPersonAdd } from "react-icons/md";

const SignIn = () => {
  const router = useRouter();
  const [view, setView] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) setView("otp");
    else alert("Please fill in all fields");
  };

  const handleVerifyOtp = () => {
    router.push("/dashboard/statistics");
  };

  const header = {
    signin: "── ✦ SIGN IN ✦ ──",
    forgot: "── ✦ RESET PASSWORD ✦ ──",
    signup: "── ✦ CREATE ACCOUNT ✦ ──",
    otp: "── ✦ VERIFY OTP ✦ ──",
  };

  const resetAllFields = () => {
    setEmail("");
    setPassword("");
    setOtp("");
  };

  return (
    <main className="signin-wrapper">
      {/* Floating Bubbles */}
      <div className="floating-bg">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
      </div>

      {/* Side Text */}
      <div className="left-text">
        <h2>
          Welcome Back <span className="hand">👋</span>
        </h2>
        <p>Access your dashboard and manage workflow seamlessly.</p>
      </div>

      {/* Card */}
      <Box component="form" className="signin-card">
        <Typography align="center" className="signin-title">
          {header[view]}
        </Typography>

        {/* ---- SIGN IN ---- */}
        {view === "signin" && (
          <>
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              className="signin-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              className="signin-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              startIcon={<MdLock />}
              className="signin-button"
              onClick={handleSignIn}
            >
              Sign In
            </Button>

            <Box className="signin-links">
              <Link className="signin-link" onClick={() => setView("forgot")}>
                Forgot Password <MdHelpOutline />
              </Link>
              <span>|</span>
              <Link className="signin-link" onClick={() => setView("signup")}>
                <MdPersonAdd /> Sign Up
              </Link>
            </Box>
          </>
        )}

        {/* ---- FORGOT ---- */}
        {view === "forgot" && (
          <>
            <TextField
              label="Registered Email"
              fullWidth
              variant="standard"
              className="signin-input"
            />

            <Button fullWidth variant="contained" className="signin-button">
              Send Reset Link
            </Button>

            <Link
              className="signin-link center"
              onClick={() => {
                resetAllFields();
                setView("signin");
              }}
            >
              ← Back to Sign In
            </Link>
          </>
        )}

        {/* ---- SIGN UP ---- */}
        {view === "signup" && (
          <>
            <TextField
              label="Full Name"
              fullWidth
              variant="standard"
              className="signin-input"
            />
            <TextField
              label="Email"
              fullWidth
              variant="standard"
              className="signin-input"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              className="signin-input"
            />

            <Button fullWidth variant="contained" className="signin-button">
              Create Account
            </Button>

            <Link
              className="signin-link center"
              onClick={() => {
                resetAllFields();
                setView("signin");
              }}
            >
              ← Already have an account? Sign In
            </Link>
          </>
        )}

        {/* ---- OTP ---- */}
        {view === "otp" && (
          <>
            <TextField
              label="Enter OTP"
              fullWidth
              variant="standard"
              className="signin-input"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              className="signin-button"
              onClick={handleVerifyOtp}
            >
              Verify & Continue
            </Button>

            <Link
              className="signin-link center"
              onClick={() => {
                resetAllFields();
                setView("signin");
              }}
            >
              ← Back
            </Link>
          </>
        )}
      </Box>
    </main>
  );
};

export default SignIn;
