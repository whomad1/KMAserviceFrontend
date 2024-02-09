import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import logo from "../static/images/thumb.png";
function AboutPage() {
  return (
    <>
      <Navbar profilePic={logo} />
      <Typography sx={{ position: "absolute", top: "50%", left: "50%" }}>
        About Page
      </Typography>
    </>
  );
}
export default AboutPage;
