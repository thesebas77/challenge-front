import * as React from 'react';
import { Button as MaterialButton } from '@mui/material';

export default function Button(props: any) {
  const { variant } = props;

  if(variant === 'filled') return <FilledButton {...props} />
  if(variant === 'outlined') return <OutlinedButton {...props} />
  if(variant === 'text') return <TextButton {...props} />
}

function FilledButton(props: any){
  return <MaterialButton className="btn-primary-filled"  {...props} variant='contained' disableRipple>{props.name}</MaterialButton>;
}

function OutlinedButton(props: any){
  return <MaterialButton className="btn-primary-outlined" {...props} variant='outlined' disableRipple>{props.name}</MaterialButton>;
}

function TextButton(props: any){
  return <MaterialButton className="btn-primary-text" {...props} variant='text' disableRipple>{props.name}</MaterialButton>;
}