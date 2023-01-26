import trashImg from "../List/assets/trashImg.svg";

export function List({ listTransactions, setListTransactions }) {
  function removeListItem(item) {
    const newTransactionsList = listTransactions.filter((transaction) => {
      return transaction != item;
    });

    setListTransactions(newTransactionsList);
  }

  return listTransactions.length > 0 ? (
    <>
      <h2>Resumo Financeiro</h2>
      <ul className="user-transactionList">
        {listTransactions.map((transaction) => {
          return (
            <li className="transaction-card" key={transaction.id}>
              <h2>{transaction.description}</h2>
              <span>{transaction.type}</span>
              <p>{transaction.value}</p>
              <div
                onClick={() => {
                  removeListItem(transaction);
                }}
              >
                <img src={trashImg} alt="" />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  ) : (
    <>
      <h2>Resumo Financeiro</h2>
      <h3>Você ainda não possui nenhum lançamento</h3>
    </>
  );
}
