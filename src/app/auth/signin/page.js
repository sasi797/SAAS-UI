"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import "../../styles/SignIn.css";
import { Box, TextField, Button, Link, Snackbar, Alert } from "@mui/material";
import { MdLock, MdHelpOutline } from "react-icons/md";
import {
  createItem,
  selectLoginLoading,
} from "@/store/features/loginPostSlice";
import {
  createItem as verifyOtp,
  selectVerifyOTPLoading,
} from "@/store/features/verifyOtpPostSlice";
import { useDispatch, useSelector } from "react-redux";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Image from "next/image";
import fullLogo from "../../../assests/APL-FullLogo.png";

const SignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();
  const { encrypt } = useEncrypt();

  const [view, setView] = useState("signin");
  const [flowType, setFlowType] = useState("signin");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const loginLoading = useSelector(selectLoginLoading);
  const verifyOtpLoading = useSelector(selectVerifyOTPLoading);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // ---------- NORMAL SIGN IN ----------
  const handleSignIn = async (data) => {
    data.preventDefault();

    if (!email || !password) {
      setSnackbar({
        open: true,
        message: "Please fill email & password fields.",
        severity: "error",
      });
      return;
    }

    try {
      const payload = {
        email: email,
        password: password,
      };
      // console.log("payload", payload);
      const encryptedData = await encrypt(payload);
      const encryptedPayloadData = { encryptedData };

      const result = await dispatch(createItem(encryptedPayloadData)).unwrap();

      console.log("✅ User Logged In Successfully:", result?.decrypted);

      // ⭐ STORE TOKEN IN SESSION STORAGE
      if (result?.decrypted?.token) {
        sessionStorage.setItem("authToken", result?.decrypted?.token);
      }

      // ⭐ SUCCESS SNACKBAR
      setSnackbar({
        open: true,
        message: result?.decrypted?.message || "Login successful!",
        severity: "success",
      });

      setFlowType("signin");
      setView("otp");
    } catch (err) {
      console.error("❌ Login failed:", err);

      // ⭐ ERROR SNACKBAR (from API response)
      setSnackbar({
        open: true,
        message: err || "Login failed. Try again.",
        severity: "error",
      });
    }
  };

  // ---------- VERIFY OTP ----------
  const handleVerifyOtp = async () => {
    if (!otp) {
      setSnackbar({
        open: true,
        message: "Please fill OTP.",
        severity: "error",
      });
      return;
    }

    try {
      const storedToken = sessionStorage.getItem("authToken");

      const payload = {
        otp: parseInt(otp, 10),
        token: storedToken,
      };
      // console.log("otppayload", payload);
      const encryptedData = await encrypt(payload);
      const encryptedPayloadData = { encryptedData };

      const result = await dispatch(verifyOtp(encryptedPayloadData)).unwrap();

      console.log("✅ OTP verified Successfully:", result?.decrypted);

      // ⭐ STORE TOKEN IN SESSION STORAGE
      if (result?.decrypted?.token) {
        sessionStorage.setItem("authToken", result?.decrypted?.token);
      }

      // Store user info
      const userData = result?.decrypted?.data;
      if (userData?.user_name) {
        sessionStorage.setItem("username", userData.user_name);
      }
      if (userData?.email) {
        sessionStorage.setItem("email", userData.email);
      }

      // ⭐ SUCCESS SNACKBAR
      setSnackbar({
        open: true,
        message: result?.decrypted?.message || "Verify OTP successful!",
        severity: "success",
      });

      if (flowType === "signin") {
        // OTP after sign-in → go to dashboard
        router.push("/dashboard/statistics");
      } else {
        // OTP during forgot password → go to reset password
        setView("resetpassword");
      }
    } catch (err) {
      console.error("❌ Verify OTP failed:", err);

      // ⭐ ERROR SNACKBAR (from API response)
      setSnackbar({
        open: true,
        message: err || "Verify OTP failed. Try again.",
        severity: "error",
      });
    }
  };

  // ---------- FORGOT PASSWORD FIRST STEP ----------
  const handleForgot = () => {
    if (!email) {
      alert("Enter your registered email");
      return;
    }

    setFlowType("forgot"); // ⭐ SET FLOW TYPE
    setView("otp");
  };

  // ---------- RESET PASSWORD ----------
  const handleResetPassword = () => {
    if (!newPassword || !confirmPass) {
      alert("Enter all fields");
      return;
    }
    if (newPassword !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    alert("Password reset successfully!");

    // redirect to sign in
    resetAllFields();
    setView("signin");
  };

  // const header = {
  //   signin: "── ✦ SIGN IN ✦ ──",
  //   forgot: "── ✦ RESET PASSWORD ✦ ──",
  //   signup: "── ✦ CREATE ACCOUNT ✦ ──",
  //   otp: "── ✦ VERIFY OTP ✦ ──",
  //   resetpassword: "── ✦ NEW PASSWORD ✦ ──",
  // };

  const resetAllFields = () => {
    setEmail("");
    setPassword("");
    setOtp("");
    setNewPassword("");
    setConfirmPass("");
    setFlowType("signin");
  };

  return (
    <main className="signin-wrapper">
      {/* BG */}
      <div className="floating-bg">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
      </div>

      {/* LEFT TEXT */}
      <div className="left-text">
        <h2>
          Welcome Back <span className="hand">👋</span>
        </h2>
        <p>Access your dashboard and manage workflow seamlessly.</p>
      </div>

      {/* CARD */}
      <Box component="form" className="signin-card">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            loading="eager"
            src={fullLogo}
            alt="Full Logo"
            style={{ width: "80%", height: "auto", maxWidth: "600px" }}
          />
        </Box>

        {/* ---------- SIGN IN ---------- */}
        {view === "signin" && (
          <>
            <TextField
              label="Email"
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
              className="signin-button"
              startIcon={<MdLock />}
              onClick={handleSignIn}
              disabled={loginLoading?.create}
              sx={{
                "&.Mui-disabled": {
                  cursor: "not-allowed",
                  opacity: 0.7,
                  pointerEvents: "auto",
                },
              }}
            >
              {loginLoading?.create ? "Authenticating..." : "Sign In"}
            </Button>

            <Box className="signin-links">
              <Link className="signin-link" onClick={() => setView("forgot")}>
                Forgot Password <MdHelpOutline />
              </Link>
              {/* <span>|</span> */}
              {/* <Link className="signin-link" onClick={() => setView("signup")}>
                <MdPersonAdd /> Sign Up
              </Link> */}
            </Box>
          </>
        )}

        {/* ---------- FORGOT PASSWORD ---------- */}
        {view === "forgot" && (
          <>
            <TextField
              label="Registered Email"
              fullWidth
              variant="standard"
              className="signin-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              className="signin-button"
              onClick={handleForgot}
            >
              Send OTP
            </Button>

            <Link
              className="signin-link center"
              onClick={() => setView("signin")}
            >
              ← Back to Sign In
            </Link>
          </>
        )}

        {/* ---------- OTP VERIFY ---------- */}
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
              startIcon={<VerifiedOutlinedIcon />}
              className="signin-button"
              onClick={handleVerifyOtp}
              disabled={verifyOtpLoading?.create}
              sx={{
                "&.Mui-disabled": {
                  cursor: "not-allowed",
                  opacity: 0.7,
                  pointerEvents: "auto",
                },
              }}
            >
              {verifyOtpLoading?.create ? "Authenticating..." : "Verify OTP"}
            </Button>

            <Link
              className="signin-link center"
              onClick={() => setView("signin")}
            >
              ← Back
            </Link>
          </>
        )}

        {/* ---------- RESET PASSWORD ---------- */}
        {view === "resetpassword" && (
          <>
            <TextField
              label="New Password"
              type="password"
              fullWidth
              variant="standard"
              className="signin-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              variant="standard"
              className="signin-input"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              className="signin-button"
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>

            <Link
              className="signin-link center"
              onClick={() => setView("signin")}
            >
              ← Back to Sign In
            </Link>
          </>
        )}
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </main>
  );
};

export default SignIn;
