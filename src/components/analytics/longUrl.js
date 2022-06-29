import { Box, Card, CardContent, Grid } from "@mui/material";

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
            defaultValue="https://www.figma.com/proto/0GGHsTdsTEtHApWg2aQVpy/ITRA-UI?node-id=68%3A30&scaling=min-zoom&page-id=0%3A1"
            style={{
              backgroundColor: "transparent",
              color: "gray",
              display: "inline",
              width: "1025px",
            }}
          />
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
