import Header from "../Components/Header";
import RegisterForm from "../Components/RegisterForm";
import { Box } from "@mui/material";
import InfoPanel from "../Components/InfoPanel";

const RegisterUser = () => {
    return(
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
                py: 5.2,
                background: "linear-gradient(160deg, #4338CA 0%, #3730A3 60%, #312E81 100%)"
            }}>
                <InfoPanel />
                <RegisterForm />
            </Box>
        </Box>
    )
}

export default RegisterUser