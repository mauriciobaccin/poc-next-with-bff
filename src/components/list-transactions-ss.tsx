interface Transaction {
  id: string;
  value: number;
  direction: string;
  bank: string;
}

async function getData() {
  const res = await fetch('http://localhost:3000/api/transactions');

  if (!res.ok) {
    return []
  }

  return await res.json();
}

export default async function ListTransactionsSS() {
  const transactions: Transaction[] = await getData();
  console.log('transactions: ', transactions);

  return (
    <ul>
      {transactions.map((transaction, index) => (
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
