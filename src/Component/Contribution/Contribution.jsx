import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DarkTheme } from '../../App';
import './Contribution.css'
const Contribution = () => {
  const transactions = [
    { time: '2023-04-13 10:30 AM', donor: 'John Doe', amount: 100, signature: '0x1234567890abcdef' },
    { time: '2023-04-12 03:15 PM', donor: 'Jane Smith', amount: 75, signature: '0xfedcba0987654321' },
    { time: '2023-04-11 11:45 AM', donor: 'Bob Johnson', amount: 50, signature: '0x9876543210abcdef' },
  ];

  const darkModeData = useContext(DarkTheme);

  const containerStyle = darkModeData.darkMode ? { color: 'white', backgroundColor: 'black' } : {};
  const tableStyle = darkModeData.darkMode ? { backgroundColor: '#424242' } : {};
  const headCellStyle = darkModeData.darkMode ? { color: 'white', backgroundColor: '#616161' } : {};
  const bodyCellStyle = darkModeData.darkMode ? { color: 'white' } : {};

  return (
    <div className='ContributionContainer' style={containerStyle}>
      <h1>Transaction History</h1>
      <TableContainer component={Paper} style={tableStyle}>
        <Table sx={{ minWidth: 650 }} aria-label="transaction history table">
          <TableHead>
            <TableRow>
              <TableCell style={headCellStyle}>Time</TableCell>
              <TableCell style={headCellStyle}>Donor</TableCell>
              <TableCell style={headCellStyle}>Amount</TableCell>
              <TableCell style={headCellStyle}>Signature</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell style={bodyCellStyle}>{row.time}</TableCell>
                <TableCell style={bodyCellStyle}>{row.donor}</TableCell>
                <TableCell style={bodyCellStyle}>{row.amount}</TableCell>
                <TableCell style={bodyCellStyle}>{row.signature}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contribution;