import * as React from 'react';
import { AppContext } from '../contexts/AppContext';
import Chips from './Chips';
import Button from './Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

type OptionKeys = {option: 'HOY' | '7D' | 'Este mes' | '6M' | 'YTD / YTG' | '1A' | 'MAX', subOption: string};

export default function Navchip() {
    const { filterChip, setFilterChip } = React.useContext(AppContext) as {
        filterChip: OptionKeys;
        setFilterChip: any;
    };

    const data = [
        'HOY',
        '7D',
        'Este mes',
        '6M',
        'YTD / YTG',
        '1A',
        'MAX'
    ]
    const options = {
        'HOY': [''],
        '7D': ['Todo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'],
        'Este mes': [''],
        '6M': ['Enero','Febrero','Marzo','Abril','Mayo','Junio'],
        'YTD / YTG': [''],
        '1A': ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        'MAX': ['']
    }

    return(
        <article style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', gap: '5px', flexDirection: 'column'}}>
                <div style={{display: 'flex', gap: '5px'}}>
                    {data.map((d,i) => <Chips 
                        key={i} 
                        sx={{border: 'none', background: filterChip.option === d ? 'var(--color-primary-chip-active)' : null}} 
                        title={d} 
                        onClick={() => setFilterChip({...filterChip, option: d})}
                    />)}
                </div>
                <div style={{display: 'flex', position: 'absolute', marginTop: '60px'}}>
                    {options[filterChip.option].map((option: string,i: number) => option 
                        ? <Chips 
                            key={i} 
                            title={option} 
                            sx={{border: 'none', background: filterChip.subOption === option ? 'var(--color-primary-chip-active)' : null}} 
                            onClick={() => setFilterChip({...filterChip, subOption: option})}
                        /> 
                        : null)
                    }
                </div>
            </div>
            <Button name='Ver detalle' variant='text' startIcon={<RemoveRedEyeIcon />}/>
        </article>
    )
}

