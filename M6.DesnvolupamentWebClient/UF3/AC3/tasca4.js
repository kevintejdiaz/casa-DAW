renderApp();

function renderApp() {
  const app = document.getElementById('app');

  function TrafficLight() {
    const [walk, setWalk] = React.useState(true);

    function handleClick() {
      // alert(`${walk? 'Stop' : 'Walk'} is next`);
      // setWalk(!walk);
      // alert(`${walk? 'Stop' : 'Walk'} is next`);


      alert(`${walk ? 'Stop' : 'Walk'} is next`); // "Stop is next"
      setWalk(!walk);  // ✅ Se agenda el cambio, pero `walk` sigue siendo true en este momento
    }

    return (
      <>
        <button onClick={handleClick}>
          Change to {walk ? 'Stop' : 'Walk'}
        </button>
        <h1 style={{
          color: walk ? 'darkgreen' : 'darkred'
        }}>
          {walk ? 'Walk' : 'Stop'}
        </h1>
      </>
    );
  }

  const root = ReactDOM.createRoot(app);
  root.render(<TrafficLight />);
}