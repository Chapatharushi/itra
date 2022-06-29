import { Box, Card, CardContent, Grid } from "@mui/material";
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import imageCity from "../../components/images/city.png";

export const City = (props) => (
  <Card sx={{ height: "450px", width: "100opx" }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <img src={imageCity} alt="Logo" width="480px" height="400px" />
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
