import { useQuery } from 'react-query';

async function fetchData(path: string) {
  const response = await fetch(`/api/${path}`);
  if (!response.ok) {
    throw new Error('Hubo un error');
  }
  return response.json();
}

export function useData(props: any) {
  return useQuery('data', () => fetchData(props.path));
}
