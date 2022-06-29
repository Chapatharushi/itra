import React from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core";
import { LongUrl } from "../../components/analytics/longUrl";
import { CampaignDescription } from "../../components/analytics/campaign-description";
import { CampaignName } from "../../components/analytics/campaign-name";
import { CampaignTags } from "../../components/analytics/campaign-tags";
import { DashboardLayout } from "../../components/dashboard-layout";
import { TotalClicks } from "../../components/totalclicks/total-clicks";
import { TotalChannels } from "../../components/totalclicks/total-channel";
import { TotalDates } from "../../components/totalclicks/total-date";
import { Country } from "../../components/totalclicks/country";
import { City } from "../../components/totalclicks/city";
import { Browser } from "../../components/totalclicks/browser";
import { Language } from "../../components/totalclicks/language";
import LatestOrders from "../../components/analytics/dataTable";

function Analytics() {
  const useStyles = makeStyles((theme) => ({
    bgBlue: {
      backgroundColor: "#F8F8F8 !important",
      boxShadow: "unset !important",
    },
    defaultBtnTwo: {
      color: "#fff !important",
      letterSpacing: "2px !important",
      width: "100px !important",
      fontSize: "0.8rem !important",
      fontWeight: "bold !important",
      fontFamily: "'Roboto', sans-serif !important",
      display: "block !important",
      marginRight: "150px",
      float: "right",
      padding: "10px 20px !important",
      borderRadius: "50px !important",
      border: "1px #3397b5 !important",
      backgroundColor: "#3397b5 !important",
      "&:hover": {
        backgroundColor: "#3397b5 !important",
        color: "#fff !important",
      },
    },
    defaultBtnDelete: {
      color: "#fff !important",
      letterSpacing: "2px !important",
      width: "100px !important",
      fontSize: "0.8rem !important",
      fontWeight: "bold !important",
      fontFamily: "'Roboto', sans-serif !important",
      display: "block !important",
      marginTop: "",
      marginLeft: "980px",
      padding: "10px 20px !important",
      borderRadius: "50px !important",
      border: "1px solid red !important",
      backgroundColor: "red !important",
      "&:hover": {
        backgroundColor: "red !important",
        color: "#fff !important",
      },
    },
    a: {
      color: "#fff !important",
      textDecoration: "unset",
    },
    menu: {
      "& .MuiPaper-root": {
        backgroundColor: "#fff",
      },
    },
    thaiTextFieldInputProps: {
      padding: "0",
    },
  }));

  const classes = useStyles();

  const theme = createTheme({
    typography: {
      fontFamily: "'Roboto', sans-serif !important",
    },
  });
  return (
    <div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 1,
        }}
      >
        <Container maxWidth={false}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <LongUrl />
          </Grid>
        </Container>
        <br></br>

        <Container maxWidth={false}>
          <Grid container spacing={6}>
            <Grid item xl={4} lg={3} sm={6} xs={12}>
              <CampaignName />
            </Grid>

            <Grid item xl={4} lg={3} sm={6} xs={12}>
              <CampaignDescription />
            </Grid>

            <Grid item xl={4} lg={3} sm={6} xs={12}>
              <CampaignTags />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <br></br>

      <Grid item sm={3} md={2}>
        <Button variant="contained" className={classes.defaultBtnTwo}>
          SAVE
        </Button>
      </Grid>

      <Grid item sm={3} md={2}>
        <Button variant="contained" className={classes.defaultBtnDelete}>
          Delete
        </Button>
      </Grid>

      <br></br>
      <Container maxWidth={false}>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestOrders />
        </Grid>
      </Container>
      <br></br>

      <Container maxWidth={false}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <label style={{ marginLeft: "10px" }}>
            <b>Public URL of the report</b>
          </label>
          <input
            type="text"
            class="form-control rounded"
            defaultValue="https://itr.ac/public/report/62b571ae0713c918aaed8238"
            style={{
              backgroundColor: "transparent",
              color: "#0000EE",
              display: "inline",
              width: "1060px",
              border: "none",
            }}
          />
        </Grid>
      </Container>
      <br></br>

      <Container maxWidth={false}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalClicks />
        </Grid>
      </Container>
      <br></br>

      <Container maxWidth={false}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalChannels />
        </Grid>
      </Container>
      <br></br>

      <Container maxWidth={false}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalDates />
        </Grid>
      </Container>
      <br></br>
      <Container maxWidth={false}>
        <Grid container spacing={6}>
          <Grid item xl={6} lg={3} sm={6} xs={12}>
            <Country />
          </Grid>
          <Grid item xl={6} lg={3} sm={6} xs={12}>
            <City />
          </Grid>
        </Grid>
      </Container>
      <br></br>
      <Container maxWidth={false}>
        <Grid container spacing={6}>
          <Grid item xl={6} lg={3} sm={6} xs={12}>
            <Browser />
          </Grid>
          <Grid item xl={6} lg={3} sm={6} xs={12}>
            <Language />
          </Grid>
        </Grid>
      </Container>
      <br></br>
    </div>
  );
}

Analytics.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Analytics;
