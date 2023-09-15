'use client'

import useSWR from 'swr'

interface Transaction {
  id: string;
  value: number;
  direction: string;
  bank: string;
}

const fetcher = (url: RequestInfo | URL) => fetch(url).then(r => r.json())

function useTransactions () {
  const { data, error, isLoading } = useSWR('/api/transactions', fetcher)
 
  return {
    transactions: data,
    isLoading,
    isError: error
  }
}

export default function ListTransactionsSS() {
  const { transactions, isError, isLoading } = useTransactions();

  if (isError) return (
    <h2 style={{ color: 'red' }}> Ocorreu um erro</h2>
  );

  if (isLoading) return (
    <h2>Carregando ...</h2>
  );

  return (
    <ul>
      {!!transactions && transactions.map((transaction: Transaction, index: number) => (
        <li key={index} style={{ border: '1px solid red', margin: '1rem' }}>
          <p>{transaction.id}</p>
          <p>{transaction.value}</p>
          <p>{transaction.direction}</p>
          <p>{transaction.bank}</p>
        </li>
      ))}
    </ul>
  )
}
