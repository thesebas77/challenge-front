import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Chips(props: any) {
  const { title } = props;

  return (
    <Stack direction="row" spacing={1}>
      <Chip className='chips' {...props} variant='outlined' label={title} />
    </Stack>
  );
}