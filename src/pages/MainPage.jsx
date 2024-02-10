import { Box, Grid, Typography, Divider } from "@mui/material";
import Navbar from "../components/Navbar";
import logo from "../static/images/thumb100x100.jpg";
import { Item } from "../components/gridItem";
import { useEffect, useState, useLayoutEffect } from "react";
import TournamentsPage from "./TournamentsPage";
const games = ["CS2", "DOTA2", "Valorant", "StarCraft II"];

function MainPage() {
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
        maxWidth="1440px"
      >
        <Typography textAlign="center" variant="h3" margin="1rem">
          Игры
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {games.map((game) => {
            return (
              <Grid key={game} item>
                <Item>
                  <Typography variant="h5">{game}</Typography>
                </Item>
              </Grid>
            );
          })}
        </Grid>

        <Divider variant="middle" aria-hidden="true">
          <Typography textAlign="center" variant="h3" margin="1rem">
            Турниры
          </Typography>
        </Divider>

        <TournamentsPage isWidget={true} />
      </Box>
    </>
  );
}
export default MainPage;
