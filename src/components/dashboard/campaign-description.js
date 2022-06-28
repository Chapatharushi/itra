import { Box, Card, CardContent, Grid } from "@mui/material";

export const CampaignDescription = (props) => (
  <Card sx={{ height: "100%", width: "100opx" }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <label>
            <b>Campaign Description :</b>
          </label>
          <input
            type="text"
            class="form-control rounded"
            defaultValue="Sample Description"
            style={{
              backgroundColor: "transparent",
              color: "#D3D3D3",
              display: "inline",
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
