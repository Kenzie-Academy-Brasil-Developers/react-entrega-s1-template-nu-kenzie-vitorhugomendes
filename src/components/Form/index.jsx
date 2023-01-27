import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./index.css";

export function Form({ listTransactions, setListTransactions }) {
  const [userInput, setUserInput] = useState({});

  return (
    <form
      className="user-form"
      onSubmit={(event) => {
        event.preventDefault();

        setListTransactions([...listTransactions, userInput]);

        console.log(listTransactions);
      }}
    >
      <label htmlFor="descrição">Descrição:</label>
      <input
        type="text"
        id="descrição"
        name="descrição"
        placeholder="Digite aqui sua descrição"
        required
      />
      <span>Ex: Compra de roupas</span>
      <div className="user--values-inputs__container">
        <div>
          <label htmlFor="valor">Valor</label>
          <div className="value-input__container">
            <input
              type="number"
              id="valor"
              name="valor"
              placeholder="1"
              required
            />
            <span>R$</span>
          </div>
        </div>
        <div>
          <label htmlFor="tipoDeValor">Tipo de Valor</label>
          <select name="tipo" id="tipo" required>
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        onClick={(event) => {
          const userDescription = event.target.form[0].value;
          let userValue = Number(event.target.form[1].value);
          const userValueType = event.target.form[2].value;

          if (userValueType == "saída") {
            userValue = -userValue;
          }

          setUserInput({
            description: userDescription,
            type: userValueType,
            value: userValue,
            id: uuid(),
          });
        }}
      >
        Inserir valor
      </button>
    </form>
  );
}
