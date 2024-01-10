import { createContext, useState } from "react";
import { useData } from '../hooks/fetchData'

export const AppContext = createContext({});

export const AppProvider = ({ children }: any) => {

    const { data, error, isLoading } = useData({path: 'transactions'});
    const [filterChip, setFilterChip] = useState({option: 'HOY', subOption: '', homeOption: 'clientes'})

    let labelFake: any = {
        'HOY': ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
    }
    let dataFake: any = {
        'HOY': [
            {
              label: 'Clientes totales',
              data: [],
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
            },
            {
              label: 'Clientes nuevos',
              data: [5, 10, 15, 20, 15, 20, 25, 40, 60, 80, 60, 40, 20, 10, 15, 25, 35, 55, 50, 40, 20, 10, 5, 3],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
              label: 'Compraron',
              data: [2, 4, 6, 5, 7, 8, 9, 14, 18, 20, 16, 12, 8, 4, 6, 10, 14, 18, 16, 12, 8, 4, 3, 2],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
            },
            {
              label: 'No compraron',
              data: [],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ]
    }

    const [chartData, setChartData] = useState({
        labels: labelFake[filterChip.option],
        datasets: dataFake[filterChip.option]
      });      
    
      const chartOptions = {
        responsive: true,
        scales: {
          x: {},
          y: {}
        },
        plugins: {
          legend: {
            position: 'bottom',
          },
        }
      };
   
    const contextValue = {
        filterChip, 
        setFilterChip, 
        chartData,
        chartOptions,
        data,
        error,
        isLoading
    }

    return (
        <AppContext.Provider 
            value={contextValue}
        >
            {children}
        </AppContext.Provider>
    );
};

