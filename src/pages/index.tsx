import React from 'react';
import Head from 'next/head'
// import Table from '../components/Table';
import CardPulse from '../components/CardPulse';
// import Datepicker from '../components/Datepicker';
import Grafic from '../components/Grafic';
import Chips from '../components/Chips';
import Navchip from '../components/Navchip';
import CheckIcon from '@mui/icons-material/Check';
import { AppContext } from '../contexts/AppContext';

type OptionKeys = {option: string, subOption: string, homeOption: string}


export default function Home() {

  const { filterChip, setFilterChip, data, isLoading, chartData, chartOptions } = React.useContext(AppContext) as {
    filterChip: OptionKeys;
    setFilterChip: any;
    data: any;
    isLoading: boolean;
    chartData: any;
    chartOptions: any;
  };

  const first = [
    'Title',
    '00',
    '00',
    '00',
    '00',
    '00',
    '00',
    'Title'
]

  if( isLoading ) { return 'Cargando... '}

  return (
    <>
      <Head>
        <title>PuntosPoints | Challenge</title>
        <meta name="description" content="Desafío de PuntosPoints" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{padding: '35px, 0px, 0px, 0px', display: 'flex', justifyContent:'center', gap: '25px', marginTop: '64px'}}>
        <section style={{width: '1042px'}}>
          <Navchip/>
          <article style={{display: 'flex', justifyContent: 'space-between', marginTop: '80px'}}>
            <div style={{display: 'flex', gap: '5px'}}>
              <Chips 
                title="Clientes"
                sx={filterChip.homeOption === 'clientes' ? {background: 'var(--color-primary-chip-active)', border:'none'} : null} 
                icon={filterChip.homeOption === 'clientes' ? <CheckIcon fontSize='small'/> : null}
                onClick={() => setFilterChip({...filterChip, homeOption: 'clientes'})}
              />
              <Chips 
                title="Transacciones"
                sx={filterChip.homeOption === 'transacciones' ? {background: 'var(--color-primary-chip-active)', border:'none'} : null}
                icon={filterChip.homeOption === 'transacciones' ? <CheckIcon fontSize='small'/> : null}
                onClick={() => setFilterChip({...filterChip, homeOption: 'transacciones'})}
              />
            </div>
            <div style={{display: 'flex', gap: '5px'}}>
              <Chips 
                title="Dinero"
                sx={filterChip.homeOption === 'dinero' ? {background: 'var(--color-primary-chip-active)', border:'none'} : null} 
                icon={filterChip.homeOption === 'dinero' ? <CheckIcon fontSize='small'/> : null}
                onClick={() => setFilterChip({...filterChip, homeOption: 'dinero'})}
              />
              <Chips 
                title="Cashback"
                sx={filterChip.homeOption === 'cashback' ? {background: 'var(--color-primary-chip-active)', border:'none'} : null} 
                icon={filterChip.homeOption === 'cashback' ? <CheckIcon fontSize='small'/> : null}
                onClick={() => setFilterChip({...filterChip, homeOption: 'cashback'})}
              />
            </div>
          </article>
          <article style={{marginTop: '40px'}}>
            <Grafic data={chartData} options={chartOptions}/>
            {/* <Table row={first} /> */}
          </article>
        </section>
        <CardPulse data={data} />
        {/* <Datepicker/> */}
      </main>
    </>
  )
}
