import ListTransactionsSS from '@/components/list-transactions-ss';
import ListTransactionsCS from '@/components/list-transactions-cs';

export default async function Page() {
  return (
    <main style={{ minHeight: '100vh'}}>
      <div>
          <h1>Lista de transactions SS:</h1>

          <p>Get acontece no SERVER side e renderiza a listagem sem um loader para o usuario</p>

          <ListTransactionsSS />

          <h1>Lista de transactions SS:</h1>

          <p>Get acontece no CLIENT side e renderiza a listagem com um loader para o usuario</p>

          <ListTransactionsCS />

      </div>
    </main>
  )
}
