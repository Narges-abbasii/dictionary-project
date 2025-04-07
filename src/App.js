import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center fw-bold mb-5 ">
            English Dictionary App 🇺🇸
          </h1>
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Narges-abbasii"
            target="_blank"
            rel="noopener noreferrer"
          >
            Narges Abbasi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Narges-abbasii/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dictionary-project-jet.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Vercel
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
