import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="title">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Mountain" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
