import LoginForm from "../Components/LoginForm";
import Header from "../Components/Header";
import InfoPanel from "../Components/InfoPanel";
import { Box } from "@mui/material";

const Login = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#F3F4F6',
      height: '100vh',
    }}>
      <Header />
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        py: 2.35,
        background: "linear-gradient(160deg, #4338CA 0%, #3730A3 60%, #312E81 100%)"
      }}>
        <InfoPanel />
        <LoginForm />
      </Box>
    </Box>
  )
};

export default Login;