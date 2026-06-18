import LoginFormView from "../Components/LoginFormView";
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
        flexDirection: {xs: 'column', sm: 'row'},
        gap: 4,
        py: 5.2,
        background: "linear-gradient(160deg, #4338CA 0%, #3730A3 60%, #312E81 100%)"
      }}>
        <InfoPanel />
        <LoginFormView />
      </Box>
    </Box>
  )
};

export default Login;