import * as React from 'react';
import {Card as MaterialCard} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Card(props: any) {
    const { 
        title,
        clients,
        totalSales,
        totalAmount,
        acc,
        f01,
        f10,
        f20,
    } = props;

    return (
        <MaterialCard className='card'>
        <CardContent>
            <Typography sx={{textAlign: 'center', marginBottom: '8px'}} fontWeight="fontWeightMedium">{title}</Typography>
            <div style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Clientes</Typography>
                <Typography>{clients}</Typography>
            </div>
            <div style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Ventas Totales</Typography>
                <Typography>{totalSales}</Typography>
            </div>
            <div style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Monto Total</Typography>
                <Typography>${totalAmount}</Typography>
            </div>
            <div style={{marginBottom: '8px'}}>
                <Typography fontWeight="fontWeightMedium" >Cashback</Typography>
            </div>
            <div style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Acumulado</Typography>
                <Typography>${acc}</Typography>
            </div>
            <div style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Facturado 01/11</Typography>
                <Typography>${f01}</Typography>
            </div>
            <div style={{marginBottom: '8px', display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Facturado 10/11</Typography>
                <Typography>${f10}</Typography>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Facturado 20/11</Typography>
                <Typography>${f20}</Typography>
            </div>
        </CardContent>
        </MaterialCard>
    );
}