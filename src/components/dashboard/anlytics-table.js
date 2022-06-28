import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import { SeverityPill } from "../severity-pill";

const orders = [
  {
    id: uuid(),
    ref: "General",
    desc: {
      name: "https://itr.ac/74l9tKX1a",
    },
    delete: "",
    viewmore: "",
    qr: "",
    copy: "COPY",
  },
  {
    id: uuid(),
    ref: "General",
    desc: {
      name: "https://itr.ac/74l9tKX1b",
    },
    delete: "",
    viewmore: "",
    copy: "COPY",
  },
  {
    id: uuid(),
    ref: "General",
    desc: {
      name: "https://itr.ac/74l9tKX1c",
    },
    delete: "",
    viewmore: "",
    copy: "COPY",
  },
  {
    id: uuid(),
    ref: "General",
    desc: {
      name: "https://itr.ac/74l9tKX1d",
    },
    delete: "",
    viewmore: "",
    copy: "COPY",
  },
  {
    id: uuid(),
    ref: "General",
    desc: {
      name: "https://itr.ac/74l9tKX1e",
    },
    delete: "",
    viewmore: "",
    copy: "COPY",
  },
  {
    id: uuid(),
    ref: "General",
    desc: {
      name: "https://itr.ac/74l9tKX1f",
    },
    delete: "",
    viewmore: "",
    copy: "COPY",
  },
];

export const LatestOrders = (props) => (
  <Card {...props}>
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Short URL</TableCell>
              <TableCell>Copy</TableCell>
              <TableCell>QR</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>View More</TableCell>
              {/* <TableCell>
              <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Created At
                  </TableSortLabel>
                </Tooltip>
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell>{order.ref}</TableCell>
                <TableCell>{order.desc.name}</TableCell>
                <TableCell>{order.copy}</TableCell>
                <TableCell>{order.qr}</TableCell>
                <TableCell>{order.delete}</TableCell>
                <TableCell>{order.viewmore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
