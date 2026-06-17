// src/components/ResetPasswordForm.js
import { useState } from "react";
import { Box, Card, TextField, Button, Typography, Link, Container } from '@mui/material';

const ResetPasswordForm = () => {
  //State variables for new password, confirm password 
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //State variable for error messages
  const [resetErrors, setResetErrors] = useState({});

  //Basic validation for password strength and matching
  const handleResetPassword = (e) => {
    e.preventDefault();
    const errors = {};
    if (!newPassword) {
      errors.newPassword = "New password is required";
    } else if (newPassword.length < 8) {
      errors.newPassword = "Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(newPassword)) {
      errors.newPassword = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(newPassword)) {
      errors.newPassword = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(newPassword)) {
      errors.newPassword = "Password must contain at least one digit";
    } else if (!/[!@#$%^&*()]/.test(newPassword)) {
      errors.newPassword = "Password must contain at least one special characters";
    }
    //Confirming the password
    if (newPassword !== confirmPassword) {
      errors.confirmPassword = "Password does not match";
    }

    if (Object.keys(errors).length > 0) {
      setResetErrors(errors);
      return;
    }
  }

  //Clean the code when the user updates the input
  const cleanError = (field) => {
    setResetErrors((prevError) => ({ ...prevError, [field]: undefined }));
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: "linear-gradient(160deg, #4338CA 0%, #3730A3 60%, #312E81 100%)"
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
          sx={{ mb: 3 }}
        >
          Reset Password
        </Typography>

        <Box component="form">
          <TextField
            required
            fullWidth
            label="New Password"
            type="password"
            id="newPassword"
            size="small"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              cleanError("newPassword")
            }}
            error={!!resetErrors.newPassword}
            helperText={resetErrors.newPassword || " "}
          />
          <TextField
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            size="small"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              cleanError("confirmPassword")
            }}
            error={!!resetErrors.confirmPassword}
            helperText={resetErrors.confirmPassword || " "}
          />

          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              mt: 3,
              px: 4,
              py: 0.8,
              borderRadius: 2,
              textTransform: 'none',
              color: '#fff',
              backgroundColor: '#4338CA',
            }}
            onClick={handleResetPassword}
          >
            Submit
          </Button>

          <Box sx={{ mt: 2 }}>
            <Link
              href="/login"
              variant="body2"
              underline="hover"
            >
              Back to Login
            </Link>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default ResetPasswordForm;