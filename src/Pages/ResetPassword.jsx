import ResetPasswordForm from "../Components/ResetPasswordForm";
import Header from "../Components/Header";
import { Box } from "@mui/material";

const ResetPassword = () =>{
    return(
        <Box
        sx={{
            display: "flex",
            flexDirection: 'column',
        }}>
            <Header />
            <ResetPasswordForm />
        </Box>
    )
}

export default ResetPassword;