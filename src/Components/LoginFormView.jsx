// src/components/LoginFormView.js
import React from 'react';
import { 
  Box, 
  Card, 
  TextField, 
  Button, 
  Typography, 
  Link, 
  Container,
  Divider
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleLogin } from "@react-oauth/google";

const LoginFormView = ({
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
  loginErrors,
  handleLoginSubmit,
  handleGoogleSuccess,
  handleGoogleError,
  setView
}) => {
  return (
    <Container 
      maxWidth={false} 
      disableGutters 
      sx={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#eef2f6' 
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

        <Box component="form" onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            size="small"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            error={!!loginErrors.email}
            helperText={loginErrors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            size="small"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            error={!!loginErrors.password}
            helperText={loginErrors.password}
          />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
            <Link 
              component="button"
              type="button"
              variant="body2" 
              underline="hover"
              onClick={() => {
                setView('forgot-password');
              }}
            >
              Forgot Password?
            </Link>
            <Link href="/register" variant="body2" underline="hover">
              New User?
            </Link>
          </Box>

          <Button
            fullWidth
            type="submit"
            variant="outlined"
            size="small"
            sx={{ 
              mt: 1, 
              mb: 2,
              px: 4, 
              py: 0.8,
              borderRadius: 2,
              textTransform: 'none',
              color: '#fff',
              backgroundColor: '#4338CA',
            }}
          >
            Login
          </Button>

          <Divider sx={{ my: 2, fontSize: '0.8rem', color: '#4338CA' }}>
            <b>or</b>
          </Divider>
          <Box
            fullWidth 
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
            >
            <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                theme="outline"
                size="large"
                width="250"
            />
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default LoginFormView;