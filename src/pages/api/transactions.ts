// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const data = [{
    title: 'Octubre',
    clients: 5,
    totalSales: 3,
    totalAmount: 100,
    acc: 20,
    f01: 40,
    f10: 30,
    f20: 30
  },{
    title: 'Noviembre',
    clients: 30,
    totalSales: 60,
    totalAmount: 12000,
    acc: 220,
    f01: 3500,
    f10: 5000,
    f20: 3300
  },{
    title: 'Diciembre',
    clients: 1,
    totalSales: 1,
    totalAmount: 1000,
    acc: 100,
    f01: 0,
    f10: 0,
    f20: 1000
  }]

  res.status(200).json(data)
}
