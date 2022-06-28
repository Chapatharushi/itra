// import React from "react";
// import { Grid } from "@mui/material";
// import { LatestOrders } from "../../components/dashboard/anlytics";
// import { DashboardLayout } from "../../components/dashboard-layout";
// import { Description } from "../../components/dashboard/description";

// function Analytics() {
//   return (
//     <div>
//       <label>Long URL :</label>
//       <input
//         type="text"
//         class="form-control rounded"
//         defaultValue="https://www.figma.com/proto/YsIqFtpYdscTGy2it1o1O6"
//         style={{
//           backgroundColor: "transparent",
//           color: "gray",
//           display: "inline",

//         }}
//       />
//       <label>Campaign Name : </label>
//       <input
//         type="text"
//         class="form-control rounded"
//         defaultValue="Chapa Tharushi"
//         style={{
//           backgroundColor: "transparent",
//           color: "gray",
//           display: "inline",
//         }}
//       />
//       <label>Campaign Description : </label>
//       <input
//         type="text"
//         class="form-control rounded"
//         defaultValue="Sample Description"
//         style={{
//           backgroundColor: "transparent",
//           color: "gray",
//           display: "inline",
//         }}
//       />
//       <label>Campaign Tags : </label>
//       <input
//         type="text"
//         class="form-control rounded"
//         defaultValue="IFS, NEW, TEST"
//         style={{
//           backgroundColor: "transparent",
//           color: "gray",
//           display: "inline",
//         }}
//       />
//       <br></br>
//       <br></br>
//       <Grid item lg={8} md={12} xl={9} xs={12}>
//         <LatestOrders />
//       </Grid>
//       <br></br>
//       {/* <Grid item lg={8} md={12} xl={9} xs={12}>
//         <Description />
//       </Grid> */}
//     </div>
//   );
// }

// Analytics.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;


import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { LongUrl } from "../../components/dashboard/longUrl";
import { CampaignDescription } from "../../components/dashboard/campaign-description";
import { CampaignName } from "../../components/dashboard/campaign-name";
import { CampaignTags } from "../../components/dashboard/campaign-tags";
import { DashboardLayout } from "../../components/dashboard-layout";
import { LatestOrders } from "../../components/dashboard/anlytics-table";
import { TotalCampaignCount } from "../../components/dashboard/totalCC";
import { TotalCustomers } from "../../components/dashboard/total-customers";

function Analytics() {
  return (
    <div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 5,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <LongUrl />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <CampaignName />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <CampaignDescription />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <CampaignTags />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <br></br>
      <Grid item lg={8} md={12} xl={9} xs={12}>
        <LatestOrders />
      </Grid>
      <br></br>
      <label>
        <b>Public URL of the report</b>
      </label>
      <br></br>
      <br></br>
      <br></br>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
        <TotalCampaignCount />
      </Grid>
      <br></br>
      <br></br>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
        <TotalCampaignCount />
      </Grid>
      <br></br>
      <br></br>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
        <TotalCampaignCount />
      </Grid>
      <br></br>
      <br></br>

      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalCustomers />
          </Grid>
        </Grid>
      </Container>
      <br></br>
      <br></br>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalCustomers />
          </Grid>
        </Grid>
      </Container>
      <br></br>
      <br></br>
    </div>
  );
}

Analytics.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Analytics;
