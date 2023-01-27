import "./index.css";

export function Header({ changeBodyColor, setPage }) {
  return (
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
  );
}
