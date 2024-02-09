import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import logo from "../static/images/thumb100x100.jpg";
function RatingsPage() {
  return (
    <>
      <Navbar profilePic={logo} />
      <Typography sx={{ position: "absolute", top: "50%", left: "50%" }}>
        Ratings Page
      </Typography>
    </>
  );
}
export default RatingsPage;
