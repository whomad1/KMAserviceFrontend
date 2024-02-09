import { Box, Typography, Divider } from "@mui/material";

// 'name': tournament.name,
//         'description': tournament.description,
//         'game': tournament.game,
//         'prize': tournament.prize,
//         'start_date': str(tournament.start_date),
//         'end_date': str(tournament.end_date),
//         'team_format': tournament.team_format,
//         'teams_count': tournament.teams_count

function TournamentWidget({
  name,
  game,
  prize,
  start_date,
  end_date,
  team_format,
  teams_count,
}) {
  return (
    <Box sx={{ p: "1rem", m: ".5rem", border: "1px", borderRadius: "3px" }}>
      <Typography variant="h5">Турнир {name}</Typography>
      <Typography>Игра {game}</Typography>
      <Typography>Приз: {prize}</Typography>
      <Typography>
        {start_date} - {end_date}
      </Typography>
      <Typography>Формат команды {team_format}</Typography>
      <Typography>Зарегистрированные команды {teams_count}</Typography>
    </Box>
  );
}

export default TournamentWidget;
