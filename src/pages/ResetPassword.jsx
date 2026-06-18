import ResetPasswordForm from "../components/ResetPasswordForm";
import Header from "../components/Header";
import { Box } from "@mui/material";

const ResetPassword = () =>{
    return(
        <Box
        sx={{
            display: "flex",
            flexDirection: 'column',
            height: '100vh'
        }}>
            <Header />
            <ResetPasswordForm />
        </Box>
    )
}

export default ResetPassword;