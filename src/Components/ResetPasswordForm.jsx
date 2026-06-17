// src/components/ResetPasswordForm.js
import React from 'react';
import { 
  Box, 
  Card, 
  TextField, 
  Button, 
  Typography, 
  Link, 
  Container 
} from '@mui/material';

const ResetPasswordForm = ({
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  resetErrors,
  handleResetPassword,
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
          sx={{ mb: 3 }}
        >
          Reset Password
        </Typography>

        <Box component="form" onSubmit={handleResetPassword} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            name="newPassword"
            label="New Password"
            type="password"
            id="newPassword"
            size="small"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            error={!!resetErrors.newPassword}
            helperText={resetErrors.newPassword}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            size="small"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!resetErrors.confirmPassword}
            helperText={resetErrors.confirmPassword}
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
          >
            Submit
          </Button>
          
          <Box sx={{ mt: 2 }}>
            <Link 
              component="button"
              type="button"
              variant="body2" 
              underline="hover"
              onClick={() => {
                setView('login');
              }}
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