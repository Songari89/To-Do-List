import "./App.css";

function App({ children }) {
  return (
    <div className="appcontainer">
      <div className="appwrap">{children}</div>
    </div>
  );
}

export default App;
