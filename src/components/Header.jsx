import { Typography, Box } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Header = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                padding: '16px 24px',
                borderBottom: '1px solid #E5E7EB',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        >
            <AccountBalanceWalletIcon sx={{ color: '#4338CA', fontSize: 30 }} />
            <Typography
                sx={{
                    color: '#4338CA',
                    fontWeight: 700,
                    fontFamily: 'Inter',
                    letterSpacing: '0.25px',
                }}
                variant="h5"
            >
                Expense Tracker
            </Typography>
        </Box>
    )
}

export default Header;