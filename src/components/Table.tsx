import * as React from 'react';
import {Table as MaterialTable} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Table(props: any) {
    const { width = '78px', row } = props
  return (
    <TableContainer className='tableContainer'>
      <MaterialTable sx={{width: width,padding: '15px',borderRadius: '10px', background: '#E6E1E6'}}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {row.map((r: string,i: number) =>(
                <TableRow key={i}>
                    <TableCell align="center">{r}</TableCell>
                </TableRow>
            ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
}