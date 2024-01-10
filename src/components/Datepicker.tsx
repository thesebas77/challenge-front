import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import {DatePicker} from '@mui/x-date-pickers';

export default function Datepicker() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
  return (
    <DatePicker
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            textAlign: 'center',
            borderRadius: '8%',
            backgroundColor: '#E7DFF8',
            width: '160px',
            '& .MuiInputAdornment-positionEnd': {
              position: 'absolute',
              right: '85%',
            },
            '& .MuiSvgIcon-root': {
              color: 'var(--color-primary)'
            },
            '& .MuiInputBase-input': {
              marginLeft: '2rem'
            }
          }}
        />
      )}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    />
  );
}