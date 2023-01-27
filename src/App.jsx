import { useEffect, useState } from "react";
import landingPageImg from "./assets/landingPageImg.svg";
import "./styles/globalStyles.css";
import "./styles/landingPage.css";
import "./styles/homePage.css";

import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { List } from "./components/List";
import { Card } from "./components/Card";

function App() {
  const [page, setPage] = useState("LandingPage");
  const [bodyColor, setBodyColor] = useState("#212529");
  const [listTransactions, setListTransactions] = useState([]);

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
          </section>
        </main>
      ) : (
        <>
          <Header setPage={setPage} changeBodyColor={changeBodyColor}></Header>
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
              >
                <Card
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                ></Card>
              </List>
            </section>
          </main>
        </>
      )}
    </>
  );
}

export default App;
