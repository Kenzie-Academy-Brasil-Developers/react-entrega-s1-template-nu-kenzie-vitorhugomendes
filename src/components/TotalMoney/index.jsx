import "./index.css";

export function TotalMoney({ listTransactions }) {
  const totalMoney = listTransactions.reduce((total, transaction) => {
    return total + transaction.value;
  }, 0);

  return listTransactions.length > 0 ? (
    <div className="user--total-value__container">
      <div>
        <h2>Valor Total</h2>
        <p>$ {totalMoney}</p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  ) : (
    <div></div>
  );
}
