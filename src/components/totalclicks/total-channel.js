import { Box, Card, CardContent, Grid } from "@mui/material";
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import imageTwo from "../../components/images/clicksbychannel.png";

export const TotalChannels = (props) => (
  <Card sx={{ height: "100%", width: "100opx" }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <img src={imageTwo} alt="Logo" width="1030px" height="500px" />
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 0,
          display: "flex",
          alignItems: "center",
        }}
      ></Box>
    </CardContent>
  </Card>
);
