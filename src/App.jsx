import { useEffect, useState } from "react";
import landingPageImg from "./assets/landingPageImg.svg";
import "./styles/globalStyles.css";
import "./styles/landingPage.css";
import "./styles/homePage.css";

import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { List } from "./components/List";

function App() {
  const [page, setPage] = useState("LandingPage");
  const [bodyColor, setBodyColor] = useState("#212529");
  const [listTransactions, setListTransactions] = useState([
    {
      description: "Salário recebido",
      type: "entrada",
      value: 2500,
      id: "eakdsa231-534234",
    },
    {
      description: "Conta de luz",
      type: "saída",
      value: -150,
      id: "asddsa-o23-fdsapzx-3",
    },
  ]);

  function changeBodyColor(color) {
    setBodyColor(color);
  }

  useEffect(() => {
    document.body.style.backgroundColor = bodyColor;
  }, [bodyColor]);

  return (
    <>
      {page == "LandingPage" ? (
        <main className="main-landingPage__container">
          <section className="menu__section">
            <div className="menu__container">
              <h2>
                Nu <span>Kenzie</span>
              </h2>
              <h1>Centralize o controle das suas finanças</h1>
              <p>de forma rápida e segura</p>
              <button
                type="button"
                onClick={() => {
                  setPage("HomePage");
                  changeBodyColor("#ffffff");
                }}
              >
                Iniciar
              </button>
            </div>
          </section>
          <section className="img__section">
            <div className="img__container">
              <img src={landingPageImg} alt="homepage" />
            </div>
          </section>{" "}
        </main>
      ) : (
        <>
          <header className="header-homePage__container">
            <h2>
              Nu <span>Kenzie</span>
            </h2>
            <button
              type="button"
              onClick={() => {
                setPage("LandingPage");
                changeBodyColor("#212529");
              }}
            >
              Inicio
            </button>
          </header>
          <main className="main-homePage__container">
            <section className="user-form__section">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              ></Form>

              <TotalMoney listTransactions={listTransactions}></TotalMoney>
            </section>

            <section className="user-transactionList__section">
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              ></List>
            </section>
          </main>
        </>
      )}
    </>
  );
}

export default App;
