import { Box, Grid, Typography, Divider } from "@mui/material";
import Navbar from "../components/Navbar";
import logo from "../static/images/thumb100x100.jpg";
import { Item } from "../components/gridItem";
import { useEffect, useState, useLayoutEffect } from "react";
import TournamentsPage from "./TournamentsPage";
const games = ["CS2", "DOTA2", "Valorant", "gdfjs"];

const tourn = {
  name: "tourn1",
  description: "simpleDesc",
  game: "CS2",
  prize: 2143,
  start_date: "2024-01-17",
  end_date: "2024-02-17",
  team_format: 3,
  teams_count: 5,
};

function MainPage() {
  const [tournamentsIds, setTournamentsIds] = useState([]);
  const [tournaments, setTournaments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    return () => {
      ignore = true;
    };
  }, []);
  return (
    <>
      <Navbar profilePic={logo} />
      <Box
        m=".5rem"
        p=".5rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
      >
        <Typography textAlign="center" variant="h3" margin="1rem">
          Игры
        </Typography>
        <Grid container spacing={1} justifyContent="center" maxWidth="1440px">
          {games.map((game) => {
            return (
              <Grid key={game} item xs={6} md={4}>
                <Item>
                  <Typography variant="h5">{game}</Typography>
                </Item>
              </Grid>
            );
          })}
        </Grid>

        <Typography textAlign="center" variant="h3" margin="1rem">
          <Divider variant="middle" aria-hidden="true">
            Турниры
          </Divider>
        </Typography>
        <TournamentsPage isWidget={true} />
      </Box>
    </>
  );
}
export default MainPage;
