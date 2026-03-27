import ThemeToggle from "./Components/Theme/ThemeToggle";

function App() {
  return (
    <div className="themeSection">
      <div className="themeText">
        <h1>Appearance</h1>
        <p>Switch between light and dark mode</p>
      </div>
      <ThemeToggle />
    </div>
  );
}

export default App;
