// src/components/LoginFormView.js
import React, { useState } from "react";
import { Box, Card, TextField, Button, Typography, InputAdornment, IconButton, Link, Container, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useGoogleLogin } from '@react-oauth/google';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginFormView = () => {
  //State variables for email and password
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  //State variables for error messages
  const [loginErrors, setLoginErrors] = useState({});

  //Google OAuth login
  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
    },
    onError: () => {
      console.log('Google Login Failed');
    },
  });

  //Form validation logic
  const handleLogin = (e) => {
    e.preventDefault();
    const errors = {};

    //Email validation
    if (!loginEmail) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginEmail)) {
      errors.email = "Enter a valid email address";
    }

    //Password validation
    if (!loginPassword) {
      errors.password = "Password is required";
    } else if (loginPassword.length < 8 || !/[A-Z]/.test(loginPassword) || !/[a-z]/.test(loginPassword) || !/[0-9]/.test(loginPassword) || !/[!@#$%^&*(),.?":{}|<>_]/.test(loginPassword)) {
      errors.password = "Password is wrong. Please check your password and try again.";
    }
    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
      return;
    }
  };

  //Removing error message when user changes the input
  const closeError = (field) => {
    setLoginErrors(prevErrors => ({ ...prevErrors, [field]: undefined }));
  }

  return (
    <Container
    disableGutters
      sx={{
        mt: 5,
        display: 'flex',
        width: 'fit-content',
        height: 'fit-content',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
        borderRadius: '16px',
      }}
    >
      <Card
        sx={{
          width: 320,
          p: 3,
          borderRadius: 3,
          boxShadow: '0px 8px 24px rgba(0,0,0,0.15)',
          textAlign: 'center'
        }}
      >
        <Typography
          variant="h6"
          component="h1"
          fontWeight="700"
          sx={{ mb: 4 }}
        >
          <b>Login to continue</b>
        </Typography>

        <Box component="form" sx={{ my: 2 }}>
          <TextField
            required
            fullWidth
            label="Email"
            name="email"
            size="small"
            value={loginEmail}
            onChange={(e) => {
              setLoginEmail(e.target.value);
              closeError('email');
            }}
            error={!!loginErrors.email}
            helperText={loginErrors.email || " "}
          />
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            size="small"
            value={loginPassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
              closeError('password');
            }}
            error={!!loginErrors.password}
            helperText={loginErrors.password || " "}
            slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end" size="small">
                                    {showPassword ?  <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" /> }
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
            <Link
              href="/forgot-password"
              variant="body2"
              underline="hover"
            >
              Forgot Password?
            </Link>
            <Link href="/register" variant="body2" underline="hover">
              New User?
            </Link>
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 1,
              py: 1.2,
              backgroundColor: '#4338CA',
              color: '#FFFFFF',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#3730A3' },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>

          <Divider sx={{ my: 2 }}>
            <Typography variant="body2" sx={{ color: '#9CA3AF' }}>or</Typography>
          </Divider>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              onClick={loginWithGoogle}
              sx={{
                py: 1.2,
                fontWeight: 500,
                backgroundColor: '#4338CA',
                textTransform: 'none',
                color: '#FFFFFF',
                '&:hover': { backgroundColor: '#3730A3' },
              }}
            >
              Continue with Google
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default LoginFormView;