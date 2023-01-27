import "./index.css";

export function List({ listTransactions, children }) {
  return listTransactions.length > 0 ? (
    <>
      <h2 className="transaction-section--title">Resumo Financeiro</h2>
      <ul className="user-transactionList">{children}</ul>
    </>
  ) : (
    <>
      <h2 className="transaction-section--title">Resumo Financeiro</h2>
      <h3 className="transaction-section--subtitle">
        Você ainda não possui nenhum lançamento
      </h3>
    </>
  );
}
