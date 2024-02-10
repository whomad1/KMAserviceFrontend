import { Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import logo from "../static/images/thumb100x100.jpg";
import TournamentWidget from "../components/TournamentWidget";
import { Suspense, useEffect, useRef, useState } from "react";
import { Item } from "../components/gridItem";

function TournamentsPage({ isWidget = false }) {
  const [tournaments, setTournaments] = useState(null);
  useEffect(() => {
    const fetchTournaments = async () => {
      fetch("http://localhost:5000/players/get_tournaments/")
        .then((response) => response.json())
        .then((data) => setTournaments(data));
    };
    fetchTournaments();
  }, []);

  return (
    <>
      {!isWidget && <Navbar profilePic={logo} />}

      <Suspense fallback={<div>loading</div>}>
        <Grid container spacing={2} justifyContent="center">
          {tournaments?.map((tournament, index) => {
            return (
              <Grid key={index} item>
                <Item>
                  <TournamentWidget
                    key={index}
                    name={tournament.name}
                    game={tournament.game}
                    prize={tournament.prize}
                    start_date={tournament.start_date}
                    end_date={tournament.end_date}
                    team_format={tournament.team_format}
                    teams_count={tournament.teams_count}
                  />
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Suspense>
    </>
  );
}
export default TournamentsPage;
