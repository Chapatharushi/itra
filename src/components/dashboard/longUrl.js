import { 
  Box,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import MoneyIcon from "@mui/icons-material/Money";

export const LongUrl = (props) => (
  <Card sx={{ height: "100%", width: "100opx" }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <label>
            <b>Long URL :</b>
          </label>
          <input
            type="text"
            class="form-control rounded"
            defaultValue="https://www.figma.com"
            style={{
              backgroundColor: "transparent",
              color: "gray",
              display: "inline",
            }}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          pt:0,
          display: "flex",
          alignItems: "center",
        }}
      ></Box>
    
    </CardContent>
  </Card>
);
