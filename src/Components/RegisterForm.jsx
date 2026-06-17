import { Box, Typography, TextField, Button, IconButton, InputAdornment, Divider } from "@mui/material";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import { useGoogleLogin } from '@react-oauth/google';

const RegisterForm = () => {
    //State variables for form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    //State variable for form errors
    const [errors, setErrors] = useState({});

    //Google OAuth login
    const registerWithGoogle = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse);
        },
        onError: () => {
            console.log('Google Login Failed');
        },
    });

    //Form validation logic
    const handleRegister = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Name
        if (name.trim().length === 0) {
            newErrors.name = "Name is required";
        } else if (name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters long";
        }

        // Email
        if (email.trim().length === 0) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Invalid email format";
        }

        // Phone
        if (phone.trim().length === 0) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(phone)) {
            newErrors.phone = "Phone number must be 10 digits";
        }

        // Password
        if (password.trim().length === 0) {
            newErrors.password = "Password is required";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long";
        } else if (!/[A-Z]/.test(password)) {
            newErrors.password = "Password must contain at least one uppercase letter";
        } else if (!/[a-z]/.test(password)) {
            newErrors.password = "Password must contain at least one lowercase letter";
        } else if (!/[0-9]/.test(password)) {
            newErrors.password = "Password must contain at least one number";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            newErrors.password = "Password must contain at least one special character";
        }

        // Confirm password
        if (confirmPassword.trim().length === 0) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        // Stop here if any errors
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // ✅ All valid — call your API
        console.log({ name, email, phone, password });
    };

    // Clear specific field error when user changes the input
    const clearError = (field) => {
        setErrors((prevError) => ({ ...prevError, [field]: undefined }))
    }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                borderRadius: '16px',
                padding: { xs: 3, sm: 4 },
                width: '100%',
                maxWidth: 400,
                mx: 'auto',
                backgroundColor: '#FFFFFF',
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, textAlign: 'center', color: '#1E1B4B' }}>
                Create account
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center', mb: 2, mt: 1 }}>
                Already have an account? <a href="/login" sx={{ color: 'blue' }}>Login</a>
            </Typography>

            <TextField label="Name" size="small" fullWidth sx={{ color: '#9CA3AF' }} value={name} onChange={(e) => { setName(e.target.value); clearError('name'); }} error={!!errors.name} helperText={errors.name || " "} />
            <TextField label="Email" type="email" name="email" size="small" fullWidth sx={{ color: '#9CA3AF' }} value={email} onChange={(e) => { setEmail(e.target.value); clearError('email'); }} error={!!errors.email} helperText={errors.email || " "} />
            <TextField label="Phone number" type="tel" size="small" sx={{ color: '#9CA3AF' }} fullWidth value={phone} onChange={(e) => { setPhone(e.target.value.replace(/\D/g, '')); clearError('phone'); }} error={!!errors.phone} helperText={errors.phone || " "} />

            <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                size="small"
                fullWidth
                value={password}
                onChange={(e) => { setPassword(e.target.value); clearError('password'); }}
                error={!!errors.password}
                helperText={errors.password || " "}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end" size="small">
                                    {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />

            <TextField
                label="Confirm password"
                type={showConfirmPassword ? 'text' : 'password'}
                size="small"
                fullWidth
                value={confirmPassword}
                onChange={(e) => { setConfirmPassword(e.target.value); clearError('confirmPassword'); }}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword || " "}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowConfirmPassword((prev) => !prev)} edge="end" size="small">
                                    {showConfirmPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />

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
                onClick={handleRegister}
            >
                Register
            </Button>

            <Divider sx={{ my: 0.5 }}>
                <Typography variant="body2" sx={{ color: '#9CA3AF' }}>or</Typography>
            </Divider>

            <Button
                variant="outlined"
                fullWidth
                startIcon={<GoogleIcon />}
                onClick={registerWithGoogle}
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
    );
};

export default RegisterForm;