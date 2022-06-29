import React from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import MaterialTable from "material-table";
import { Button, Grid } from "@mui/material";
import { forwardRef } from 'react';
import ChevronRight from "@material-ui/icons/ChevronRight";
import Remove from "@material-ui/icons/Remove";
import Delete from '@material-ui/icons/Delete';

function getNameProperly(value) {
  if (value instanceof Date) {
    return moment(value).format("ll");
  } else {
    return value;
  }
}
function DataTable(campaigns) {
  const useStyles = makeStyles((theme) => ({
    bgBlue: {
      backgroundColor: "#F8F8F8 !important",
      boxShadow: "unset !important",
    },
    defaultBtnTwo: {
      color: "#fff !important",
      letterSpacing: "2px !important",
      width: "150px !important",
      fontSize: "0.8rem !important",
      fontWeight: "bold !important",
      fontFamily: "'Roboto', sans-serif !important",
      display: "block !important",
      margin: "auto !important",
      padding: "10px 20px !important",
      borderRadius: "50px !important",
      border: "1px solid black !important",
      backgroundColor: "black !important",
      "&:hover": {
        backgroundColor: "black !important",
        color: "#fff !important",
      },
    },
    defaultBtnDelete: {
      color: "#fff !important",
      letterSpacing: "2px !important",
      width: "150px !important",
      fontSize: "0.8rem !important",
      fontWeight: "bold !important",
      fontFamily: "'Roboto', sans-serif !important",
      display: "block !important",
      marginTop: "-125px",
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

  function tagStyle(allTags) {
    if (allTags) {
      const sepTags = allTags.split(",");
      let letters = sepTags.map(
        (tag) => "<button class='btn btn-info btn-sm'>" + tag + "</button>"
      );
      return letters.join("");
    }
    return "";
  }

  const columns = [
    {
      field: "title",
      headerName: <b>Title</b>,
      width: 150,
    },
    {
      field: "shortUrl",
      headerName: <b>Short URL</b>,
      width: 250,
    },

    {
      field: "copy",
      headerName: <b>Copy</b>,
      width: 150,
      renderCell: (params) => (
        <div
          dangerouslySetInnerHTML={{
            __html: tagStyle(params.row.copy),
          }}
        />
      ),
    },
    {
      field: "qr",
      headerName: <b>QR</b>,
      width: 150,
      renderCell: (params) => (
        <div
          dangerouslySetInnerHTML={{
            __html: tagStyle(params.row.qr),
          }}
        />
      ),
    },
    {
      field: "delete",
      headerName: <b>Delete</b>,
      width: 150,
      renderCell: (params) => (
        <div
          dangerouslySetInnerHTML={{
            __html: tagStyle(params.row.delete),
          }}
        />
      ),
    },
    {
      field: "viewMore",
      headerName: <b>View More</b>,
      width: 150,
      renderCell: (params) => (
        <div
          dangerouslySetInnerHTML={{
            __html: tagStyle(params.row.viewMore),
          }}
        />
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      title: "General",
      shortUrl: "https://itr.ac/ZXLr3O6na",
      copy: "COPY",
      qr: "QR",
      delete: "DELETE",
      viewMore: ">",
    },
    {
      id: 2,
      title: "Facebook",
      shortUrl: "https://itr.ac/ZXLr3O6nb",
      copy: "COPY",
      qr: "QR",
      delete: "DELETE",
      viewMore: ">",
    },
    {
      id: 3,
      title: "Instagram",
      shortUrl: "https://itr.ac/ZXLr3O6nc",
      copy: "COPY",
      qr: "QR",
      delete: "DELETE",
      viewMore: ">",
      
    },
    {
      id: 4,
      title: "YouTube",
      shortUrl: "https://itr.ac/ZXLr3O6nd",
      copy: "COPY",
      qr: "QR",
      delete: "DELETE",
      viewMore: ">",
    },
    {
      id: 5,
      title: "LinkedIn",
      shortUrl: "https://itr.ac/ZXLr3O6ne",
      copy: "COPY",
      qr: "QR",
      delete: "DELETE",
      viewMore: ">",
    },
    {
      id: 6,
      title: "Pinterest",
      shortUrl: "https://itr.ac/ZXLr3O6nf",
      copy: "COPY",
      qr: "QR",
      delete: "DELETE",
      viewMore: ">",
    },
    {
      id: 7,
      title: "Twitter",
      shortUrl: "https://itr.ac/ZXLr3O6ng",
      copy: "COPY",
      qr: "QR",
      delete: "DELETE",
      viewMore: ">",
    },
    {
      id: 8,
      title: "Tumblr",
      shortUrl: "https://itr.ac/ZXLr3O6nh",
      copy: "COPY",
      qr: "QR",
      delete: "DELETE",
      viewMore: ">",
    },
    {
      id: 9,
      title: "Snapchat",
      shortUrl: "https://itr.ac/ZXLr3O6ni",
      copy: "COPY",
      qr: "QR",
      delete: "DELETE",
      viewMore: ">",
    },
    {
      id: 10,
      title: "TikTok",
      shortUrl: "https://itr.ac/ZXLr3O6nj",
      copy: "COPY",
      qr: "QR",
      delete: "DELETE",
      viewMore: ">",
    },
  ];
  // const tableIcons = {
  //   DetailPanel: forwardRef((props, ref) => (
  //     <ChevronRight {...props} ref={ref} />
  //   )),
  //   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  //   ThirdStateCheck: forwardRef((props, ref) => (
  //     <Remove {...props} ref={ref} />
  //   )),
  // };

  // const columns = [ ... ];

    // Material Table Columns Rows
    // const data = [ ... ]

    // const tableRef = React.createRef();


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <SecondaryHeader /> */}
      <main className={classes.mainTwo}>
        <Container maxWidth="xl">
          <Box sx={{ height: "60vh", width: "102%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={7}
              rowsPerPageOptions={[5]}
              // checkboxSelection
              disableSelectionOnClick
              // icons={tableIcons}
              // tableRef={tableRef}
              // // data={data}
              // actions={[
                
              //   {
              //     icon: Delete,
              //     tooltip: 'Delete User',
              //     onClick: (event, rowData) => console.log("You want to delete ",rowData)
              //   }
              // ]}
            />
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default DataTable;
