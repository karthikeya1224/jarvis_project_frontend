import { Box, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";

const features = [
  { icon: <EditNoteIcon fontSize="small" />, title: "Manual expense & income entry", desc: "Log transactions instantly. Categorize them your way." },
  { icon: <CalendarMonthIcon fontSize="small" />, title: "Monthly & yearly breakdowns", desc: "Visualize spending patterns across any time period." },
  { icon: <PsychologyIcon fontSize="small" />, title: "AI-powered financial guidance", desc: "Personalised suggestions to reduce waste and save more." },
  { icon: <VerifiedUserIcon fontSize="small" />, title: "Safe & private", desc: "Your data is encrypted and never shared with third parties." },
];

const InfoPanel = () => (
  <Box sx={{
    p: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
    position: "relative",
  }}>
    {/* Logo */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 4 }}>
      <Box sx={{ width: 36, height: 36, borderRadius: "10px", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <DonutSmallIcon sx={{ color: "#fff", fontSize: 20 }} />
      </Box>
      <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>Track all your expenses</Typography>
    </Box>

    {/* Headline */}
    <Typography variant="h5" sx={{ color: "#fff", fontWeight: 600, mb: 1.5, lineHeight: 1.35, letterSpacing: "-0.02em" }}>
      Take control of your finances
    </Typography>
    <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.7, mb: 3.5 }}>
      Track every rupee. Get month-wise and year-wise insights — and let AI guide you toward smarter financial decisions.
    </Typography>

    {/* Features */}
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
      {features.map((f) => (
        <Box key={f.title} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
          <Box sx={{ width: 34, height: 34, borderRadius: "9px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "rgba(255,255,255,0.9)", mt: "1px" }}>
            {f.icon}
          </Box>
          <Box>
            <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 13, mb: 0.3 }}>{f.title}</Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: 12, lineHeight: 1.55 }}>{f.desc}</Typography>
          </Box>
        </Box>
      ))}
    </Box>

    {/* Stat badge */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mt: 3, p: "0.9rem 1.1rem", background: "rgba(255,255,255,0.08)", borderRadius: "12px", border: "0.5px solid rgba(255,255,255,0.12)" }}>
      <TrendingUpIcon sx={{ color: "#A5B4FC", fontSize: 20, flexShrink: 0 }} />
      <Box>
        <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em", mb: 0.3 }}>Users report after 3 months</Typography>
        <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>18% more savings · 23% less impulse spending</Typography>
      </Box>
    </Box>
  </Box>
);

export default InfoPanel;