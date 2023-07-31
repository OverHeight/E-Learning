import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";

export default function BasicTable() {
  return (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="border-e-2 w-3/12" align="center">
              <span className="font-semibold">Assignment Status</span>
            </TableCell>
            <TableCell className="w-9/12"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-e-2 w-3/12" align="center">
              <span className="font-semibold">Grading Status</span>
            </TableCell>
            <TableCell className="w-9/12"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-e-2 w-3/12" align="center">
              <span className="font-semibold">Time Remaining</span>
            </TableCell>
            <TableCell className="w-9/12"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-e-2 w-3/12" align="center">
              <span className="font-semibold">Assignment File</span>
            </TableCell>
            <TableCell className="w-9/12"></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
