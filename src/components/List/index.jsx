import trashImg from "../List/assets/trashImg.svg";
import "./index.css";

export function List({ listTransactions, setListTransactions }) {
  function removeListItem(item) {
    const newTransactionsList = listTransactions.filter((transaction) => {
      return transaction != item;
    });

    setListTransactions(newTransactionsList);
  }

  return listTransactions.length > 0 ? (
    <>
      <h2 className="transaction-section--title">Resumo Financeiro</h2>
      <ul className="user-transactionList">
        {listTransactions.map((transaction) => {
          return (
            <li
              className={`transaction-card ${transaction.type}`}
              key={transaction.id}
            >
              <div className="user-description__container">
                <h2>{transaction.description}</h2>
                <span>{transaction.type}</span>
              </div>
              <div className="user-value__container">
                <p>R$ {transaction.value}</p>
                <div
                  onClick={() => {
                    removeListItem(transaction);
                  }}
                >
                  <img src={trashImg} alt="" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
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
