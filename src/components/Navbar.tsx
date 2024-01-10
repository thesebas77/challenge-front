import * as React from 'react';
import { useRouter } from 'next/router';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography } from '@mui/material';

export default function Navbar() {
    const [active, setActive] = React.useState(false);

    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
    }

    return (
        <nav className='navbar'>
            <div style={{width: '323px'}} />
            <div className='navbarButtons'>
                <button 
                    onClick={() => navigateTo('/')}
                    style={
                        router.pathname === '/' 
                            ? {textAlign:'center', width: '117px',height: '40px',padding: '10px, 24px, 10px, 24px', background: 'var(--color-primary)', borderRadius: '50px', boxShadow: 'none', border:'none', color: '#FFFFFF'}
                            : {cursor: 'pointer',background: 'transparent',textAlign:'center',height: '40px',padding: '10px, 24px, 10px, 24px', boxShadow: 'none', border:'none', color: 'var(--color-primary)'}
                    }
                >
                    Dashboard
                </button>
                <button 
                    onClick={() => navigateTo('/clientes')}
                    style={
                        router.pathname === '/clientes' 
                            ? {textAlign:'center', width: '117px',height: '40px',padding: '10px, 24px, 10px, 24px', background: 'var(--color-primary)', borderRadius: '50px', boxShadow: 'none', border:'none', color: '#FFFFFF'}
                            : {cursor: 'pointer',background: 'transparent',textAlign:'center',height: '40px',padding: '10px, 24px, 10px, 24px', boxShadow: 'none', border:'none', color: 'var(--color-primary)'}
                    }
                >
                    Clientes
                </button>
                <button 
                    onClick={() => navigateTo('/reglas-de-acumulacion')}
                    style={
                        router.pathname === '/reglas-de-acumulacion' 
                            ? {textAlign:'center',height: '40px',padding: '10px, 24px, 10px, 24px', background: 'var(--color-primary)', borderRadius: '50px', boxShadow: 'none', border:'none', color: '#FFFFFF'}
                            : {cursor: 'pointer',background: 'transparent',textAlign:'center',height: '40px',padding: '10px, 24px, 10px, 24px', boxShadow: 'none', border:'none', color: 'var(--color-primary)'}
                    }
                >
                    Reglas de acumulación
                </button>
            </div>
            <div style={{width: '323px', gap: '5px'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Typography>Pamela Rojas Gonzalez</Typography>
                    <KeyboardArrowDownIcon style={{cursor: 'pointer'}} onClick={() => setActive(true)}/>
                </div>
            </div>
        </nav>
    )
}