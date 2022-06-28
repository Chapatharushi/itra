import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SeverityPill } from "../severity-pill";

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

  // {
  //   id: uuid(),
  //   ref: 'Campaign002',
  //   desc: {
  //     name: 'Sample Description'
  //   },
  //   createdBy: 'User002',
  //   createdAt: 1555016400000,
  //   status: 'delivered'
  // },
  // {
  //   id: uuid(),
  //   ref: 'Campaign003',
  //   desc: {
  //     name: 'Sample Description'
  //   },
  //   createdBy: 'User003',
  //   createdAt: 1555016400000,
  //   status: 'pending'
  // },
  // {
  //   id: uuid(),
  //   ref: 'Campaign004',
  //   desc: {
  //     name: 'Sample Description'
  //   },
  //   createdBy: 'User004',
  //   createdAt: 1555016400000,
  //   status: 'pending'
  // },
  // {
  //   id: uuid(),
  //   ref: 'Campaign005',
  //   desc: {
  //     name: 'Sample Description'
  //   },
  //   createdBy: 'User005',
  //   createdAt: 1555016400000,
  //   status: 'refunded'
  // },
  // {
  //   id: uuid(),
  //   ref: 'Campaign006',
  //   desc: {
  //     name: 'Sample Description'
  //   },
  //   createdBy: 'User001',
  //   createdAt: 1555016400000,
  //   status: 'delivered'
  // }
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
