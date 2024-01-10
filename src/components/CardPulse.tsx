import * as React from 'react';
import Card from './Card'
import Switch from './Switch'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


type CardProps = {
    data: {
      title: string;
      clients: number;
      totalSales: number;
      totalAmount: number;
      acc: number;
      f01: number;
      f10: number;
      f20: number;
    }[];
  };

export default function CardPulse(props: CardProps) {
    const [active, setActive] = React.useState(false);

    return (
        <aside className='cardPulse'>
            <div style={{marginBottom: '15px',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Switch/>
                {active === false 
                    ? <KeyboardArrowUpIcon style={{cursor: 'pointer'}} fontSize='large' onClick={() => setActive(true)}/>
                    : <KeyboardArrowDownIcon style={{cursor: 'pointer'}} fontSize='large' onClick={() => setActive(false)}/>
                }
            </div>
            {props.data.map((d,i) => (
                <div key={i} style={{marginBottom: active === false ? '15px' : '-162px', position: 'relative'}}>
                    <Card 
                        title={d.title}
                        clients={d.clients}
                        totalSales={d.totalSales}
                        totalAmount={d.totalAmount}
                        acc={d.acc}
                        f01={d.f01}
                        f10={d.f10}
                        f20={d.f20}                    
                    />
                </div>
            ))}
        </aside>
    );
}