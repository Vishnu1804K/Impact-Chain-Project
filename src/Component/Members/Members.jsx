import React from 'react';
import './Members.css';
import { Leaderboard } from '@mui/icons-material'; // Import the Leaderboard icon
import {IconButton , Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'; // Import Table components from Material-UI

const Members = () => {
  return (
    <div className='MembersConatiner'>
      <div className="Top">
        <div className='MembersHeading'>
          <h1>Members Contributed</h1>
          <IconButton color="primary"> {/* Add IconButton component */}
            <Leaderboard /> Leaderboard
          </IconButton>
        </div>
        <div>
          <ul>
            <li>
              <img src="https://media.domatron.com/media/608/conversions/ai-profile-picture-generator-elw-jpg.jpg" alt="" />
              <h2>Vishnu</h2>
            </li>
            <li>
              <img src="https://media.domatron.com/media/608/conversions/ai-profile-picture-generator-elw-jpg.jpg" alt="" />
              <h2>Vishnu</h2>
            </li>
            <li>
              <img src="https://media.domatron.com/media/608/conversions/ai-profile-picture-generator-elw-jpg.jpg" alt="" />
              <h2>Vishnu</h2>
            </li>
            <li>
              <img src="https://media.domatron.com/media/608/conversions/ai-profile-picture-generator-elw-jpg.jpg" alt="" />
              <h2>Vishnu</h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="Bottom">
        <Table className="custom-table">
          <TableHead className="table-head">
            <TableRow>
              <TableCell className="table-cell">Member Name</TableCell>
              <TableCell className="table-cell">Contribution</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Vishnu</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vishnu</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>5</TableCell>
            </TableRow> <TableRow>
              <TableCell>Vishnu</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>5</TableCell>
            </TableRow> <TableRow>
              <TableCell>Vishnu</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>5</TableCell>
            </TableRow> <TableRow>
              <TableCell>Vishnu</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>5</TableCell>
            </TableRow> <TableRow>
              <TableCell>Vishnu</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>5</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Members;
