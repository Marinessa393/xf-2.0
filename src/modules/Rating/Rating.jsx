import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
const Rating = () => {
  return (
          <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Confirmed</TableCell>
            <TableCell align="right">Death</TableCell>
            <TableCell align="right">Recovered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="right">12</TableCell>
              <TableCell align="right">12</TableCell>
              <TableCell align="right">12</TableCell>
              <TableCell align="right">12</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default Rating
