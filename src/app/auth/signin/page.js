"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import "../../styles/SignIn.css";
import { Box, TextField, Typography, Button, Link } from "@mui/material";
import { MdLock, MdHelpOutline, MdPersonAdd } from "react-icons/md";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      router.push("/dashboard//statistics");
    } else {
      alert("Please fill in all fields");
    }
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

      {/* Left Content */}
      <div className="left-text">
        <h2>Welcome Back <span className="hand">👋</span></h2>
        <p>Access your personalized dashboard, manage your workspace, and continue where you left off.</p>
      </div>

      {/* Glass Sign-In Card */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="signin-card"
      >
        <Typography
          align="center"
          className="signin-title"
        >
          ── ✦ SIGN IN ✦ ──
        </Typography>

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          className="signin-input"
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          className="signin-input"
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="signin-button"
          startIcon={<MdLock />}
        >
          Sign In
        </Button>

        <Box className="signin-links">
          <Link href="#" className="signin-link">
            Forgot Password <MdHelpOutline />
          </Link>
          <span>|</span>
          <Link href="#" className="signin-link">
            <MdPersonAdd /> Sign Up
          </Link>
        </Box>
      </Box>
    </main>
  );
};

export default SignIn;
