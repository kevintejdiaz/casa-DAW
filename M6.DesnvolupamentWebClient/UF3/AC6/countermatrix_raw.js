const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<App />);

// Contexto para el color de fondo
const BgColorContext = React.createContext('red');

// Contexto para el color específico de FourCounter
const FourCounterColorContext = React.createContext({ first: 'blue', second: 'green' });

// Contexto para el contador sincronizado
const SyncCounterContext = React.createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {}
});

function App() {
  const [count, setCount] = React.useState(0);
  
  // Handler para el contador sincronizado
  const counterHandlers = {
    count,
    increment: () => setCount(c => c + 1),
    decrement: () => setCount(c => c - 1),
    reset: () => setCount(0)
  };
  
  return (
    <SyncCounterContext.Provider value={counterHandlers}>
      <BgColorContext.Provider value="red">
        <EightCounter />
      </BgColorContext.Provider>
    </SyncCounterContext.Provider>
  );
}

function EightCounter() {
  return (
    <>
      <FourCounterColorContext.Provider value={{ first: 'blue', second: 'green' }}>
        <FourCounter />
        <FourCounter />
      </FourCounterColorContext.Provider>
    </>
  );
}

function FourCounter() {
  const colors = React.useContext(FourCounterColorContext);
  
  return (
    <>
      <BgColorContext.Provider value={colors.first}>
        <TwoCounter />
      </BgColorContext.Provider>
      <BgColorContext.Provider value={colors.second}>
        <TwoCounter />
      </BgColorContext.Provider>
    </>
  );
}

function TwoCounter() {
  return (
    <>
      <Counter />
      <Counter />
    </>
  );
}

function Counter() {
  const bgColor = React.useContext(BgColorContext);
  const { count, increment, decrement, reset } = React.useContext(SyncCounterContext);

  return (
    <div className="counter" style={{ backgroundColor: bgColor }}>
      <div className="count-display">{count}</div>
      <div className="button-container">
        <button onClick={increment} className="button">+1</button>
        <button onClick={decrement} className="button">-1</button>
        <button onClick={reset} className="button">Reset</button>
      </div>
    </div>
  );
}