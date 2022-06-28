import { Box, Card, CardContent, Grid } from "@mui/material";

export const TotalCampaignCount = (props) => (
  <Card sx={{ height: "200%" }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
    
      </Grid> 
      <Box
        sx={{
          pt: 2,
          display: "flex",
          alignItems: "center",
        }}
      ></Box>
    </CardContent>
  </Card>
);
