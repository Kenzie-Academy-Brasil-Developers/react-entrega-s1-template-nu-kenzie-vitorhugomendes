import trashImg from "../List/assets/trashImg.svg";
import "./index.css";

export function Card({ listTransactions, setListTransactions }) {
  function removeListItem(item) {
    const newTransactionsList = listTransactions.filter((transaction) => {
      return transaction != item;
    });

    setListTransactions(newTransactionsList);
  }

  return (
    <>
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
    </>
  );
}
