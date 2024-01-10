import '../styles/globals.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app'
import { AppProvider } from "../contexts/AppContext";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from '../components/Navbar';
import ReactGA from 'react-ga';

const GA_TRACKING_ID = 'G-YTC0521S84';
const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: '#644BBA',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
});

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID);
    const handleRouteChange = (url: string) => {
      ReactGA.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Navbar/>
          <Component {...pageProps} />
        </AppProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  </ThemeProvider>
}
